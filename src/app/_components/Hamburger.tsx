import { motion } from "framer-motion";
interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
  mouseOver: boolean;
}
function Hamburger({ menuOpen, setMenuOpen, mouseOver }: HeaderProps) {
  return (
    <>
      <button
        id="hamburger-container"
        className="flex h-8 w-8 flex-col justify-between md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <motion.span
          className={`block h-1 w-8 rounded-full bg-gray-500 ${mouseOver ? "bg-gray-600" : ""}`}
          animate={{
            rotateZ: !menuOpen ? 0 : -45,
            translateY: !menuOpen ? 0 : "14px",
          }}
        ></motion.span>
        <div className="h-1">
          <motion.span
            className={`absolute block h-1 w-8 rounded-full bg-gray-500 ${mouseOver ? "bg-gray-600" : ""}`}
            animate={{
              rotateZ: !menuOpen ? 0 : 45,
            }}
          ></motion.span>
          <motion.span
            className={`absolute block h-1 w-8 rounded-full bg-gray-500 ${mouseOver ? "bg-gray-600" : ""}`}
            animate={{
              rotateZ: !menuOpen ? 0 : -45,
            }}
          ></motion.span>
        </div>
        <motion.span
          className={`block h-1 w-8 rounded-full bg-gray-500 ${mouseOver ? "bg-gray-600" : ""}`}
          animate={{
            rotateZ: !menuOpen ? 0 : 45,
            translateY: !menuOpen ? 0 : "-14px",
          }}
        ></motion.span>
      </button>
    </>
  );
}

export default Hamburger;

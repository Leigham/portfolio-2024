// components/ContactSection.tsx
"use client";

const ContactSection = () => (
  <section id="contact" className="py-12">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <p className="mt-4 text-lg">
        I’d love to hear from you. Feel free to reach out using the form below
        or through my social media channels.
      </p>
      <form className="mx-auto mt-8 max-w-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-left">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full rounded-lg border border-gray-300 px-4 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-left">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full rounded-lg border border-gray-300 px-4 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-left">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full rounded-lg border border-gray-300 px-4 py-2"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-6 py-2 text-white shadow-md transition duration-300 hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default ContactSection;

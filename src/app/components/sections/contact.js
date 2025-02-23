export default function Contact() {
  return (
    <section
      id="contact"
      className="font-sans mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Contact Us"
    >
      <div className="flex flex-col xl:flex-row gap-12 justify-center items-center">
        <div className=" m1-24flex-[0.75] w-full max-w-4xl p-8 rounded-xl bg-slate-900 border-4 border-slate-800">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-200 sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg font-medium text-slate-400 sm:text-xl">
            We’d love to hear from you! Fill out the form below to get in touch.
          </p>
          <form className="mt-8 flex flex-col gap-6 w-full">
            {/* Name */}
            <label className="flex flex-col">
              <span className="font-semibold text-lg sm:text-xl text-slate-200 mb-2">
                Your Name
              </span>
              <input
                type="text"
                placeholder="Enter your full name"
                className="bg-slate-800 text-teal-300 border border-slate-700 rounded-lg py-3 px-4 placeholder-slate-500 focus:ring-2 focus:ring-teal-400 focus:outline-none transition duration-200"
              />
            </label>

            {/* Email */}
            <label className="flex flex-col">
              <span className="font-semibold text-lg sm:text-xl text-slate-200 mb-2">
                Your Email
              </span>
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-slate-800 text-teal-300 border border-slate-700 rounded-lg py-3 px-4 placeholder-slate-500 focus:ring-2 focus:ring-teal-400 focus:outline-none transition duration-200"
              />
            </label>

            {/* Subject */}
            <label className="flex flex-col">
              <span className="font-semibold text-lg sm:text-xl text-slate-200 mb-2">
                Subject
              </span>
              <input
                type="text"
                placeholder="Enter the subject of your message"
                className="bg-slate-800 text-teal-300 border border-slate-700 rounded-lg py-3 px-4 placeholder-slate-500 focus:ring-2 focus:ring-teal-400 focus:outline-none transition duration-200"
              />
            </label>

            {/* Message */}
            <label className="flex flex-col">
              <span className="font-semibold text-lg sm:text-xl text-slate-200 mb-2">
                Your Message
              </span>
              <textarea
                rows="7"
                placeholder="Write your message here"
                className="bg-slate-800 text-teal-300 border border-slate-700 rounded-lg py-3 px-4 placeholder-slate-500 focus:ring-2 focus:ring-teal-400 focus:outline-none transition duration-200 resize-none"
              />
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex justify-center items-center text-lg sm:text-xl bg-slate-500 text-slate-900 font-bold rounded-lg py-3 px-6 hover:bg-teal-400 focus:ring-4 focus:ring-teal-300 transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

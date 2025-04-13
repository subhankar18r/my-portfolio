import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-200">
        Contact
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-start gap-8 px-4">
        <div className="left w-full md:w-1/2  p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-gray-200">
            Do you have a Project to discuss?
          </h3>
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-200">EMAIL</h2>
            <p className="text-gray-200">subhankar18r@gmail.com</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-200 mb-2">
              SOCIAL MEDIA
            </h2>
            <div className="flex gap-4 text-gray-600 text-2xl">
              <FaLinkedin className="hover:text-blue-700 cursor-pointer" />
              <FaWhatsapp className="hover:text-green-500 cursor-pointer" />
              <FaSquareXTwitter className="hover:text-blue-500 cursor-pointer" />
              <FaDiscord className="hover:text-indigo-500 cursor-pointer" />
              <FaInstagram className="hover:text-pink-500 cursor-pointer" />
              <FaFacebook className="hover:text-blue-600 cursor-pointer" />
              <FaTelegramPlane className="hover:text-blue-400 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="right w-full md:w-1/2  p-6 rounded-lg shadow-md">
          <form action="" method="post" className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-200 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-200 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-200 mb-1"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

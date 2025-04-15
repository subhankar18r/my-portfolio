import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="w-full scroll-mt-16">
      <h2 className="mb-6 text-center text-4xl font-bold text-gray-200">
        Contact
      </h2>
      <div className="flex flex-col items-start justify-center gap-8 md:flex-row">
        <div className="left w-full rounded-lg shadow-md md:w-1/2">
          <h3 className="mb-4 text-2xl font-semibold text-gray-200">
            Do you have a Project to discuss?
          </h3>
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-200">EMAIL</h2>
            <a
              href="mailto:subhankar18r@gmail.com"
              className="text-blue-500 hover:underline"
            >
              subhankar18r@gmail.com
            </a>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-bold text-gray-200">
              SOCIAL MEDIA
            </h2>
            <div className="flex flex-wrap justify-center gap-4 text-2xl text-gray-600">
              <a
                href="https://www.linkedin.com/in/subhankar18r"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-blue-700 md:hover:text-blue-700"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://wa.me/919064099578"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-green-500 md:hover:text-green-500"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://x.com/subhankar18r"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-blue-500 md:hover:text-blue-500"
              >
                <FaSquareXTwitter />
              </a>
              <a
                href="https://discord.gg/rtWZjKcF"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-indigo-500 md:hover:text-indigo-500"
              >
                <FaDiscord />
              </a>
              <a
                href="https://www.instagram.com/subhankar18r"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-pink-500 md:hover:text-pink-500"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61569845498879"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-blue-600 md:hover:text-blue-600"
              >
                <FaFacebook />
              </a>
              <a
                href="https://t.me/subhankar18r"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-blue-400 md:hover:text-blue-400"
              >
                <FaTelegramPlane />
              </a>
              <a
                href="https://github.com/subhankar18r"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-gray-500 md:hover:text-gray-500"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

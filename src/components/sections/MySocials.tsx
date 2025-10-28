import {
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import RollingText from "../RollingText";

export default function MySocials() {
  return (
    <div className="flex flex-col gap-6">
      <RollingText
        delay={0.2}
        title={"My Socials"}
        classes="text-2xl text-left items-start w-fit"
      />

      <ul className="grid sm:grid-cols-2 grid-cols-1 gap-6 ">
        <li>
          <a
            target="_blank"
            className="flex items-center gap-2 justify-center font-medium capitalize bg-[#0a66c2] hover:bg-[#0674e2] duration-300 text-white px-4 py-2 rounded-sm  w-full"
            href="https://www.linkedin.com/in/ibrahim-saleh-dev/">
            <span>
              <FaLinkedin className="w-5 h-5" />
            </span>
            linkedin
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="flex items-center gap-2  justify-center font-medium capitalize bg-[#333] hover:bg-[#1d1d1d] duration-300 text-white px-4 py-2 rounded-sm  w-full"
            href="https://github.com/ibrahimsaleh8">
            <span>
              <FaGithub className="w-5 h-5" />
            </span>
            github
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="flex items-center gap-2   justify-center font-medium capitalize bg-[#1877f2] hover:bg-[#036df7] duration-300 text-white px-4 py-2 rounded-sm  w-full"
            href="https://www.facebook.com/ibrahim7saleh/">
            <span>
              <FaFacebookSquare className="w-5 h-5" />
            </span>
            Facebook
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="flex items-center gap-2   justify-center font-medium capitalize bg-[#075e54] hover:bg-[#058576] duration-300 text-white px-4 py-2 rounded-sm  w-full"
            href="https://wa.me/201015405904?text=">
            <span>
              <FaWhatsapp className="w-5 h-5" />
            </span>
            Whatsapp
          </a>
        </li>

        <li>
          <a
            target="_blank"
            className="flex items-center gap-2   justify-center font-medium capitalize bg-[#0088cc] hover:bg-[#0898e0] duration-300 text-white px-4 py-2 rounded-sm  w-full"
            href="https://t.me/Noyan_71">
            <span>
              <FaTelegramPlane className="w-5 h-5" />
            </span>
            telegram
          </a>
        </li>
      </ul>
    </div>
  );
}

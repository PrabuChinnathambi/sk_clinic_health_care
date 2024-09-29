import { TbBrandGithub } from "react-icons/tb";
import { SlSocialYoutube } from "react-icons/sl";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { RiMailSettingsLine } from "react-icons/ri";

const Footer = () => {
  const phoneNumber = "+917598776007"; // Replace with your WhatsApp number (including country code)
  const message = "Hello, I’d like to inquire about your service."; // Pre-filled message

  return (
    <div className=" md:hidden">
      <div className="flex flex-row gap-4">
        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
          )}`}
          target="_blank"
        >
          <span className="w-8 h-8 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <FaWhatsapp />
          </span>
        </a>
        <a
          href="https://www.youtube.com/channel/UChkOsij0dhgft0GhHRauOAA"
          target="_blank"
        >
          <span className="w-8 h-8 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialFacebook />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/noor-mohammad-ab2245193/"
          target="_blank"
        >
          <span className="w-8 h-8 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialInstagram />
          </span>
        </a>
        <a href="https://www.facebook.com/Noorlalu143/" target="_blank">
          <span className="w-8 h-8 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <RiMailSettingsLine />
          </span>
        </a>
        <a href="https://www.instagram.com/simplenoor143/" target="_blank">
          <span className="w-8 h-8 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            {/* <SlSocialInstagram /> */}
            <FaLinkedin />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Footer;

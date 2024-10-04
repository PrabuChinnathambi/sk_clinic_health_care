import { TbBrandGithub } from "react-icons/tb";
import { SlSocialYoutube } from "react-icons/sl";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { RiMailSettingsLine } from "react-icons/ri";
import {
  doctor_1_Icon,
  doctor_2_Icon,
  doctors_room_Icon,
  medical_team_Icon,
  stethoscope_Icon,
} from "@/public/assets";
import Image from "next/image";

const LeftSide = () => {
  const phoneNumber = "+917598776007"; // Replace with your WhatsApp number (including country code)
  const message = "Hello, I’d like to inquire about your service."; // Pre-filled message

  const email = "skhealthcare0709@gmail.com";

  const subject = "Hello!";
  const body = "I hope this message finds you well.";

  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
          )}`}
          target="_blank"
        >
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <FaWhatsapp />
          </span>
        </a>
        <a
          href="https://www.facebook.com/share/YZkk5KJHmcEzMSdZ/?mibextid=qi2Omg"
          target="_blank"
        >
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialFacebook />
          </span>
        </a>
        <a
          href="https://www.instagram.com/skhealthcare0709/?igsh=Y3EwemdoNXpmb2dv"
          target="_blank"
        >
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialInstagram />
          </span>
        </a>
        <a href={`mailto:${email}`} target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <RiMailSettingsLine />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/sk-healthcare-495060331/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
        >
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            {/* <SlSocialInstagram /> */}
            <FaLinkedin />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
};

export default LeftSide;

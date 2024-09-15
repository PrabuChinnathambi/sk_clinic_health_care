import { TbBrandGithub } from "react-icons/tb";
import { SlSocialYoutube } from "react-icons/sl";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";
import {
  doctor_1_Icon,
  doctor_2_Icon,
  doctors_room_Icon,
  medical_team_Icon,
  stethoscope_Icon,
} from "@/public/assets";
import Image from "next/image";

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/noorjsdivs" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            {/* <TbBrandGithub /> */}
            <Image src={doctor_1_Icon} alt={""} className="w-6 h-6" />
          </span>
        </a>
        <a
          href="https://www.youtube.com/channel/UChkOsij0dhgft0GhHRauOAA"
          target="_blank"
        >
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            {/* <SlSocialYoutube /> */}
            <Image src={doctor_2_Icon} alt={""} className="w-6 h-6" />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/noor-mohammad-ab2245193/"
          target="_blank"
        >
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            {/* <SlSocialLinkedin /> */}
            <Image src={medical_team_Icon} alt={""} className="w-6 h-6" />
          </span>
        </a>
        <a href="https://www.facebook.com/Noorlalu143/" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            {/* <SlSocialFacebook /> */}
            <Image src={stethoscope_Icon} alt={""} className="w-6 h-6" />
          </span>
        </a>
        <a href="https://www.instagram.com/simplenoor143/" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            {/* <SlSocialInstagram /> */}
            <Image src={doctors_room_Icon} alt={""} className="w-6 h-6" />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
};

export default LeftSide;

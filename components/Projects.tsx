import {
  amazonImg,
  cyberImg,
  noorShop,
  Diabetic_Management_Img,
  Expert_Wound_Care_Img,
  Emergency_Medical_Services_Img,
  Hypertension_Control_Img,
  Comprehensive_ECG_Testing_Img,
} from "@/public/assets";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Our Areas of Expertise" titleNo="03" />
      {/* ============ project One Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://nextamazon.reactbd.com/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain rounded-lg"
                src={Diabetic_Management_Img}
                alt="amazonImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                How We Can Help:
              </p>
              <h3 className="text-2xl font-bold">Diabetic Management</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              We provide comprehensive diabetic management through regular
              monitoring of blood glucose levels, personalized treatment plans,
              and medication management. Our approach includes lifestyle and
              dietary advice, regular check-ups, and education on effective
              diabetes management to prevent complications and support overall
              health.
            </p>
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Symptoms:
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Thirst</li>
              <li>Fatigue</li>
              <li> Blurred Vision</li>
              <li>Frequent Urination</li>
              <li>Slow-Healing</li>
            </ul>
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://www.noormohmmad.com/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain rounded-lg"
                src={Hypertension_Control_Img}
                alt="cyberImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                How We Can Help:
              </p>
              <h3 className="text-2xl font-bold">Hypertension Control</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
              We provide thorough assessment and management of hypertension with
              regular blood pressure monitoring, prescription of
              antihypertensive medications, and guidance on lifestyle changes
              like diet and exercise. Our goal is to effectively control blood
              pressure and minimize the risk of related complications.
            </p>
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Symptoms:
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Headaches</li>
              <li>Dizziness</li>
              <li>Shortness of Breath</li>
              <li>Nosebleeds</li>
            </ul>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://noorshop.netlify.app/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain rounded-lg"
                src={Expert_Wound_Care_Img}
                alt="noorShop"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                How We Can Help:
              </p>
              <h3 className="text-2xl font-bold">Expert Wound Care</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
              Our expert wound management services include cleaning, dressing,
              and monitoring wounds to promote healing. We offer personalized
              care plans to prevent infection and support recovery, including
              guidance on wound care techniques and follow-up care.
            </p>
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Symptoms:
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Redness</li>
              <li>Swelling</li>
              <li>Discharge</li>
              <li>Pain</li>
            </ul>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://www.noormohmmad.com/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain rounded-lg"
                src={Comprehensive_ECG_Testing_Img}
                alt="cyberImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                How We Can Help:
              </p>
              <h3 className="text-2xl font-bold">Comprehensive ECG Testing</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
              We provide advanced ECG testing to accurately assess heart health.
              The results are analyzed to diagnose and manage cardiac
              conditions, with treatment plans that may include medications,
              lifestyle changes, or further referrals if needed. Our aim is to
              ensure effective monitoring and management of heart health.
            </p>
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Symptoms:
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Chest Pain</li>
              <li>Palpitations</li>
              <li>Dizziness</li>
              <li>Shortness of Breath</li>
            </ul>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://noorshop.netlify.app/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain rounded-lg"
                src={Emergency_Medical_Services_Img}
                alt="noorShop"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                How We Can Help:
              </p>
              <h3 className="text-2xl font-bold">Emergency Medical Services</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
              Our emergency services offer prompt and efficient care for acute
              conditions. This includes initial assessment, stabilization, and
              treatment, ensuring timely intervention and appropriate management
              of urgent health concerns.
            </p>
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Symptoms:
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Pain</li>
              <li> Difficulty Breathing</li>
              <li>Unconsciousness</li>
              <li>Bleeding</li>
            </ul>
          </div>
        </div>
        {/* ============ project Three End here ================== */}
      </div>
    </section>
  );
};

export default Projects;

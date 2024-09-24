import { santhanaKumarImg, kavithaImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 mdl:py-22 flex flex-col gap-8"
    >
      <SectionTitle title="About Us" titleNo="02" displayLine={true} />
      <div className="flex flex-col lgl:flex-row gap-28">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Welcome to SK Healthcare, where your health is our top priority. We
            are dedicated to providing high-quality medical care with a
            personalized approach. Our practice is led by a team of experienced
            and compassionate professionals who are here to support your health
            needs.
          </p>
          <p>
            <span className="text-textGreen">Dr. Santhana Kumar, MBBS, </span>
            is our skilled general physician with six years of experience in the
            field. He is available for consultations from 5 pm to 9 pm, offering
            expert care and attention to each patient’s unique health concerns.
          </p>
          <p>
            <span className="text-textGreen">
              Dr. Kavitha, MBBS MD in General Medicine,{" "}
            </span>
            complements our team with her extensive expertise and six years of
            experience. She is available from 9 am to 2 pm, providing
            comprehensive care and personalized treatment plans to ensure your
            well-being.
          </p>
          <p>
            Our facility is equipped with essential diagnostic tools, including
            ECG and laboratory services, to support accurate and efficient
            diagnosis and treatment. At SK Healthcare, we are committed to
            delivering reliable and compassionate care, tailored to meet your
            individual health needs.
          </p>

          <p>
            At SK Healthcare, we specialize in treating a broad spectrum of
            common health conditions, including respiratory issues,
            cardiovascular problems, and digestive disorders. Our experienced
            team offers effective management for conditions like asthma,
            hypertension, and GERD, utilizing both medications and lifestyle
            recommendations.
          </p>
          <p>
            We also provide care for endocrine disorders, musculoskeletal
            issues, and general wellness needs. Our clinic supports preventive
            measures through routine screenings and vaccinations, ensuring
            comprehensive care tailored to your specific health requirements.
          </p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Diabetic Management
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Hypertensive Management
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Wound Management
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              ECG Services
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Laboratory Services
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Emergency Services
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              IV Fluids Administration
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Preventive Health Screenings
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-16 w-full lgl:w-1/3 ">
          <div className="h-80 relative group">
            <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
              <div className="w-full h-full relative z-20 flex pl-12 lgl:pl-0">
                <Image
                  className="rounded-lg h-full object-cover"
                  src={santhanaKumarImg}
                  alt="profileImg"
                />
                {/* <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div> */}
              </div>
            </div>
            <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
          </div>
          <div className="h-80 relative group">
            <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
              <div className="w-full h-full relative z-20 flex pl-12 lgl:pl-0">
                <Image
                  className="rounded-lg w-full h-full object-cover"
                  src={kavithaImg}
                  alt="profileImg"
                />
                {/* <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div> */}
              </div>
            </div>
            <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { motion } from "framer-motion";
import Image from "next/image";
import { stethoscopeBannerImage } from "@/public/assets";
import Link from "next/link";
const Banner = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mdl:flex flex-row justify-center items-center">
      <section
        id="home"
        className="max-w-contentContainer py-10 md:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-6 xl:px-4"
      >
        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg font-titleFont tracking-wide text-textGreen"
        >
          Hi, Welcome to
        </motion.h3>
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
        >
          SK World-class care
          <span className="text-textDark mt-2 lgl:mt-4">
            Closer than you think
          </span>
        </motion.h1>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-base md:max-w-[650px] text-textDark font-medium"
        >
          Our clinic is a reputable healthcare provider dedicated to offering
          high-quality medical services to individuals and families. Our team of
          experienced general physicians, all holding an MBBS degree, provides
          comprehensive and compassionate care to patients of all ages.
        </motion.p>

        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          onClick={() => handleScroll("contact")}
          className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide flex items-center justify-center hover:bg-hoverColor duration-300 cursor-pointer"
        >
          Book an Appointment
        </motion.button>
      </section>
      <section className="basis-1/4 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Image
            className="stethoscope_banner_img rounded-lg"
            src={stethoscopeBannerImage}
            alt="img"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default Banner;

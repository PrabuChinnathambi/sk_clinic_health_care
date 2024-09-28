import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import {
  image1,
  image10,
  image11,
  image12,
  image13,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
} from "@/public/assets";
import SectionTitle from "./SectionTitle";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="gallery" className="max-w-container mx-auto lgl:px-20 py-15">
      <div className="max-w-contentContainer mx-auto px-4 py-24 md:mt-24">
        <div className="w-full flex flex-col items-center">
          <SectionTitle
            title="Gallery of Excellence"
            titleNo="04"
            displayLine={false}
          />
          <p className="text-sm font-titleFont text-textGreen py-2">
            A Visual Journey
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Image
                className="h-[120px] md:h-[315px] max-w-full rounded-lg hover:-translate-y-2 transition-transform duration-300 cursor-pointer object-cover object-center"
                src={image1}
                alt=""
                width={1200} // Example width
                height={800}
              />
            </motion.div>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Image
                className="h-[120px] md:h-[315px] max-w-full rounded-lg hover:-translate-y-2 transition-transform duration-300 cursor-pointer object-cover object-center"
                src={image2}
                alt=""
                width={1200} // Example width
                height={800}
              />
            </motion.div>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Image
                className="h-[120px] md:h-[315px] max-w-full rounded-lg hover:-translate-y-2 transition-transform duration-300 cursor-pointer object-cover object-center"
                src={image3}
                alt=""
                width={1200} // Example width
                height={800}
              />
            </motion.div>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Image
                className="h-[120px] md:h-[315px] max-w-full rounded-lg hover:-translate-y-2 transition-transform duration-300 cursor-pointer object-cover object-center"
                src={image4}
                alt=""
                width={1200} // Example width
                height={800}
              />
            </motion.div>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Image
                className="h-[120px] md:h-[315px] max-w-full rounded-lg hover:-translate-y-2 transition-transform duration-300 cursor-pointer object-cover object-center"
                src={image5}
                alt=""
                width={1200} // Example width
                height={800}
              />
            </motion.div>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Image
                className="h-[120px] md:h-[315px] max-w-full rounded-lg hover:-translate-y-2 transition-transform duration-300 cursor-pointer object-cover object-center"
                src={image6}
                alt=""
                width={1200} // Example width
                height={800}
              />
            </motion.div>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Image
                className="h-[120px] md:h-[315px] max-w-full rounded-lg hover:-translate-y-2 transition-transform duration-300 cursor-pointer object-cover object-center"
                src={image7}
                alt=""
                width={1200} // Example width
                height={800}
              />
            </motion.div>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Image
                className="h-[120px] md:h-[315px] max-w-full rounded-lg hover:-translate-y-2 transition-transform duration-300 cursor-pointer object-cover object-center"
                src={image8}
                alt=""
                width={1200} // Example width
                height={800}
              />
            </motion.div>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Image
                className="h-[120px] md:h-[315px] max-w-full rounded-lg hover:-translate-y-2 transition-transform duration-300 cursor-pointer object-cover object-center"
                src={image9}
                alt=""
                width={1200} // Example width
                height={800}
              />
            </motion.div>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Image
                className="h-[120px] md:h-[315px] max-w-full rounded-lg hover:-translate-y-2 transition-transform duration-300 cursor-pointer object-cover object-center"
                src={image10}
                alt=""
                width={1200} // Example width
                height={800}
              />
            </motion.div>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Image
                className="h-[120px] md:h-[315px] max-w-full rounded-lg hover:-translate-y-2 transition-transform duration-300 cursor-pointer object-cover object-center"
                src={image11}
                alt=""
                width={1200} // Example width
                height={800}
              />
            </motion.div>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Image
                className="h-[120px] md:h-[315px] max-w-full rounded-lg hover:-translate-y-2 transition-transform duration-300 cursor-pointer object-cover object-center"
                src={image13}
                alt=""
                width={1200} // Example width
                height={800}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Archive;

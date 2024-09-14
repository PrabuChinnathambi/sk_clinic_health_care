import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
} from "@/public/assets";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="gallery" className="max-w-container mx-auto lgl:px-20 py-24">
      <div className="max-w-contentContainer mx-auto px-4 py-24">
        <div className="w-full flex flex-col items-center">
          <h2 className="text-3xl font-titleFont font-semibold">
            Gallery of Excellence
          </h2>
          <p className="text-sm font-titleFont text-textGreen">
            A Visual Journey
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          <div className="grid gap-4">
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Image
                  className="h-auto max-w-full rounded-lg hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
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
                  className="h-auto max-w-full rounded-lg hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
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
                  className="h-auto max-w-full rounded-lg hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
                  src={image3}
                  alt=""
                  width={1200} // Example width
                  height={800}
                />
              </motion.div>
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Image
                  className="h-auto max-w-full rounded-lg hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
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
                  className="h-auto max-w-full rounded-lg hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
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
                  className="h-auto max-w-full rounded-lg hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
                  src={image6}
                  alt=""
                  width={1200} // Example width
                  height={800}
                />
              </motion.div>
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Image
                  className="h-auto max-w-full rounded-lg hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
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
                  className="h-auto max-w-full rounded-lg hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
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
                  className="h-auto max-w-full rounded-lg hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
                  src={image1}
                  alt=""
                  width={1200} // Example width
                  height={800}
                />
              </motion.div>
            </div>
          </div>
          {/* <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
              alt=""
              width={1200} // Example width
              height={800}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
              alt=""
              width={1200} // Example width
              height={800}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
              alt=""
              width={1200} // Example width
              height={800}
            />
          </div>
        </div> */}
        </div>
      </div>
    </section>
  );
};

export default Archive;

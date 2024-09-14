import { image1 } from "@/public/assets";
import Image, { StaticImageData } from "next/image";
import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

interface Props {
  image: StaticImageData;
}

const ArchiveCard = ({ image }: Props) => {
  return (
    // <a href={link} target="_blank">
    //   <div className="w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
    //     <div className="flex justify-between items-center">
    //       <FaRegFolder className="text-4xl text-textGreen" />
    //       <RxOpenInNewWindow className="text-2xl hover:text-textGreen" />
    //     </div>
    //     <div>
    //       {image && (
    //         <Image
    //           src={image}
    //           alt={""}
    //           layout="fill"
    //           objectFit="cover" // Adjust the fit
    //           className="rounded-lg" // Optional: for styling like rounded corners
    //         />
    //       )}
    //       {/* <h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen">
    //         {title}
    //       </h2>
    //       <p className="text-sm mt-3">{des}</p> */}
    //     </div>
    //     {/* <ul className="text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap">
    //       {listItem.map((item, i) => (
    //         <li key={i}>{item}</li>
    //       ))}
    //     </ul> */}
    //   </div>
    // </a>
    <Image
      src={image}
      alt="Responsive Image"
      className=" object-cover min-w-full min-h-full h-full"
    />
  );
};

export default ArchiveCard;

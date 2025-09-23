import { FaCheck } from "react-icons/fa";

export default function FeatureItem({ number, title, description }) {
  return (
    <div className="flex flex-row space-x-4 ">
   {/*    <span className="inline-flex items-center justify-start underline w-full h-auto bg-[#272727] text-white flex-shrink-0  font-medium text-xs font-sans">
        {number}
      </span> */}
      <span className="inline-flex items-center justify-center w-6 h-6 border rounded-full bg-[#272727] text-[#CACC90] flex-shrink-0 mt-1">
              <FaCheck className="text-xs" />
            </span>
      <div className="space-y-0">
        <h4 className="text-white">{title}</h4>
        <div className="">
        <p className="text-white">
          {description}
        </p>
        </div>
      </div>
    </div>
  );
}
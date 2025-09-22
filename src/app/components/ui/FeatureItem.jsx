export default function FeatureItem({ number, title, description }) {
  return (
    <div className="flex flex-col space-y-1 ">
   {/*    <span className="inline-flex items-center justify-start underline w-full h-auto bg-[#272727] text-white flex-shrink-0  font-medium text-xs font-sans">
        {number}
      </span> */}
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
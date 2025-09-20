export default function FeatureItem({ number, title, description }) {
  return (
    <div className="flex space-x-4">
      <span className="inline-flex items-center justify-center border  w-7 h-7 rounded-full bg-[#272727] text-white flex-shrink-0 mt-1.5 font-medium text-xs font-sans">
        {number}
      </span>
      <div className="space-y-1">
        <h4 className="text-white font-semibold">{title}</h4>
        <p className="text-white/80 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
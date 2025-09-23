import { FaCheck } from 'react-icons/fa';

export default function CheckmarkItem({ children }) {
  return (
    <div className="flex space-x-4">
      {/* <span className="inline-flex items-center justify-center w-6 h-6 border rounded-full bg-white text-[#CACC90] flex-shrink-0 mt-1">
        <FaCheck className="text-xs" />
      </span> */}
      <div>
        <p className="text-sm leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
}
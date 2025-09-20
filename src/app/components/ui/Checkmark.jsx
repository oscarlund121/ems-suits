import { FaCheck } from 'react-icons/fa';

export default function Checkmark({ 
  children,
  variant = 'green',
  className = '' 
}) {
  const variants = {
    green: 'bg-[#272727] text-white',
    black: 'bg-white border border-black text-black',
    blue: 'bg-blue-500 text-white'
  };
  
  return (
    <div className={`flex items-start ${className}`}>
      <span className={`inline-flex items-center justify-center w-5 h-5 mr-3 rounded-full flex-shrink-0 ${variants[variant]}`}>
        <FaCheck className="text-xs" />
      </span>
      <span>{children}</span>
    </div>
  );
}
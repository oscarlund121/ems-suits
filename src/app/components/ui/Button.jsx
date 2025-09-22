import Link from 'next/link';



export default function Button({ 
  children, 
  variant = 'primary', 
  href,
  onClick, 
  className = '' 
}) {
  const baseStyles = 'inline-flex items-center justify-center px-8 py-4 font-light text-sm transition-all duration-200 focus:outline-none  tracking-wide font-sans';
  
  const variants = {
    primary: 'bg-white border border-white text-[#272727] hover:bg-[#272727] hover:text-white hover:underline',
    secondary: 'bg-[#272727] border border-[#272727] text-white hover:bg-white hover:text-[#272727] hover:underline',
    cta: 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md text-gray-800'
  };
  
  const classes = `${baseStyles} ${variants[variant]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
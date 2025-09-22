export default function Small({ children, className = '' }) {
  return (
    <small className={`text-[#CACC90] uppercase ${className}`}>
      {children}
    </small>
  );
}
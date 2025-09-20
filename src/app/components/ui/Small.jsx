export default function Small({ children, className = '' }) {
  return (
    <small className={`text-[#B8B08D]/70 uppercase ${className}`}>
      {children}
    </small>
  );
}
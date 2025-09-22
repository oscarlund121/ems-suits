import Small from './Small.jsx';

export default function SectionHeader({ smallText, title, centered = false, className = '' }) {
  const alignmentClasses = centered ? 'text-center' : '';
  
  return (
    <div className={`space-y-2 ${alignmentClasses} ${className}`}>
      <Small>{smallText}</Small>
      <h2 className='mt-2'>{title}</h2>
    </div>
  );
}
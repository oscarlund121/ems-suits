import Small from './Small.jsx';

export default function SectionHeader({ smallText, title, className = '' }) {
  return (
    <div className={`space-y-2 ${className}`}>
      <Small>{smallText}</Small>
      <h2 className='mt-2'>{title}</h2>
    </div>
  );
}
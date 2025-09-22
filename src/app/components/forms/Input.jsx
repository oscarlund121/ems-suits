export default function Input({ 
  label, 
  name,
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  error,
  required = false,
  className = '' 
}) {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-[#272727] mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        className={`
          w-full px-3.5 py-2.5 border bg-white text-[#272727]
          placeholder:text-gray-400 border-gray-300
          focus:outline-none focus:border-[#272727]
          disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed
          ${error ? 'border-red-500 focus:border-red-500' : ''}
          ${className}
        `}
        required={required}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>)}
    </div>
  );
}
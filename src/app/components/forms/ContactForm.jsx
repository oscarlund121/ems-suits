import { useState } from 'react';
import Input from './Input.jsx';
import Button from '../ui/Button.jsx';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Navn er påkrævet';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email er påkrævet';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email format er ikke gyldigt';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Besked er påkrævet';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      // Submit form
      console.log('Form submitted:', formData);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <Input
        label="Navn"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        required
        placeholder="Dit fulde navn"
      />
      
      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        required
        placeholder="din@email.dk"
      />
      
      <Input
        label="Telefon"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="+45 12 34 56 78"
      />
      
      <Input
        label="Virksomhed"
        name="company"
        value={formData.company}
        onChange={handleChange}
        placeholder="Din virksomhed (valgfrit)"
      />
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Besked <span className="text-red-500 ml-1">*</span>
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={`
            w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            ${errors.message ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}
          `}
          placeholder="Beskriv dine behov eller stil et spørgsmål..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>
      
      <Button type="submit" variant="primary" size="large" className="w-full">
        Send besked
      </Button>
    </form>
  );
}
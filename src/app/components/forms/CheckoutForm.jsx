import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Input from './Input.jsx';
import Button from '../ui/Button.jsx';
import useCartStore from '../../../store/cartStore';
import { formatPrice } from '../../../lib/products';
import { sendOrderEmail } from '../../../lib/emailService';

export default function CheckoutForm() {
  const router = useRouter();
  const { items, getTotalPrice, clearCart } = useCartStore();
  
  const [formData, setFormData] = useState({
    // Personlige oplysninger
    name: '',
    email: '',
    phone: '',
    
    // Firma oplysninger
    company: '',
    cvr: '',
    
    // Faktura adresse
    invoiceAddress: '',
    invoiceCity: '',
    invoiceZip: '',
    
    // Leveringsadresse
    deliveryAddress: '',
    deliveryCity: '', 
    deliveryZip: '',
    sameAsInvoice: true,
    
    // Øvrige oplysninger
    specialInstructions: '',
    
    // Vilkår
    acceptTerms: false
    });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
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
    
    // Required fields
    if (!formData.name.trim()) {
      newErrors.name = 'Navn er påkrævet';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email er påkrævet';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Indtast en gyldig email adresse';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefonnummer er påkrævet';
    }
    
    if (!formData.invoiceAddress.trim()) {
      newErrors.invoiceAddress = 'Faktura adresse er påkrævet';
    }
    
    if (!formData.invoiceCity.trim()) {
      newErrors.invoiceCity = 'By er påkrævet';
    }
    
    if (!formData.invoiceZip.trim()) {
      newErrors.invoiceZip = 'Postnummer er påkrævet';
    } else if (!/^\d{4}$/.test(formData.invoiceZip)) {
      newErrors.invoiceZip = 'Postnummer skal være 4 cifre';
    }
    
    // Delivery address validation if different from invoice
    if (!formData.sameAsInvoice) {
      if (!formData.deliveryAddress.trim()) {
        newErrors.deliveryAddress = 'Leveringsadresse er påkrævet';
      }
      
      if (!formData.deliveryCity.trim()) {
        newErrors.deliveryCity = 'By er påkrævet';
      }
      
      if (!formData.deliveryZip.trim()) {
        newErrors.deliveryZip = 'Postnummer er påkrævet';
      } else if (!/^\d{4}$/.test(formData.deliveryZip)) {
        newErrors.deliveryZip = 'Postnummer skal være 4 cifre';
      }
    }
    
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Du skal acceptere handelsbetingelserne';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Prepare order data
      const orderData = {
        ...formData,
        items: items,
        totalPrice: getTotalPrice(),
        orderId: `EMS-${Date.now()}`,
        orderDate: new Date().toISOString()
      };
      
      // Send confirmation emails
      await sendOrderEmail(orderData);
      
      // Clear cart and redirect to confirmation
      clearCart();
      router.push(`/ordre-bekraeftelse?orderId=${orderData.orderId}`);
      
    } catch (error) {
      console.error('Error submitting order:', error);
      setErrors({ submit: 'Der opstod en fejl ved afsendelse af emails. Prøv igen senere.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto text-center py-16">
        <h2 className="text-black mb-4">
          Din kurv er tom
        </h2>
        <p className="mb-6">
          Tilføj produkter til din kurv før du kan gå til checkout
        </p>
        <Button 
          variant="secondary"
          onClick={() => router.push('/produkter')}
        >
          Se produkter
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        
        {/* Checkout Form */}
        <div className="lg:col-span-3">
        <h2 className="text-black mb-6">
          Oplysninger til bestilling
        </h2>
          
          <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 border border-gray-300">
            
            {/* Personal Information */}
            <div>
              <h3 className="text-black mb-4">
                Personlige oplysninger
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Fulde navn *"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <Input
                  label="Email *"
                  name="email" 
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                />
                <Input
                  label="Telefon *"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  error={errors.phone}
                />
              </div>
            </div>

            {/* Company Information */}
            <div>
              <h3 className="text-black mb-4">
                Firma oplysninger (valgfrit)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Firmanavn"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  error={errors.company}
                />
                <Input
                  label="CVR nummer"
                  name="cvr"
                  value={formData.cvr}
                  onChange={handleChange}
                  error={errors.cvr}
                />
              </div>
            </div>

            {/* Invoice Address */}
            <div>
              <h3 className="text-black mb-4">
                Faktura adresse
              </h3>
              <div className="space-y-4">
                <Input
                  label="Adresse *"
                  name="invoiceAddress"
                  value={formData.invoiceAddress}
                  onChange={handleChange}
                  error={errors.invoiceAddress}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="By *"
                    name="invoiceCity"
                    value={formData.invoiceCity}
                    onChange={handleChange}
                    error={errors.invoiceCity}
                  />
                  <Input
                    label="Postnummer *"
                    name="invoiceZip"
                    value={formData.invoiceZip}
                    onChange={handleChange}
                    error={errors.invoiceZip}
                  />
                </div>
              </div>
            </div>

            {/* Delivery Address */}
            <div>
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="sameAsInvoice"
                  name="sameAsInvoice"
                  checked={formData.sameAsInvoice}
                  onChange={handleChange}
                  className="mt-1 mr-3 h-4 w-4 text-black border-black focus:border-black"
                />
                <label htmlFor="sameAsInvoice" className="text-black">
                  Leveringsadresse er den samme som fakturaadresse
                </label>
              </div>
              
              {!formData.sameAsInvoice && (
                <div>
                  <h3 className="text-black mb-4">
                    Leveringsadresse
                  </h3>
                  <div className="space-y-4">
                    <Input
                      label="Adresse *"
                      name="deliveryAddress"
                      value={formData.deliveryAddress}
                      onChange={handleChange}
                      error={errors.deliveryAddress}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="By *"
                        name="deliveryCity"
                        value={formData.deliveryCity}
                        onChange={handleChange}
                        error={errors.deliveryCity}
                      />
                      <Input
                        label="Postnummer *"
                        name="deliveryZip"
                        value={formData.deliveryZip}
                        onChange={handleChange}
                        error={errors.deliveryZip}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Additional Information */}
            <div>
              <h3 className="text-black mb-4">
                Yderligere oplysninger
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-black mb-2">
                    Specielle instrukser
                  </label>
                  <textarea
                    name="specialInstructions"
                    value={formData.specialInstructions}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3.5 py-2.5 border border-black bg-white text-black focus:outline-none focus:border-black"
                    placeholder="Eventuelle særlige ønsker til levering eller andre bemærkninger..."
                  />
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  className="mt-1 mr-3 h-4 w-4 text-black border-black focus:border-black"
                />
                <label htmlFor="acceptTerms" className="text-black">
                  Jeg accepterer handelsbetingelserne og privatlivspolitikken. 
                  Jeg forstår at jeg vil modtage en faktura efter bestilling.
                </label>
              </div>
              {errors.acceptTerms && (
                <p className="text-red-500 mt-2">{errors.acceptTerms}</p>
              )}
            </div>

            {errors.submit && (
              <div className="text-red-500">{errors.submit}</div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              variant="secondary"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Behandler bestilling...' : 'Afgiv bestilling'}
            </Button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-2">
          <div className="bg-white p-8 border border-black sticky top-6">
            <h3 className="text-black mb-6">
              Ordresammendrag
            </h3>
            
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 items-start">
                  <div className="w-16 h-16 bg-white border border-black flex-shrink-0 relative">
                    <Image 
                      src={item.images?.[0]?.src || '/images/ems-suit.jpg'} 
                      alt={item.images?.[0]?.alt || item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-black mb-1">{item.name}</h4>
                    <p className="mb-2">Antal: {item.quantity}</p>
                    <p>
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
              
              <div className="border-t border-black pt-6">
                <div className="flex justify-between items-center mb-3">
                  <span>Total:</span>
                  <span>
                    {formatPrice(getTotalPrice())}
                  </span>
                </div>
                <p>
                  * Du modtager en faktura efter bestilling
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// Email sending utility function for client-side forms
export async function sendOrderEmail(orderData) {
  try {
    const response = await fetch('/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Der opstod en fejl ved afsendelse');
    }

    return result;
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
}

// Validate email address
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Format product data for email
export function formatProductData(product) {
  return {
    name: product.name || 'Ukendt produkt',
    price: product.price || 'Kontakt for pris',
    description: product.description || '',
  };
}
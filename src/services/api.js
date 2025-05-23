const API_URL = import.meta.env.VITE_API_URL;

// Send contact form data
export async function sendContactForm(data) {
  try {
    const response = await fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Server error: ${error}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error sending contact form:", error);
    throw error;
  }
}

// Send checkout/payment data
export async function processPayment(data) {
  try {
    const response = await fetch(`${API_URL}/api/payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Payment failed: ${error}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error processing payment:", error);
    throw error;
  }
}

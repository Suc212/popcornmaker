import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

interface OrderData {
  name: string;
  email?: string;
  phone: string;
  whatsapp?: string;
  quantity: number;
  address: string;
  city?: string;
  zipCode?: string;
  orderId: string;
}

export async function POST(request: NextRequest) {
  try {
    const orderData: OrderData = await request.json();
    const customerEmail = orderData.email?.trim();
    const shippingAddress = [orderData.address, orderData.city, orderData.zipCode]
      .filter(Boolean)
      .join(', ');

    // Send email to admin
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'allthegoodthings14@gmail.com',
      subject: `New Mini Popcorn Maker Order - ${orderData.orderId}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B4513;">New Order Received!</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Order ID:</strong> ${orderData.orderId}</p>
            <p><strong>Customer Name:</strong> ${orderData.name}</p>
            <p><strong>Email:</strong> ${customerEmail || 'Not provided'}</p>
            <p><strong>Phone:</strong> ${orderData.phone}</p>
            <p><strong>WhatsApp:</strong> ${orderData.whatsapp || 'Not provided'}</p>
            <p><strong>Quantity:</strong> ${orderData.quantity}</p>
            <p><strong>Shipping Address:</strong><br />
            ${shippingAddress}</p>
          </div>
          <p style="color: #666; font-size: 12px;">This order was placed on the Mini Popcorn Maker website.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

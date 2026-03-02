'use client';

import { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useSearchParams } from 'next/navigation';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const TIERED_PRICES = {
  1: { discounted: 600, original: 750 },
  2: { discounted: 1100, original: 1400 },
  3: { discounted: 1500, original: 1950 },
};

const orderSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().trim().refine((value) => value === '' || z.string().email().safeParse(value).success, {
    message: 'Invalid email address',
  }),
  phone: z.string().min(10, 'Phone must be at least 10 digits'),
  whatsapp: z.string().trim().refine((value) => value === '' || value.length >= 10, {
    message: 'WhatsApp number must be at least 10 digits',
  }),
  quantity: z.string().min(1, 'Select a quantity'),
  address: z.string().min(5, 'Address is required'),
});

type OrderFormData = z.infer<typeof orderSchema>;
const ALLOWED_QUANTITIES = new Set(['1', '2', '3', '4', '5', '10']);

export function OrderForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    setValue,
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
  });

  const quantity = useWatch({ control, name: 'quantity' });

  useEffect(() => {
    const quantityFromUrl = searchParams.get('qty');
    if (quantityFromUrl && ALLOWED_QUANTITIES.has(quantityFromUrl)) {
      setValue('quantity', quantityFromUrl, { shouldValidate: true, shouldDirty: true });
    }
  }, [searchParams, setValue]);

  const calculatePrice = () => {
    const qty = parseInt(quantity) || 0;
    const pricing = TIERED_PRICES[qty as keyof typeof TIERED_PRICES];
    if (pricing) {
      return {
        discounted: pricing.discounted.toLocaleString('en-US'),
        original: pricing.original.toLocaleString('en-US'),
        discount: Math.round(((pricing.original - pricing.discounted) / pricing.original) * 100),
      };
    }
    return null;
  };

  const onSubmit = async (data: OrderFormData) => {
    setLoading(true);
    setError(null);

    try {
      // Calculate total price
      const qty = parseInt(data.quantity);
      const pricing = TIERED_PRICES[qty as keyof typeof TIERED_PRICES];
      if (!pricing) {
        throw new Error('Invalid quantity selected');
      }

      // Add order to Firestore
      const ordersRef = collection(db, 'orders');
      const docRef = await addDoc(ordersRef, {
        name: data.name,
        email: data.email || null,
        phone: data.phone,
        whatsapp: data.whatsapp || null,
        quantity: qty,
        address: data.address,
        totalPrice: pricing.discounted,
        originalPrice: pricing.original,
        currency: 'GHS',
        status: 'pending',
        createdAt: serverTimestamp(),
      });

      const orderId = docRef.id;

      // Send email notification
      const emailResponse = await fetch('/api/send-order-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          quantity: qty,
          totalPrice: pricing.discounted,
          originalPrice: pricing.original,
          currency: 'GHS',
          orderId,
        }),
      });

      if (!emailResponse.ok) {
        throw new Error('Failed to send order notification');
      }

      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to place order');
      console.error('Order error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto p-8 bg-white border border-gray-200">
      {success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 text-sm font-medium">
            ✓ Order placed successfully! We will contact you shortly.
          </p>
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 text-sm font-medium">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1">
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            {...register('name')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1">
            Email (Optional)
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            {...register('email')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1">
            Phone
          </label>
          <input
            type="tel"
            placeholder="024 123 4567"
            {...register('phone')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1">
            WhatsApp Number (Optional)
          </label>
          <input
            type="tel"
            placeholder="024 123 4567"
            {...register('whatsapp')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
          />
          {errors.whatsapp && (
            <p className="text-red-500 text-xs mt-1">{errors.whatsapp.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1">
            Quantity
          </label>
          <select
            {...register('quantity')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
          >
            <option value="">Choose quantity</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="10">10+</option>
          </select>
          {errors.quantity && (
            <p className="text-red-500 text-xs mt-1">{errors.quantity.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1">
            Delivery Address
          </label>
          <input
            type="text"
            placeholder="Your delivery address"
            {...register('address')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
          />
          {errors.address && (
            <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>
          )}
        </div>

        {calculatePrice() && (
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <p className="text-sm text-gray-600 mb-2">Your Price</p>
            <div className="flex items-end gap-3">
              <p className="text-3xl font-bold text-amber-700">
                ₵{calculatePrice()?.discounted}
              </p>
              <div className="mb-1">
                <p className="text-sm line-through text-gray-500">
                  ₵{calculatePrice()?.original}
                </p>
                <p className="text-xs font-semibold text-red-600">
                  Save {calculatePrice()?.discount}%
                </p>
              </div>
            </div>
          </div>
        )}

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 rounded-lg transition-colors"
        >
          {loading ? 'Placing Order...' : 'Place Order'}
        </Button>
      </form>
    </Card>
  );
}

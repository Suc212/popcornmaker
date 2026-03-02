# Mini Popcorn Maker Landing Page - Setup Guide

## Overview
This is a minimalist landing page for a Mini Popcorn Maker with an integrated order form that:
- Stores orders in Firebase Firestore
- Sends email notifications via Resend
- Validates form input with Zod
- Uses React Hook Form for form management

## Required Setup

### 1. Firebase Setup
You need to set up a Firebase project and get your configuration keys.

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Firestore Database
   - Go to Build > Firestore Database
   - Click "Create Database"
   - Choose production mode
   - Select your region
4. Create a collection called "orders" (it will auto-create when the first order is saved)
5. Get your config:
   - Go to Project Settings (gear icon)
   - Under "Your apps", click the web icon to create a web app
   - Copy the Firebase config object

### 2. Resend Setup
Resend is used for sending order confirmation emails.

1. Go to [Resend](https://resend.com)
2. Sign up and create an account
3. Get your API key from the dashboard
4. Verify your sender domain or use the default Resend domain

### 3. Environment Variables
Add these to your `.env.local` file (or through Vercel dashboard):

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
RESEND_API_KEY=your_resend_api_key_here
RESEND_FROM_EMAIL="Your Store <onboarding@resend.dev>"
RESEND_TO_EMAIL=your_admin_email@example.com
```

## Project Structure

```
/app
  /api
    /send-order-email - Resend API route for sending emails
  /page.tsx - Main landing page
  layout.tsx - Root layout with metadata

/components
  hero.tsx - Hero section with CTA buttons
  features.tsx - 6 key features
  how-it-works.tsx - 4-step process
  testimonials.tsx - Customer testimonials
  pricing.tsx - 3 pricing tiers
  order-form.tsx - Order form with validation
  footer.tsx - Footer with links

/lib
  firebase.ts - Firebase configuration and initialization
```

## Features

### Order Form
- Full form validation with Zod
- Collects: name, email, phone, product variant, quantity, address, city, zip
- Stores orders in Firestore with timestamp
- Sends two emails:
  - Order confirmation to customer
  - Order notification to admin (allthegoodthings14@gmail.com)

### Landing Page Sections
1. **Hero** - Main headline and CTA
2. **Features** - 6 key product benefits
3. **How It Works** - 4-step process
4. **Testimonials** - 3 customer reviews with ratings
5. **Pricing** - 3 pricing tiers with features list
6. **Order Form** - Integrated order form
7. **Footer** - Links and company info

## Customization

### Change Admin Email
Edit `/app/api/send-order-email/route.ts`:
```typescript
to: 'your-email@example.com',
```

### Update Product Variants
Edit `/components/order-form.tsx` in the variant select:
```jsx
<option value="variant-name">Display Name</option>
```

### Edit Pricing
Update `/components/pricing.tsx` with your prices and features.

### Change Colors
The design uses a minimal color palette:
- Primary: `amber-600` (burnt orange)
- Neutral: `gray-900`, `gray-600`, `gray-200`

To change, search for color classes and update them throughout the components.

## Deployment

1. Push code to GitHub
2. Connect to Vercel
3. Add environment variables in Vercel project settings
4. Deploy!

## Troubleshooting

### Orders not saving
- Check Firebase credentials in `.env.local`
- Verify Firestore database exists
- Check browser console for errors

### Emails not sending
- Verify Resend API key is correct
- Check Resend dashboard for failed sends
- Ensure sender email is verified in Resend

### Form not submitting
- Check that all environment variables are set
- Look at browser console for specific errors
- Verify Firestore collection exists

# EmailJS Setup Instructions

Follow these steps to set up EmailJS for your contact form:

## 1. Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account (200 emails/month)
3. Verify your email address

## 2. Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the prompts to connect your Gmail account
5. **Copy the Service ID** - you'll need this later

## 3. Create Email Template

1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Set up your template with these variables:
   ```
   Subject: New Contact from {{from_name}}

   From: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}

   Message:
   {{message}}
   ```
4. **Copy the Template ID** - you'll need this later

## 4. Get Your Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** under "API Keys"
3. Copy this key

## 5. Configure Your Portfolio

1. Create a `.env` file in the `portfolio-v2` folder (copy from `.env.example`)
2. Add your credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```
3. Save the file

## 6. Update Contact.tsx

The code has placeholder values. Replace lines 57-59 in `Contact.tsx` with:

```typescript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

## 7. Restart Dev Server

After creating the `.env` file, restart your dev server:
```bash
npm run dev
```

## Testing

1. Fill out the contact form on your portfolio
2. Submit the form
3. Check your email inbox for the message!

## Important Notes

- The `.env` file should **NOT** be committed to GitHub (it's in .gitignore)
- Free tier: 200 emails/month
- Emails are sent from EmailJS, not your domain
- For production, consider upgrading or using a backend service

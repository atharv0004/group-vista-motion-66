# EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS to make the contact form functional.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your chosen provider
5. Note down your **Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

Hello Economic Group,

You have received a new message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}

Message:
{{message}}

---
This message was sent from your website contact form.
```

4. Save the template and note down your **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (also called User ID)
3. Copy this key

## Step 5: Update the Contact Form

In `src/pages/Contact.tsx`, replace the placeholder values:

```javascript
// Replace these with your actual EmailJS credentials
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key

const result = await emailjs.send(
  "YOUR_SERVICE_ID", // Replace with your service ID
  "YOUR_TEMPLATE_ID", // Replace with your template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    company: formData.company || 'Not specified',
    message: formData.message,
    to_name: 'Economic Group',
  }
);
```

## Step 6: Test the Form

1. Fill out the contact form on your website
2. Submit the form
3. Check your email to see if you received the message
4. Check the browser console for any errors

## Troubleshooting

### Common Issues:

1. **CORS Errors**: Make sure your domain is added to your EmailJS account settings
2. **Template Variables**: Ensure the variable names in your template match the ones in the code
3. **Service Configuration**: Double-check your email service setup in EmailJS dashboard

### Rate Limits:

- Free EmailJS accounts have a limit of 200 emails per month
- Consider upgrading if you expect more contact form submissions

## Security Notes

- Your EmailJS public key is safe to expose in client-side code
- EmailJS handles the actual email sending securely
- Never expose your private keys or email passwords

## Additional Features

You can enhance the form further by:
- Adding email auto-replies to users
- Setting up email notifications to multiple recipients
- Adding file upload capabilities
- Implementing spam protection with reCAPTCHA

For more advanced features, check the [EmailJS documentation](https://www.emailjs.com/docs/).
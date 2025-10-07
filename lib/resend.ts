import { Resend } from 'resend';

// Initialize Resend with API key from environment variables
// Use a placeholder for build time if key is not set
export const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder_key');

// Email configuration
export const EMAIL_CONFIG = {
  from: process.env.EMAIL_FROM || 'Wine Spectator <noreply@yourdomain.com>',
  replyTo: process.env.EMAIL_REPLY_TO || 'info@winespectator.com',
};


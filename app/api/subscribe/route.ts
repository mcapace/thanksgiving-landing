import { NextRequest, NextResponse } from 'next/server';
import { resend, EMAIL_CONFIG } from '@/lib/resend';
import { VerificationEmail } from '@/lib/email-templates';
import { generateVerificationToken } from '@/lib/email-verification';
import { z } from 'zod';

// Validation schema
const subscribeSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const { email } = subscribeSchema.parse(body);

    // Generate verification token
    const token = await generateVerificationToken(email);
    
    // Build verification URL
    const origin = request.headers.get('origin') || 'http://localhost:3000';
    const verificationUrl = `${origin}/api/verify-email?token=${encodeURIComponent(token)}`;

    // Send verification email using Resend
    const { data, error } = await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: email,
      replyTo: EMAIL_CONFIG.replyTo,
      subject: 'Confirm Your Email - Wine Country Thanksgiving Recipes',
      react: VerificationEmail({
        verificationUrl,
        recipientEmail: email,
      }),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send verification email', details: error },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Verification email sent. Please check your inbox.',
        emailId: data?.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Subscribe error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid email address', details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}


import { NextRequest, NextResponse } from 'next/server';
import { resend, EMAIL_CONFIG } from '@/lib/resend';
import { WelcomeEmail } from '@/lib/email-templates';
import { verifyToken, markEmailAsVerified } from '@/lib/email-verification';
import { generateDownloadToken } from '@/lib/download-tokens';

export async function GET(request: NextRequest) {
  try {
    // Get token from query params
    const searchParams = request.nextUrl.searchParams;
    const token = searchParams.get('token');

    if (!token) {
      return NextResponse.redirect(
        new URL('/verification-failed?reason=missing-token', request.url)
      );
    }

    // Verify token
    const payload = await verifyToken(token);

    if (!payload) {
      return NextResponse.redirect(
        new URL('/verification-failed?reason=invalid-token', request.url)
      );
    }

    // Mark email as verified
    markEmailAsVerified(payload.email);

    // Generate secure download token (one-time use, expires in 7 days)
    const downloadToken = await generateDownloadToken(payload.email);
    
    // Get origin for download URL
    const origin = request.headers.get('origin') || request.nextUrl.origin;
    const downloadUrl = `${origin}/api/download-recipes?token=${encodeURIComponent(downloadToken)}`;

    // Send welcome email with secure download link
    const { error } = await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: payload.email,
      replyTo: EMAIL_CONFIG.replyTo,
      subject: '🎉 Your Wine Country Thanksgiving Recipes Are Ready!',
      react: WelcomeEmail({
        downloadUrl,
        recipientEmail: payload.email,
      }),
    });

    if (error) {
      console.error('Failed to send welcome email:', error);
      // Don't fail the verification if welcome email fails
    }

    // Redirect to success page
    return NextResponse.redirect(
      new URL('/verification-success?email=' + encodeURIComponent(payload.email), request.url)
    );

  } catch (error) {
    console.error('Email verification error:', error);
    return NextResponse.redirect(
      new URL('/verification-failed?reason=server-error', request.url)
    );
  }
}


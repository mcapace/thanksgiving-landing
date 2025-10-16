import { NextRequest, NextResponse } from 'next/server';
import { resend, EMAIL_CONFIG } from '@/lib/resend';
import { verifyToken, markEmailAsVerified } from '@/lib/email-verification';
import { generateDownloadToken } from '@/lib/download-tokens';
import { getEntryByEmail } from '@/lib/sweepstakes-entries';

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

    // Get sweepstakes entry
    const entry = await getEntryByEmail(payload.email);
    
    if (!entry) {
      return NextResponse.redirect(
        new URL('/verification-failed?reason=entry-not-found', request.url)
      );
    }

    // Generate secure download token (one-time use)
    const downloadToken = await generateDownloadToken(payload.email);
    
    // Get origin for download URL
    const origin = request.headers.get('origin') || request.nextUrl.origin;
    const downloadUrl = `${origin}/api/download-recipes?token=${encodeURIComponent(downloadToken)}`;

    // Send sweepstakes confirmation email with recipe book download link
    const { error } = await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: payload.email,
      replyTo: EMAIL_CONFIG.replyTo,
      subject: '🎉 Sweepstakes Entry Confirmed + Your Recipe Book!',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1c1917; background: #f5f5f4; padding: 20px; margin: 0;">
            <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);">
              
              <div style="background: linear-gradient(135deg, #8B2332 0%, #7A1F2B 100%); padding: 50px 30px; text-align: center;">
                <img src="${origin}/images/logos/WS%20logo%20white.png" alt="Wine Spectator" style="height: 50px; margin-bottom: 20px;" />
                <h1 style="color: #ffffff; font-size: 32px; font-weight: 300; margin: 0; letter-spacing: -0.5px;">You're Entered!</h1>
                <p style="color: rgba(255, 255, 255, 0.9); font-size: 16px; margin: 8px 0 0 0;">Email confirmed – Good luck in the sweepstakes!</p>
              </div>
              
              <div style="padding: 40px 30px;">
                <h2 style="color: #8B2332; font-size: 24px; font-weight: 600; margin: 0 0 20px 0;">Thank You for Confirming!</h2>
                
                <p style="color: #57534e; font-size: 16px; margin: 0 0 16px 0;">
                  Your entry has been confirmed for the Wine Spectator x Hestan Culinary Holiday Prize Package Sweepstakes.
                </p>
                
                <div style="background: linear-gradient(135deg, #fef3c7 0%, #fef0e8 100%); border-left: 4px solid #f59e0b; padding: 24px; border-radius: 8px; margin: 24px 0;">
                  <h3 style="color: #78350f; font-size: 18px; font-weight: 600; margin: 0 0 12px 0;">🎁 Prize Package Includes:</h3>
                  <ul style="margin: 0; padding-left: 20px;">
                    <li style="color: #78350f; margin: 6px 0;">Hestan Culinary Small Polished Roaster</li>
                    <li style="color: #78350f; margin: 6px 0;">Hedley & Bennett Chef Apron</li>
                    <li style="color: #78350f; margin: 6px 0;">3-Piece Mixing Bowl Set</li>
                  </ul>
                  <p style="color: #78350f; font-weight: 600; margin: 12px 0 0 0;">Total Value: $464.90</p>
                </div>
                
                <div style="background: #f0fdf4; border-left: 4px solid #22c55e; padding: 20px; border-radius: 8px; margin: 24px 0;">
                  <p style="font-size: 14px; color: #14532d; margin: 0;">
                    <strong style="color: #15803d; font-size: 15px;">Entry Confirmed:</strong><br>
                    Email: ${payload.email}<br>
                    Winner announced: ~December 19, 2025
                  </p>
                </div>
                
                <p style="color: #57534e; font-size: 15px; margin: 20px 0;">
                  <strong>What's Next?</strong><br>
                  The winner will be randomly selected and notified by email within 5 business days after the sweepstakes ends on December 14, 2025.
                </p>
                
                <hr style="border: 0; border-top: 2px solid #e5e7eb; margin: 30px 0;" />
                
                <div style="background: linear-gradient(135deg, #fef3c7 0%, #fef0e8 100%); border-left: 4px solid #8B2332; padding: 24px; border-radius: 8px; margin: 24px 0;">
                  <h3 style="color: #8B2332; font-size: 20px; font-weight: 600; margin: 0 0 12px 0;">🍷 Your Complete Recipe Book!</h3>
                  <p style="color: #78350f; font-size: 15px; margin: 0 0 16px 0;">
                    As a thank you for entering, download our complete collection of 9 expert wine pairings and Thanksgiving recipes!
                  </p>
                  <div style="text-align: center; margin: 20px 0;">
                    <a href="${downloadUrl}" style="display: inline-block; background: #8B2332; color: #ffffff; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 12px rgba(139, 35, 50, 0.3);">📥 Download Full Recipe Book</a>
                  </div>
                  <p style="color: #78350f; font-size: 13px; margin: 12px 0 0 0; text-align: center;">
                    🔒 This is your personal download link and can only be used once.
                  </p>
                </div>
                
                <div style="text-align: center; margin: 30px 0;">
                  <a href="${origin}/official-rules" style="display: inline-block; background: transparent; color: #8B2332; padding: 12px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 15px; border: 2px solid #8B2332;">View Official Rules</a>
                </div>
              </div>
              
              <div style="background: #fafaf9; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                <p style="color: #1c1917; font-size: 16px; font-weight: 600; margin: 0 0 4px 0;">Wine Spectator × Hestan Culinary</p>
                <p style="color: #78716c; font-size: 14px; margin: 0;">Thank you for participating!</p>
              </div>
              
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Failed to send welcome email:', error);
      // Don't fail the verification if welcome email fails
    }

    // Redirect to success page with entry ID and download token
    const successUrl = new URL('/verification-success', request.url);
    successUrl.searchParams.set('email', payload.email);
    successUrl.searchParams.set('entryId', entry.id);
    successUrl.searchParams.set('token', downloadToken);
    
    return NextResponse.redirect(successUrl);

  } catch (error) {
    console.error('Email verification error:', error);
    return NextResponse.redirect(
      new URL('/verification-failed?reason=server-error', request.url)
    );
  }
}


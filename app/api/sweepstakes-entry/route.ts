import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { addEntry, hasEmailEntered } from '@/lib/sweepstakes-entries';
import { resend, EMAIL_CONFIG } from '@/lib/resend';

// Validation schema
const sweepstakesEntrySchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(2, 'State is required'),
  zipCode: z.string().min(5, 'Valid zip code is required'),
  agreeToRules: z.boolean().refine(val => val === true, {
    message: 'You must agree to the official rules',
  }),
  agreeToEmails: z.boolean(),
});

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validatedData = sweepstakesEntrySchema.parse(body);

    // Check if email already entered
    if (hasEmailEntered(validatedData.email)) {
      return NextResponse.json(
        { 
          error: 'Already entered',
          message: 'This email address has already been entered in the sweepstakes. Only one entry per person is allowed.'
        },
        { status: 400 }
      );
    }

    // Validate age (must be 21+)
    const birthDate = new Date(validatedData.dateOfBirth);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (age < 21 || (age === 21 && monthDiff < 0)) {
      return NextResponse.json(
        { 
          error: 'Age requirement not met',
          message: 'You must be 21 years or older to enter this sweepstakes.'
        },
        { status: 400 }
      );
    }

    // Get IP address for fraud prevention
    const ipAddress = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown';

    // Add entry to storage
    const entry = addEntry({
      ...validatedData,
      ipAddress,
    });

    // Send confirmation email
    try {
      const origin = request.headers.get('origin') || request.nextUrl.origin;
      
      await resend.emails.send({
        from: EMAIL_CONFIG.from,
        to: validatedData.email,
        replyTo: EMAIL_CONFIG.replyTo,
        subject: '🎉 Sweepstakes Entry Confirmed - Wine Spectator x Hestan',
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
                  <div style="font-size: 60px; margin-bottom: 16px;">🎉</div>
                  <h1 style="color: #ffffff; font-size: 32px; font-weight: 300; margin: 0; letter-spacing: -0.5px;">You're Entered!</h1>
                  <p style="color: rgba(255, 255, 255, 0.9); font-size: 16px; margin: 8px 0 0 0;">Good luck in the sweepstakes</p>
                </div>
                
                <div style="padding: 40px 30px;">
                  <h2 style="color: #8B2332; font-size: 24px; font-weight: 600; margin: 0 0 20px 0;">Thank You for Entering!</h2>
                  
                  <p style="color: #57534e; font-size: 16px; margin: 0 0 16px 0;">
                    Your entry has been successfully submitted for the Wine Spectator x Hestan Culinary Holiday Prize Package Sweepstakes.
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
                      <strong style="color: #15803d; font-size: 15px;">Entry Confirmation:</strong><br>
                      Entry ID: ${entry.id}<br>
                      Entry Date: ${new Date().toLocaleDateString()}<br>
                      Winner announced: ~December 19, 2025
                    </p>
                  </div>
                  
                  <p style="color: #57534e; font-size: 15px; margin: 20px 0;">
                    <strong>What's Next?</strong><br>
                    The winner will be randomly selected and notified by email within 5 business days after the sweepstakes ends on December 14, 2025.
                  </p>
                  
                  <div style="text-align: center; margin: 30px 0;">
                    <a href="${origin}/official-rules" style="display: inline-block; background: #8B2332; color: #ffffff; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 15px;">View Official Rules</a>
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
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError);
      // Don't fail the entry if email fails
    }

    return NextResponse.json(
      { 
        success: true,
        message: 'Entry submitted successfully! Check your email for confirmation.',
        entryId: entry.id,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Sweepstakes entry error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: 'Validation failed',
          details: error.issues.map(issue => ({
            field: issue.path.join('.'),
            message: issue.message,
          }))
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}


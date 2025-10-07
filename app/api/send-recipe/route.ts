import { NextRequest, NextResponse } from 'next/server';
import { resend, EMAIL_CONFIG } from '@/lib/resend';
import { RecipeEmail } from '@/lib/email-templates';
import { z } from 'zod';

// Validation schema
const sendRecipeSchema = z.object({
  email: z.string().email('Invalid email address'),
  winery: z.string().min(1),
  wineName: z.string().min(1),
  dishName: z.string().min(1),
  recipeUrl: z.string().url(),
  pdfUrl: z.string().url().optional(),
});

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validatedData = sendRecipeSchema.parse(body);

    // Get the origin for absolute URLs
    const origin = request.headers.get('origin') || 'http://localhost:3000';
    const absoluteRecipeUrl = validatedData.recipeUrl.startsWith('http') 
      ? validatedData.recipeUrl 
      : `${origin}${validatedData.recipeUrl}`;
    
    const absolutePdfUrl = validatedData.pdfUrl
      ? (validatedData.pdfUrl.startsWith('http') ? validatedData.pdfUrl : `${origin}${validatedData.pdfUrl}`)
      : undefined;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: validatedData.email,
      replyTo: EMAIL_CONFIG.replyTo,
      subject: `Your Wine Pairing: ${validatedData.dishName} with ${validatedData.wineName}`,
      react: RecipeEmail({
        winery: validatedData.winery,
        wineName: validatedData.wineName,
        dishName: validatedData.dishName,
        recipeUrl: absoluteRecipeUrl,
        pdfUrl: absolutePdfUrl,
      }),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email', details: error },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Recipe email sent successfully',
        emailId: data?.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Send recipe error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}


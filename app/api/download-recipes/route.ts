import { NextRequest, NextResponse } from 'next/server';
import { verifyDownloadToken } from '@/lib/download-tokens';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET(request: NextRequest) {
  try {
    // Get token from query parameter
    const token = request.nextUrl.searchParams.get('token');

    if (!token) {
      return NextResponse.json(
        { error: 'Download token is required' },
        { status: 400 }
      );
    }

    // Verify and consume the token (one-time use)
    const tokenData = await verifyDownloadToken(token);

    if (!tokenData) {
      return NextResponse.json(
        { 
          error: 'Invalid or expired download link',
          message: 'This download link has already been used or has expired. Please request a new one by subscribing again.'
        },
        { status: 403 }
      );
    }

    // Read the PDF file
    const pdfPath = join(process.cwd(), 'public', 'recipes', 'thanksgiving-recipes-full.pdf');
    const pdfBuffer = await readFile(pdfPath);

    // Return the PDF with proper headers (convert Buffer to Uint8Array for Next.js 15)
    return new NextResponse(new Uint8Array(pdfBuffer), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Wine-Spectator-Thanksgiving-Recipes.pdf"',
        'Cache-Control': 'no-store, no-cache, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });

  } catch (error) {
    console.error('Download error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to download recipe book',
        message: 'There was an error processing your download. Please try again or contact support.'
      },
      { status: 500 }
    );
  }
}


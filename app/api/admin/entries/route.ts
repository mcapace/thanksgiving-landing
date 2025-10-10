import { NextRequest, NextResponse } from 'next/server';
import { getAllEntries, getEntryCount, exportEntriesToCSV } from '@/lib/sweepstakes-entries';

// Simple password protection (in production, use proper auth)
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'winespec2025';

export async function GET(request: NextRequest) {
  // Check for authorization
  const authHeader = request.headers.get('authorization');
  const password = request.nextUrl.searchParams.get('password');
  
  if (password !== ADMIN_PASSWORD && authHeader !== `Bearer ${ADMIN_PASSWORD}`) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  const format = request.nextUrl.searchParams.get('format');

  try {
    // Return CSV format
    if (format === 'csv') {
      const csv = await exportEntriesToCSV();
      
      return new NextResponse(csv, {
        status: 200,
        headers: {
          'Content-Type': 'text/csv',
          'Content-Disposition': `attachment; filename="sweepstakes-entries-${new Date().toISOString().split('T')[0]}.csv"`,
        },
      });
    }

    // Return JSON format (default)
    const entries = await getAllEntries();
    const count = await getEntryCount();

    return NextResponse.json({
      success: true,
      count,
      entries: entries.map(entry => ({
        id: entry.id,
        name: `${entry.firstName} ${entry.lastName}`,
        email: entry.email,
        phone: entry.phone,
        dateOfBirth: entry.dateOfBirth,
        address: `${entry.address}, ${entry.city}, ${entry.state} ${entry.zipCode}`,
        agreeToEmails: entry.agreeToEmails,
        entryDate: entry.entryDate,
        ipAddress: entry.ipAddress,
      })),
    });
  } catch (error) {
    console.error('Admin entries error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch entries' },
      { status: 500 }
    );
  }
}


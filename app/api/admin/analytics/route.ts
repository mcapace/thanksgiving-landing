import { NextRequest, NextResponse } from 'next/server';
import { getAnalyticsSummary, getAllAnalyticsEvents } from '@/lib/analytics';

// Password protection for analytics
function isAuthorized(request: NextRequest): boolean {
  const password = request.nextUrl.searchParams.get('password');
  const expectedPassword = process.env.ADMIN_PASSWORD || 'admin123';
  return password === expectedPassword;
}

export async function GET(request: NextRequest) {
  try {
    // Check authorization
    if (!isAuthorized(request)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const summary = await getAnalyticsSummary();
    
    return NextResponse.json({
      success: true,
      data: summary,
    });

  } catch (error) {
    console.error('Analytics API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Check authorization
    if (!isAuthorized(request)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { action } = await request.json();
    
    if (action === 'export') {
      const allEvents = await getAllAnalyticsEvents();
      
      // Convert to CSV format
      const csvHeaders = [
        'Timestamp',
        'Type',
        'Recipe ID',
        'Recipe Name',
        'Winery',
        'Email',
        'First Name',
        'Last Name',
        'IP Address',
        'User Agent'
      ].join(',');
      
      const csvRows = allEvents.map(event => [
        event.timestamp.toISOString(),
        event.type,
        event.metadata.recipeId || '',
        event.metadata.recipeName || '',
        event.metadata.winery || '',
        event.metadata.email || '',
        event.metadata.firstName || '',
        event.metadata.lastName || '',
        event.ipAddress || '',
        event.userAgent || ''
      ].map(field => `"${field}"`).join(','));
      
      const csvContent = [csvHeaders, ...csvRows].join('\n');
      
      return new NextResponse(csvContent, {
        status: 200,
        headers: {
          'Content-Type': 'text/csv',
          'Content-Disposition': 'attachment; filename="analytics-export.csv"',
        },
      });
    }
    
    return NextResponse.json(
      { error: 'Invalid action' },
      { status: 400 }
    );

  } catch (error) {
    console.error('Analytics export error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

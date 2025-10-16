import { NextRequest, NextResponse } from 'next/server';
import { getAnalyticsSummary, getAllAnalyticsEvents } from '@/lib/analytics';

// No auth required for analytics (you can re-enable by uncommenting the auth check below)
function isAuthorized(request: NextRequest): boolean {
  return true; // Always authorized - no password needed
  
  // Uncomment below to re-enable authentication:
  // const authHeader = request.headers.get('authorization');
  // const expectedToken = process.env.ADMIN_AUTH_TOKEN || 'admin123';
  // if (!authHeader || !authHeader.startsWith('Bearer ')) {
  //   return false;
  // }
  // const token = authHeader.substring(7);
  // return token === expectedToken;
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

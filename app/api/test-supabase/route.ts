import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    // Test Supabase connection
    if (!supabase) {
      return NextResponse.json({
        success: false,
        error: 'Supabase not configured - missing environment variables',
        env: {
          hasUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
          hasKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
          url: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Set' : 'Missing',
          key: process.env.SUPABASE_SERVICE_ROLE_KEY ? 'Set' : 'Missing'
        }
      });
    }

    // Test database connection
    const { data, error } = await supabase
      .from('analytics_events')
      .select('count')
      .limit(1);

    if (error) {
      return NextResponse.json({
        success: false,
        error: 'Database connection failed',
        details: error.message
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Supabase connection working!',
      tableExists: true,
      recordCount: data?.length || 0
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Connection test failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

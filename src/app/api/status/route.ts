import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://app.50sq.com/up', {
      method: 'GET',
      cache: 'no-cache',
    });

    return NextResponse.json(
      { 
        status: response.ok ? 'operational' : 'degraded',
        httpStatus: response.status 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Status check failed:', error);
    return NextResponse.json(
      { 
        status: 'outage',
        error: 'Failed to reach service' 
      },
      { status: 200 }
    );
  }
}
import { NextRequest, NextResponse } from 'next/server'
import { getSalads } from '@/lib/database'

export async function GET(request: NextRequest) {
  try {
    const salads = getSalads()
    
    return NextResponse.json({
      salads,
      total: salads.length
    })
  } catch (error) {
    console.error('Error fetching salads:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

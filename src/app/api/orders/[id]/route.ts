import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import { getOrders } from '@/lib/database'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params
    const authHeader = request.headers.get('Authorization')
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    const token = authHeader.split(' ')[1]
    
    try {
      const decoded = jwt.verify(token, JWT_SECRET) as any
      const userId = decoded.userId
      
      const orders = getOrders()
      const order = orders.find(o => o.id === params.id && o.userId === userId)

      if (!order) {
        return NextResponse.json(
          { message: 'Order not found' },
          { status: 404 }
        )
      }

      return NextResponse.json({
        order
      })
    } catch (jwtError) {
      return NextResponse.json(
        { message: 'Invalid token' },
        { status: 401 }
      )
    }
  } catch (error) {
    console.error('Order fetch error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

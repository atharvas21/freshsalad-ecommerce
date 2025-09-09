import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import { v4 as uuidv4 } from 'uuid'
import { addOrder } from '@/lib/database'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function POST(request: NextRequest) {
  try {
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
      
      const { items, deliveryInfo, totalAmount } = await request.json()

      if (!items || items.length === 0) {
        return NextResponse.json(
          { message: 'No items in order' },
          { status: 400 }
        )
      }

      if (!deliveryInfo || !deliveryInfo.address || !deliveryInfo.phone) {
        return NextResponse.json(
          { message: 'Delivery information is required' },
          { status: 400 }
        )
      }

      const orderId = uuidv4()
      const order = {
        id: orderId,
        userId,
        items,
        deliveryInfo,
        totalAmount,
        status: 'confirmed',
        createdAt: new Date().toISOString(),
        estimatedDelivery: new Date(Date.now() + 45 * 60 * 1000).toISOString() // 45 minutes from now
      }

      addOrder(order)

      return NextResponse.json({
        message: 'Order placed successfully',
        orderId,
        order
      })
    } catch (jwtError) {
      return NextResponse.json(
        { message: 'Invalid token' },
        { status: 401 }
      )
    }
  } catch (error) {
    console.error('Order creation error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

import { NextRequest, NextResponse } from 'next/server'
import { getUsers, updateUser, verifyOTP } from '@/lib/database'

export async function POST(request: NextRequest) {
  try {
    const { email, otp } = await request.json()

    if (!email || !otp) {
      return NextResponse.json(
        { message: 'Email and OTP are required' },
        { status: 400 }
      )
    }

    // Verify OTP
    const isValidOTP = verifyOTP(email, otp)

    if (!isValidOTP) {
      return NextResponse.json(
        { message: 'Invalid or expired OTP' },
        { status: 400 }
      )
    }

    // Update user verification status
    const users = getUsers()
    const userIndex = users.findIndex(u => u.email === email)

    if (userIndex === -1) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      )
    }

    const updatedUser = {
      ...users[userIndex],
      isVerified: true
    }

    updateUser(updatedUser)

    return NextResponse.json({
      message: 'Email verified successfully'
    })
  } catch (error) {
    console.error('OTP verification error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

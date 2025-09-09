import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'
import { addUser, getUsers, addOTP } from '@/lib/database'
import { sendOTPEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const { name, email, password, phone } = await request.json()

    if (!name || !email || !password || !phone) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      )
    }

    // Check if user already exists
    const users = getUsers()
    const existingUser = users.find(u => u.email === email)

    if (existingUser) {
      return NextResponse.json(
        { message: 'User with this email already exists' },
        { status: 409 }
      )
    }

    // Hash password
    const saltRounds = 12
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    // Create user
    const userId = uuidv4()
    const user = {
      id: userId,
      name,
      email,
      password: hashedPassword,
      phone,
      isVerified: false,
      createdAt: new Date().toISOString()
    }

    addUser(user)

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    addOTP(email, otp)

    // Send OTP email
    try {
      await sendOTPEmail(email, name, otp)
    } catch (emailError) {
      console.error('Failed to send OTP email:', emailError)
      // Continue anyway - for MVP, we can skip email verification
    }

    return NextResponse.json({
      message: 'User created successfully. Please check your email for verification code.',
      userId
    })
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

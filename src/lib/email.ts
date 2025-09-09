import nodemailer from 'nodemailer'

// Email configuration
// In production, use environment variables for email credentials
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER || 'your-email@gmail.com',
    pass: process.env.SMTP_PASS || 'your-app-password'
  }
})

export async function sendOTPEmail(email: string, name: string, otp: string): Promise<void> {
  const mailOptions = {
    from: process.env.FROM_EMAIL || 'noreply@freshsalad.com',
    to: email,
    subject: 'Verify your FreshSalad account',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #22c55e, #16a34a); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">🥗 FreshSalad</h1>
        </div>
        
        <div style="background: white; padding: 30px; border-left: 4px solid #22c55e;">
          <h2 style="color: #333; margin-top: 0;">Welcome to FreshSalad, ${name}!</h2>
          
          <p style="color: #666; font-size: 16px; line-height: 1.5;">
            Thank you for signing up for FreshSalad! To complete your registration, please verify your email address using the code below:
          </p>
          
          <div style="background: #f8f9fa; border: 2px solid #22c55e; border-radius: 8px; padding: 20px; text-align: center; margin: 30px 0;">
            <div style="color: #22c55e; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">
              Verification Code
            </div>
            <div style="font-size: 32px; font-weight: bold; color: #333; font-family: 'Courier New', monospace; letter-spacing: 8px;">
              ${otp}
            </div>
          </div>
          
          <p style="color: #666; font-size: 14px;">
            This code will expire in 10 minutes. If you didn't create an account with FreshSalad, please ignore this email.
          </p>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          
          <p style="color: #999; font-size: 12px; text-align: center;">
            © 2024 FreshSalad. All rights reserved.<br>
            This is an automated message, please do not reply to this email.
          </p>
        </div>
      </div>
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log('OTP email sent successfully to:', email)
  } catch (error) {
    console.error('Error sending OTP email:', error)
    throw new Error('Failed to send verification email')
  }
}

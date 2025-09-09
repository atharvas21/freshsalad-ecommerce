# Deployment Guide

## Local Development

### Quick Start
1. Run `start.bat` (Windows) or follow manual steps below
2. Open http://localhost:3000 in your browser

### Manual Setup
1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000)

## Vercel Deployment (Recommended)

### Method 1: CLI Deployment (Fastest)
1. Deploy with Vercel CLI:
   ```bash
   npx vercel
   ```
2. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N** 
   - Project name? **salad-business** (or your preferred name)
   - In which directory? **.** (current directory)
   - Override settings? **N**

3. Your app will be deployed! 🎉

**Note:** Vercel auto-detects Next.js projects and configures everything automatically.

**Important:** After deployment, you MUST set the JWT_SECRET environment variable (see below).

### Method 2: GitHub Integration
1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: FreshSalad ecommerce app"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. Connect to Vercel:
   - Visit [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Framework preset: **Next.js** (auto-detected)
   - Root directory: **.** 
   - Build command: **npm run build** (auto-detected)
   - Output directory: **.next** (auto-detected)
   - Install command: **npm install** (auto-detected)
   - Click **Deploy**!

### Environment Variables (REQUIRED)

**⚠️ CRITICAL: Set JWT_SECRET immediately after deployment**

The app requires a JWT_SECRET environment variable to work properly. Here's how to set it:

**Step 1: Generate a secure JWT secret**
```bash
# Option 1: Using Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Option 2: Using PowerShell (Windows)
[System.Web.Security.Membership]::GeneratePassword(32, 0)

# Option 3: Manual string (less secure)
# Use any long random string like: "myapp-super-secret-jwt-key-2024-random-string"
```

**Step 2: Add to Vercel**
1. Go to your project dashboard on Vercel
2. Click **Settings** → **Environment Variables**
3. Add: 
   - **Name:** `JWT_SECRET`
   - **Value:** Your generated secret from Step 1
   - **Environment:** Production (and Preview if needed)
4. Click **Save**
5. Go to **Deployments** → Click **Redeploy** on latest deployment

**Optional Email Variables:**
- `SMTP_HOST`: `smtp.gmail.com` (for Gmail)
- `SMTP_PORT`: `587`
- `SMTP_USER`: Your Gmail address
- `SMTP_PASS`: Your Gmail app password ([setup guide](https://support.google.com/mail/answer/185833))
- `FROM_EMAIL`: `noreply@yourdomain.com`

## Other Deployment Options

### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`
3. Add environment variables in Netlify dashboard

### Railway
1. Connect GitHub repository
2. Add environment variables
3. Deploy automatically

### Docker (Advanced)
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Production Checklist
- [ ] **Deploy successfully** ✅
- [ ] **Set secure JWT_SECRET** (required for auth)
- [ ] **Test user registration/login**
- [ ] **Test order placement**
- [ ] **Configure custom domain** (optional)
- [ ] **Set up email service** (optional for OTP)
- [ ] **Enable HTTPS** (automatic on Vercel)
- [ ] **Configure analytics** (optional)
- [ ] **Set up monitoring** (optional)

## Post-Deployment Testing

After deployment, test these key features:
1. **Homepage loads** - Check hero section and navigation
2. **View salads** - Browse product catalog
3. **Add to cart** - Test cart functionality
4. **User signup** - Create new account (may skip email verification if not configured)
5. **User login** - Sign in with credentials
6. **Place order** - Complete checkout process
7. **View order history** - Check profile/orders page

## Troubleshooting

**Build Errors:**
- Check Vercel deployment logs
- Ensure all dependencies are in package.json
- Verify TypeScript compilation: `npm run build`

**Function Runtime Errors:**
- If you see "Function Runtimes must have a valid version" error
- This means there's an issue with vercel.json configuration
- For Next.js projects, you typically don't need vercel.json
- Vercel auto-detects and configures Next.js projects

**Authentication Issues:**
- Set JWT_SECRET environment variable
- Check browser console for errors

**Email Not Working:**
- Email features are optional
- App works without SMTP configuration
- Users can register but won't receive OTP emails

**Deployment Issues:**
- Make sure you're in the project root directory
- Ensure package.json has correct scripts
- Try deleting `.vercel` folder and redeploying
- Use `npx vercel --debug` for detailed logs

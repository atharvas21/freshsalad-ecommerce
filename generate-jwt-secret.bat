@echo off
echo ========================================
echo    JWT Secret Generator
echo ========================================
echo.
echo Your app needs a JWT_SECRET environment variable.
echo Here's a secure random secret for you:
echo.

node -e "console.log('JWT_SECRET: ' + require('crypto').randomBytes(32).toString('hex'))"

echo.
echo COPY the value above and:
echo 1. Go to your Vercel project dashboard
echo 2. Settings → Environment Variables  
echo 3. Add JWT_SECRET with the value above
echo 4. Redeploy your app
echo.
echo ========================================
pause

@echo off
echo ========================================
echo    FreshSalad - Vercel Deployment
echo ========================================
echo.
echo This script will deploy your app to Vercel
echo Make sure you have a Vercel account ready!
echo.
pause
echo.
echo Installing Vercel CLI...
npm install -g vercel
echo.
echo Starting deployment...
vercel
echo.
echo ========================================
echo    Deployment Complete!
echo ========================================
echo.
echo Your app should now be live on Vercel!
echo Check the URL provided above.
echo.
echo Next steps:
echo 1. Test your deployed app
echo 2. Set environment variables in Vercel dashboard
echo 3. Configure custom domain (optional)
echo.
pause

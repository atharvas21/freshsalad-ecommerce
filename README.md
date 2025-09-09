# 🥗 FreshSalad - Premium Salad Delivery Platform

A modern, full-stack ecommerce application built with Next.js 14 for a premium salad delivery business. Features enterprise-level design, seamless user experience, and comprehensive cart management with advanced UX patterns.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)

## ✨ Key Features

### 🛒 **Advanced Shopping Experience**
- **Smart Product Cards** with dynamic quantity controls (+/- buttons)
- **Enterprise-Level Design** with glassmorphism effects and micro-interactions
- **Real-time Cart Management** with instant visual feedback
- **Bottom-Aligned Card Layouts** for consistent visual hierarchy
- **Intelligent Quantity Handling** - increment/decrement without removing items
- **Persistent Shopping State** across browser sessions

### � **Premium Design System**
- **Glassmorphism Navigation** with backdrop blur effects
- **Professional Color Palette** with green primary theme (#22c55e)
- **Responsive Typography** with Inter font family
- **Smooth Animations** and hover effects throughout
- **Mobile-First Design** optimized for all devices
- **Consistent Visual Language** across all components

### 🔐 **Secure Authentication**
- **Email + Password Login/Signup** with secure password hashing
- **OTP-based Email Verification** for new accounts
- **JWT-based Session Management** with secure token storage
- **Protected Routes** for authenticated users only

### 🧭 **Enhanced Navigation**  
- **Active Page Highlighting** with visual indicators
- **Responsive Design** with glassmorphism effects
- **Smart Cart Badge** with proper z-index layering
- **Mobile-Optimized Menu** with smooth animations
- **Accessibility Features** with ARIA labels and keyboard navigation

### 🥗 **Advanced Product Catalog**
- **Dynamic Product Cards** with nutritional overlays on hover
- **Quantity Management** directly on product cards
- **Visual State Indicators** (adding, in cart, etc.)
- **Consistent Card Heights** with flexbox layouts
- **Next.js Image Optimization** for faster loading
- **Responsive Grid System** adapting to screen sizes

### 🛒 **Intelligent Shopping Cart**
- **Smart Quantity Controls** with proper increment/decrement
- **Visual Quantity Indicators** with high contrast
- **Real-time Price Calculations** including taxes and delivery
- **Enhanced Button Styling** with hover states
- **Persistent Cart State** using localStorage
- **Improved Accessibility** with proper text contrast

### 💳 Checkout Process
- **Delivery Information Form** with validation
- **Order Summary** with itemized pricing
- **Tax and Delivery Fee** calculation
- **Order Confirmation** with estimated delivery time
- **Protected Checkout** requiring authentication

### 📦 Order Management
- **Order History** for authenticated users
- **Order Status Tracking** (confirmed, preparing, delivered)
- **Order Details** with items and delivery information
- **Reorder Functionality** for convenience

## 🛠️ Technology Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **React Hooks** - State management and side effects

### Backend
- **Next.js API Routes** - Serverless backend functions
- **JWT** - JSON Web Token authentication
- **bcryptjs** - Password hashing
- **Nodemailer** - Email services for OTP

### Database (Mock)
- **In-memory storage** for development/demo
- **JSON-based data** for users, orders, and products
- **Ready for database integration** (PostgreSQL, MongoDB, etc.)

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **TypeScript** - Static type checking

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Local Development

1. **Clone and Setup**
   ```bash
   git clone <repository-url>
   cd salad-business
   npm install
   ```

2. **Environment Variables** (Optional)
   Create a `.env.local` file for email configuration:
   ```env
   JWT_SECRET=your-super-secret-jwt-key
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   FROM_EMAIL=noreply@freshsalad.com
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Open Application**
   Visit [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables (if using email features)
   - Deploy with one click!

3. **Environment Variables on Vercel**
   Add these to your Vercel project settings:
   - `JWT_SECRET`
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
   - `FROM_EMAIL`

### Other Platforms
The app is deployable to any platform supporting Next.js:
- **Netlify**
- **Railway**
- **Digital Ocean**
- **AWS**
- **Heroku**

## 📱 Responsive Design

### Mobile-First Approach
- **Breakpoints**: `sm:640px`, `md:768px`, `lg:1024px`, `xl:1280px`
- **Grid Systems**: Responsive product grids
- **Navigation**: Collapsible mobile menu
- **Touch-Friendly**: Optimized button sizes and spacing

### Desktop Enhancements
- **Hover Effects**: Product card interactions
- **Sidebar Layouts**: Cart and checkout pages
- **Multi-column**: Feature sections and forms

## 🎨 UI/UX Features

### Design System
- **Green Primary Color**: Health and freshness theme
- **Yellow Secondary**: Energy and vitality
- **Clean Typography**: Inter font family
- **Consistent Spacing**: Tailwind's spacing scale

### Animations & Interactions
- **Smooth Transitions**: 300ms ease transitions
- **Hover Effects**: Transform and shadow changes
- **Loading States**: Spinners and disabled states
- **Micro-interactions**: Button press feedback

### Accessibility
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: Semantic HTML and ARIA labels
- **Color Contrast**: WCAG compliant colors
- **Focus Indicators**: Clear focus states

## 🗂️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── auth/          # Authentication endpoints
│   │   ├── salads/        # Product endpoints
│   │   └── orders/        # Order management
│   ├── auth/              # Authentication pages
│   ├── salads/            # Product listing page
│   ├── cart/              # Shopping cart page
│   ├── checkout/          # Checkout process
│   ├── order-confirmation/ # Order success page
│   └── profile/           # User profile pages
├── components/            # Reusable components
│   ├── providers/         # Context providers
│   ├── layout/            # Layout components
│   ├── home/              # Homepage components
│   ├── products/          # Product components
│   ├── cart/              # Cart components
│   └── ui/                # UI components
└── lib/                   # Utility functions
    ├── database.ts        # Mock database
    └── email.ts           # Email services
```

## 🔧 Customization

### Adding New Salads
Edit `src/lib/database.ts` and add new items to the `salads` array:

```typescript
{
  id: 'unique-id',
  name: 'Salad Name',
  price: 12.99,
  image: 'image-url',
  description: 'Description...',
  macros: { calories: 300, protein: 15, carbs: 20, fat: 12 },
  ingredients: ['ingredient1', 'ingredient2']
}
```

### Styling Changes
Modify `tailwind.config.js` for design system changes:
- Colors
- Fonts
- Spacing
- Breakpoints

### Database Integration
Replace mock database in `src/lib/database.ts` with:
- **PostgreSQL** with Prisma
- **MongoDB** with Mongoose  
- **Supabase**
- **Firebase**

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**
   ```bash
   npm run lint
   npm run build
   ```

2. **Email Not Working**
   - Check SMTP credentials
   - Verify email service settings
   - Check spam folder

3. **Authentication Issues**
   - Clear localStorage
   - Check JWT_SECRET environment variable

### Development Tips

- Use `npm run dev` for hot reloading
- Check browser console for errors
- Use React Developer Tools
- Test on different screen sizes

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support, email support@freshsalad.com or create an issue in the GitHub repository.

---

**Built with ❤️ for healthy eating and great UX**

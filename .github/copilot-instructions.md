<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# FreshSalad Ecommerce Development Guidelines

## Project Overview
This is a Next.js 14 ecommerce application for a salad delivery business. The project uses TypeScript, Tailwind CSS, and follows modern React patterns with the App Router.

## Code Style & Standards
- Use TypeScript for all new files
- Follow Next.js 14 App Router conventions
- Use Tailwind CSS for styling with our design system
- Implement responsive design (mobile-first approach)
- Use React hooks and functional components
- Follow accessibility best practices

## Architecture Patterns
- **Authentication**: JWT-based with context providers
- **State Management**: React Context + localStorage for cart
- **API Routes**: Next.js API routes for backend functionality
- **Data Layer**: Mock database (ready for real DB integration)
- **Components**: Reusable, composable components

## Design System
- **Primary Colors**: Green theme (#22c55e, #16a34a, #15803d)
- **Secondary Colors**: Yellow accents (#eab308, #facc15)
- **Typography**: Inter font family
- **Spacing**: Tailwind's consistent spacing scale
- **Components**: Card hover effects, smooth transitions

## File Organization
- Components in `/src/components/` organized by feature
- Pages in `/src/app/` following App Router structure
- API routes in `/src/app/api/`
- Utilities and types in `/src/lib/`
- Shared interfaces and types at the top of files

## Best Practices
- Use proper TypeScript interfaces for all data structures
- Implement error handling and loading states
- Add proper form validation
- Use semantic HTML elements
- Include alt text for images
- Implement proper meta tags for SEO

## Security Considerations
- Hash passwords with bcryptjs
- Validate all inputs on both client and server
- Use HTTPS in production
- Implement proper CORS policies
- Sanitize user inputs

## Performance Guidelines
- Use Next.js Image component for optimized images
- Implement proper caching strategies
- Use dynamic imports for code splitting
- Optimize bundle size with tree shaking
- Use proper loading states and skeleton screens

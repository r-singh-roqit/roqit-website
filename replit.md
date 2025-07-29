# ROQIT Fleet Management Platform

## Overview

This is a full-stack web application for ROQIT, a fleet management and asset intelligence platform. The application is built with a modern React frontend using TypeScript, shadcn/ui components, and Tailwind CSS, backed by an Express.js server with PostgreSQL database integration using Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Bundler**: Vite for development and production builds
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: In-memory storage (development) with PostgreSQL session store capability
- **API Design**: RESTful endpoints with JSON responses

### Database Schema
The application uses Drizzle ORM with PostgreSQL dialect, featuring:
- **Users table**: Basic user authentication with username/password
- **Contact Submissions table**: Contact form data storage
- **Shared schema**: Type-safe database schemas using Drizzle and Zod

## Key Components

### Frontend Components
1. **Page Components**: Home, About, Contact, and 404 pages
2. **Layout Components**: Navigation, Footer with responsive design
3. **Business Components**: 
   - Hero section with call-to-action
   - Benefits showcase
   - Dashboard preview mockups
   - Solutions overview
   - Platform feature matrix
   - Sustainability metrics
   - Testimonials
   - Contact form with validation
4. **UI Components**: Complete shadcn/ui component library

### Backend Components
1. **Routes**: Contact form submission and retrieval endpoints
2. **Storage Layer**: Abstracted storage interface with in-memory implementation
3. **Middleware**: Request logging, error handling, and development tooling
4. **Development Tools**: Vite integration for hot module replacement

## Data Flow

### Contact Form Submission
1. User fills out contact form on frontend
2. Form data validated using React Hook Form + Zod
3. TanStack Query mutation sends POST request to `/api/contact`
4. Backend validates data using shared Zod schema
5. Data stored in PostgreSQL via Drizzle ORM
6. Success/error response sent back to frontend
7. UI updates with toast notification

### Page Navigation
1. Wouter handles client-side routing
2. React components render based on current route
3. Navigation component tracks active route state
4. 404 page displays for unmatched routes

## External Dependencies

### Frontend Dependencies
- **Radix UI**: Accessible UI primitives for components
- **Lucide React**: Icon library for consistent iconography
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form handling and validation
- **Zod**: Runtime type validation and schema definition
- **Tailwind CSS**: Utility-first CSS framework
- **Date-fns**: Date manipulation utilities

### Backend Dependencies
- **Drizzle ORM**: Type-safe database operations
- **Neon Database**: Serverless PostgreSQL driver
- **Connect PG Simple**: PostgreSQL session store
- **Zod**: Shared validation schemas

### Development Dependencies
- **Vite**: Development server and build tooling
- **TypeScript**: Type checking and compilation
- **ESBuild**: Backend bundling for production
- **Replit Plugins**: Development environment integration

## Deployment Strategy

### Development Mode
- Vite dev server serves frontend with HMR
- Express server runs with tsx for TypeScript execution
- In-memory storage for rapid development iteration
- Replit-specific tooling for cloud development

### Production Build
1. **Frontend**: Vite builds optimized static assets
2. **Backend**: ESBuild bundles server code for Node.js
3. **Database**: Drizzle migrations manage schema changes
4. **Environment**: Production mode disables development middleware

### Database Management
- **Schema Definition**: Centralized in `shared/schema.ts`
- **Migrations**: Generated in `migrations/` directory
- **Configuration**: Environment-based database URL
- **Type Safety**: Drizzle provides compile-time type checking

### Environment Configuration
- **Development**: Local database with development tooling
- **Production**: Environment variables for database connection
- **Build Process**: Separate frontend and backend compilation
- **Static Assets**: Served from Express in production mode

The application follows a modern full-stack architecture with strong type safety, component reusability, and scalable data management patterns. The modular design allows for easy feature extension and maintenance.
# RecruitMate v3 🏃‍♂️⚡

**Empowering student-athletes to unlock their full potential through expert mentorship, strategic training, and college recruiting guidance.**

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Authentication](#authentication)
- [Components](#components)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## 🎯 Overview

RecruitMate is a premium SaaS platform designed to help student-athletes succeed both on the field and in the college recruiting process. We connect aspiring athletes with experienced NCAA mentors, provide event-specific training plans, and offer exclusive access to recruiting resources from top universities.

**Mission:** Bridge the gap between athletic potential and college opportunities.

---

## ✨ Features

### Core Features
- **🤝 Expert Mentorship Program** - Connect with current NCAA athletes for personalized guidance
- **📚 Training Plans** - Event-specific training designed by college athletes
- **📊 Recruiting Resources** - Access to university recruiting questionnaires and contact information
- **🏫 University Network** - Partner with top universities across multiple conferences
- **📧 Email Subscription** - Stay updated with newsletters and success stories
- **👥 Team Showcase** - Meet our founding team of experienced athletes and developers

### Technical Features
- **🔐 Secure Authentication** - NextAuth.js with email/password and OAuth support
- **⚡ Server-Side Rendering** - Next.js 16 for optimal performance
- **🎨 Premium UI/UX** - Dark theme with gradient accents and smooth animations
- **📱 Fully Responsive** - Mobile-first design from tablets to desktops
- **🗄️ Database** - Prisma ORM with PostgreSQL
- **🎬 Dynamic Content** - Video backgrounds and smooth viewport animations

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations and viewport interactions
- **React Awesome Reveal** - Scroll reveal animations

### Backend & Database
- **Next.js API Routes** - Serverless backend functions
- **Prisma** - Type-safe ORM
- **PostgreSQL** - Relational database
- **NextAuth.js** - Authentication & authorization

### DevOps & Tooling
- **ESLint** - Code quality
- **Node.js 18+** - Runtime environment

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- PostgreSQL database
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/recruitmate-v3.git
cd recruitmate-v3
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Configure the following in `.env.local`:
```
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/recruitmate

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# OAuth Providers (optional)
GITHUB_ID=your-github-id
GITHUB_SECRET=your-github-secret

# Stripe (for payments)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_...
STRIPE_SECRET_KEY=sk_...
```

4. **Set up the database**
```bash
npx prisma migrate dev
```

5. **Run the development server**
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application.

---

## 📁 Project Structure

```
recruitmate-v3/
├── app/
│   ├── page.tsx                 # Home page
│   ├── layout.tsx               # Root layout with providers
│   ├── providers.tsx            # NextAuth & SessionProvider
│   ├── resources/
│   │   └── page.tsx             # Protected resources page
│   ├── auth/
│   │   ├── login/
│   │   ├── signup/
│   │   └── callback/
│   └── api/
│       └── auth/[...nextauth]/  # NextAuth API routes
│
├── components/
│   ├── Nav.tsx                  # Navigation (global)
│   ├── Heropage.tsx             # Hero section with video
│   ├── Feature.tsx              # Feature showcases
│   ├── cta.tsx                  # Call-to-action section
│   ├── Newsletter.tsx           # Email subscription
│   ├── logo-clouds.tsx          # University logos grid
│   ├── testimonials.tsx         # Student success stories
│   ├── team.tsx                 # Team member profiles
│   └── ui/                      # Reusable UI components
│
├── public/
│   ├── rmf.png                  # RecruitMate logo
│   ├── trackfield_converted.mp4 # Hero video
│   ├── mobile1.jpg              # CTA image
│   ├── joey.png                 # Team member photos
│   ├── richard.png
│   ├── mrinal.png
│   └── university-logos/        # University images
│
├── types/
│   └── hero.ts                  # TypeScript interfaces
│
├── styles/
│   └── globals.css              # Global styles
│
├── prisma/
│   ├── schema.prisma            # Database schema
│   └── migrations/              # Database migrations
│
├── .env.example                 # Environment template
├── package.json
├── tsconfig.json
├── next.config.ts
├── eslint.config.mjs
├── tailwind.config.ts
└── README.md
```

---

## 🎨 Design System

### Color Palette
- **Primary**: #2563eb (Blue-600) → #dc2626 (Red-600) Gradient
- **Accent**: #7c3aed (Violet-600)
- **Background**: Dark theme with neutral-950 to neutral-900
- **Text**: White with opacity variations for hierarchy

### Typography
- **Headings**: 7xl (56px) font-black for main titles
- **Subheadings**: 2xl font-bold
- **Body**: sm/base with font-light for readability
- **Badges**: Uppercase tracking-widest for emphasis

### Components Pattern
All major sections follow this design pattern:
```tsx
<section className="relative bg-linear-to-br from-neutral-950 via-neutral-900 to-neutral-950 py-20 sm:py-28 lg:py-40 overflow-hidden">
  {/* Decorative gradient orbs */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
  </div>
  
  {/* Content */}
  <motion.div className="max-w-7xl mx-auto relative z-10">
    {/* Motion animations with whileInView */}
  </motion.div>
</section>
```

### Animation Patterns
- **Scroll Reveals**: `whileInView={{ opacity: 1, y: 0 }}`
- **Hover Effects**: `whileHover={{ scale: 1.05, y: -5 }}`
- **Stagger**: `staggerChildren: 0.08` for cascading animations
- **Duration**: 0.5-0.6s for smooth transitions

---

## 🔐 Authentication

RecruitMate uses **NextAuth.js v4** for secure authentication:

### Features
- Email/password login and signup
- Session management
- Protected routes (e.g., `/resources`)
- User email display in navigation
- Sign out functionality

### Protected Routes
```tsx
// In components, check session:
const { data: session, status } = useSession();

if (status !== "authenticated") {
  return <AccessDenied />;
}
```

### Database User Model
```prisma
model User {
  id            String    @id @default(cuid())
  email         String    @unique
  name          String?
  password      String?
  emailVerified DateTime?
  accounts      Account[]
  sessions      Session[]
}
```

---

## 🧩 Key Components

### Hero (`Heropage.tsx`)
- Full-viewport hero with video background
- Dynamic heading and CTA buttons
- Navigation with session-aware auth states
- Mobile menu with smooth animations

### Features (`Feature.tsx`)
- Dark gradient backgrounds
- Decorative animated orbs
- Responsive grid layout
- Viewport-triggered animations

### CTA (`cta.tsx`)
- Split layout (text + image)
- Football player showcase
- Call-to-action buttons
- Smooth reveal animations

### Resources Page (`app/resources/page.tsx`)
- Protected page (requires authentication)
- Conference-based university cards
- Dynamic recruiting questionnaire links
- Responsive grid with image overlays

### Navigation (`Nav.tsx`)
- Fixed header with backdrop blur
- Desktop navigation with hover underlines
- Mobile hamburger menu
- Session-aware login/logout
- Suppressed hydration warnings for dynamic content

---

## 💻 Development

### Running Tests
```bash
npm run lint
```

### Building for Production
```bash
npm run build
npm run start
```

### Database Management
```bash
# View database with Prisma Studio
npx prisma studio

# Create new migration
npx prisma migrate dev --name add_feature

# Reset database (dev only)
npx prisma migrate reset
```

### Common Development Tasks

**Adding a new page:**
```bash
# Create app/newpage/page.tsx
touch app/newpage/page.tsx
```

**Adding a new component:**
```bash
# Create and import in the page
touch components/NewComponent.tsx
```

**Updating database schema:**
1. Edit `prisma/schema.prisma`
2. Run `npx prisma migrate dev --name descriptive_name`
3. Update types as needed

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables on Vercel
1. Go to project settings
2. Add environment variables matching `.env.local`
3. Deploy from main branch

### Database on Production
- Use Prisma Postgres or managed PostgreSQL service
- Keep `DATABASE_URL` secure in Vercel Environment Variables
- Run migrations: `npx prisma migrate deploy`

---

## 🤝 Contributing

We welcome contributions! Here's how:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Style
- Use TypeScript for type safety
- Follow existing component patterns
- Use Tailwind classes (no inline styles)
- Add `suppressHydrationWarning` for dynamic content
- Test on mobile (dev tools)

### Before Submitting PR
- Run `npm run lint`
- Test locally: `npm run dev`
- Check responsive design (mobile, tablet, desktop)
- Verify authentication flows

---

## 📊 Performance

- **Lighthouse Score**: Aiming for 90+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Code Splitting**: Automatic with Next.js
- **Image Optimization**: Using Next.js Image component
- **Caching**: Server-side rendering with ISR capability

---

## 📝 License

This project is proprietary. All rights reserved.

---

## 🙋 Support

For questions or issues:
- 📧 Email: support@recruitmate.com
- 🐛 GitHub Issues: [Open an issue](https://github.com/yourusername/recruitmate-v3/issues)
- 💬 Discord: [Join our community](https://discord.gg/yourserver)

---

## 🎓 Team

Built by athletes and developers passionate about connecting student-athletes with opportunities.

- **Joey Zayszly** - Founder, CEO
- **Richard Johnson** - CTO
- **Mrinal Sharma** - Senior Front-end Developer

---

## 🔮 Roadmap

- [ ] Mobile app (React Native)
- [ ] AI-powered training recommendations
- [ ] Video upload for athlete profiles
- [ ] Direct messaging with mentors
- [ ] Payment integration for premium plans
- [ ] Analytics dashboard
- [ ] Advanced search filters

---

## 📄 Changelog

### v3.0.0 (Current)
- Complete redesign with premium dark theme
- Navigation component isolation
- Hydration mismatch fixes
- Protected resources page
- University network integration

---

**Made with ❤️ for student-athletes everywhere.**

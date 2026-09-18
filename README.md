<div align="center">

<img src="public/assets/logo.png" alt="DentWise Logo" width="110" />

# 🦷 DentWise

### AI-Powered Dental Assistant — Talk. Book. Smile.

DentWise lets patients have a real **voice conversation** with an AI dental assistant for instant advice, then book a real appointment with a real doctor — all in one seamless web app.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-7-2D3748?logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Clerk](https://img.shields.io/badge/Auth-Clerk-6C47FF?logo=clerk&logoColor=white)](https://clerk.com/)
[![Vapi](https://img.shields.io/badge/Voice_AI-Vapi-orange)](https://vapi.ai/)

</div>

---

## ✨ What is DentWise?

DentWise is a full-stack dental clinic platform built around a simple idea: **dental advice shouldn't require waiting on hold.**

Patients can open the app, start a live voice call with an AI dental assistant, ask their questions, and then book a real appointment with an available doctor — complete with email confirmation. Clinics get a clean admin dashboard to manage doctors and appointments, and the whole experience is gated behind a smooth subscription paywall for premium (Pro) features.

---

## 🚀 Features

### 🗣️ AI Voice Assistant
- Real-time, natural **voice conversations** with an AI dental assistant powered by **Vapi**
- Live call states — *Connecting → Listening → Speaking → Call Ended* — with an animated sound-wave visualizer
- Auto-scrolling **live transcript** of the whole conversation
- Gated behind a **Pro subscription**, with a friendly upgrade prompt for free users

### 📅 Smart Appointment Booking
- Browse available doctors by name, speciality, gender, and bio
- Pick a date and see **real-time available time slots** (already-booked slots are automatically blocked)
- Add a reason/notes for the visit (cleaning, emergency, consultation, etc.)
- Instant **email confirmation** on booking, powered by EmailJS
- View upcoming and past appointments with live status (Confirmed / Completed)

### 👤 Patient Dashboard
- Personal appointment history and stats (total visits, completed visits)
- Auto-synced user profile from Clerk (name, email, phone, avatar)

### 🛠️ Admin Dashboard
- Secure, email-restricted admin access
- Add, edit, and manage doctor profiles (speciality, contact info, photo, active status)
- View and manage **every appointment** across the clinic
- At-a-glance clinic-wide statistics

### 💳 Subscription & Billing
- Built-in **Pricing page** powered by Clerk Billing (`<PricingTable />`)
- Free vs. Pro tiers — Pro unlocks unlimited AI voice consultations

### 🔐 Authentication & Security
- Full auth flow (sign up, sign in, session management) via **Clerk**
- Protected routes for dashboard, appointments, admin, and voice pages
- Middleware-based route protection with public marketing pages

### 🎨 Polished UI/UX
- Sleek dark-themed interface built with **Tailwind CSS 4** + **shadcn/ui** + **Radix UI**
- Smooth animations, gradients, and a responsive layout for mobile & desktop
- Toast notifications (Sonner) for instant feedback on every action

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Server Actions) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/), `tw-animate-css` |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Database** | [PostgreSQL](https://www.postgresql.org/) |
| **ORM** | [Prisma 7](https://www.prisma.io/) (with `@prisma/adapter-pg`) |
| **Authentication & Billing** | [Clerk](https://clerk.com/) (`@clerk/nextjs`) |
| **Voice AI** | [Vapi](https://vapi.ai/) (`@vapi-ai/web`) |
| **Email** | [EmailJS](https://www.emailjs.com/) |
| **Data Fetching / Caching** | [TanStack Query](https://tanstack.com/query) |
| **Date Utilities** | [date-fns](https://date-fns.org/) |
| **Linting/Formatting** | [Biome](https://biomejs.dev/) |

---

## 🗂️ Project Structure

```
dentwise/
├── prisma/
│   ├── schema.prisma        # Database models: User, Doctor, Appointment
│   └── migrations/          # SQL migration history
├── public/
│   └── assets/              # Logos, hero images, icons
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── page.tsx         # Landing page
│   │   ├── voice/           # AI voice assistant page
│   │   ├── appointments/    # Appointment booking page
│   │   ├── dashboard/       # Patient dashboard
│   │   ├── admin/           # Admin dashboard (protected)
│   │   └── pro/             # Subscription / pricing page
│   ├── components/
│   │   ├── landing/         # Hero, pricing, how-it-works, CTA, footer
│   │   ├── voice/           # Vapi call widget & feature cards
│   │   ├── appointments/    # Booking flow components
│   │   ├── dashboard/       # Dashboard widgets
│   │   ├── admin/           # Doctor & appointment management UI
│   │   └── ui/               # shadcn/ui primitives
│   ├── features/            # Feature-level composed views
│   ├── hooks/                # Custom React Query hooks
│   ├── lib/
│   │   ├── actions/         # Server Actions (appointments, doctors, users)
│   │   ├── prisma.ts        # Prisma client singleton
│   │   ├── vapi.ts          # Vapi client instance
│   │   └── email.ts         # EmailJS confirmation logic
│   └── proxy.ts              # Clerk middleware / route protection
└── package.json
```

---

## 🗃️ Data Model

The app is backed by three core Prisma models:

- **User** — synced with Clerk, stores profile info and links to appointments
- **Doctor** — name, speciality, contact info, bio, avatar, active status
- **Appointment** — links a `User` to a `Doctor`, with date, time, duration, status (`CONFIRMED` / `COMPLETED`), and a reason/notes field

---

## ⚙️ Getting Started

### Prerequisites
- Node.js 18+
- A PostgreSQL database (e.g. via [Neon](https://neon.tech/), [Supabase](https://supabase.com/), or `npx create-db`)
- Free accounts with **Clerk**, **Vapi**, and **EmailJS**

### 1. Clone & Install
```bash
git clone https://github.com/<your-username>/dentwise.git
cd dentwise
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the project root:

```env
# Database
DATABASE_URL="postgresql://user:password@host:5432/dentwise"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_..."
CLERK_SECRET_KEY="sk_..."

# Admin access (email must match a registered user to unlock /admin)
ADMIN_EMAIL="admin@example.com"

# Vapi Voice AI
NEXT_PUBLIC_VAPI_API_KEY="..."
NEXT_PUBLIC_VAPI_ASSISTANT_ID="..."

# EmailJS (appointment confirmations)
NEXT_PUBLIC_EMAILJS_SERVICE_ID="..."
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID="..."
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY="..."

# App URL (used in confirmation emails)
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 3. Set Up the Database
```bash
npx prisma migrate dev
```

### 4. Run the Dev Server
```bash
npm run dev
```

Visit **http://localhost:3000** 🎉

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build the app for production |
| `npm run start` | Start the production server |
| `npm run lint` | Lint the codebase with Biome |
| `npm run format` | Auto-format the codebase with Biome |

---

## 🗺️ App Routes

| Route | Description | Access |
|---|---|---|
| `/` | Marketing landing page | Public |
| `/voice` | Talk to the AI dental assistant | Signed-in, Pro |
| `/appointments` | Book & view appointments | Signed-in |
| `/dashboard` | Patient overview & stats | Signed-in |
| `/pro` | Subscription pricing | Signed-in |
| `/admin` | Clinic-wide management | Signed-in + Admin email |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues) or open a pull request.

---

## 📄 License

This project is available for personal and educational use. Add your preferred license here (e.g. MIT).

---

<div align="center">

Made with 🦷 and ☕ — **DentWise**

</div>

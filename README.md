# MetaWurks Website

A modern, AI-powered business insights platform built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI, Radix UI
- **Email**: SendGrid
- **Animations**: Tailwind CSS Animations

## 📋 Features

- 🎨 Modern, responsive design
- 🌓 Dark mode support (via next-themes)
- 📧 Contact form with SendGrid integration
- 📝 Blog with dynamic routing
- 🔒 Enterprise-grade security features
- ⚡ Fast performance with Next.js App Router

## 🛠️ Setup

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

```bash
git clone <YOUR_GIT_URL>
cd Metawurks_website
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. **Configure Environment Variables**

Create a `.env.local` file in the root directory:

```env
# SendGrid Configuration (Required for contact form)
SENDGRID_API_KEY=SG.your_sendgrid_api_key_here
EMAIL_TO=admin@metawurks.com
SENDGRID_FROM_EMAIL=message@metawurks.com
```

**SendGrid Setup:**
1. Create account at [SendGrid](https://sendgrid.com)
2. Generate API key: Settings → API Keys → Create API Key
3. Verify sender email: Settings → Sender Authentication
4. Add credentials to `.env.local`

4. **Run Development Server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/                      # Next.js App Router
│   ├── api/                  # API routes
│   │   └── send-email/       # Contact form email endpoint
│   ├── about-us/             # About page
│   ├── blog/                 # Blog pages
│   │   └── [id]/             # Dynamic blog post pages
│   ├── contact/              # Contact page
│   ├── pricing/              # Pricing page
│   ├── product/              # Product page
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   ├── providers.tsx         # Client-side providers
│   ├── globals.css           # Global styles
│   └── not-found.tsx         # 404 page
├── components/               # React components
│   ├── ui/                   # Shadcn UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ...
├── lib/                      # Utility functions
│   ├── utils.ts
│   └── blogPosts.tsx         # Blog post data
├── hooks/                    # Custom React hooks
├── public/                   # Static files
├── next.config.mjs           # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## 🏗️ Build & Deploy

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy

This project can be deployed to:
- **Vercel** (recommended) - Zero configuration
- **Netlify** - Add build command: `npm run build`
- **GCP Cloud Run** - Containerize with Docker
- Any platform supporting Next.js

**Environment Variables for Production:**
Make sure to set all environment variables in your deployment platform:
- `SENDGRID_API_KEY`
- `EMAIL_TO`
- `SENDGRID_FROM_EMAIL`

## 📧 Contact Form

The contact form uses SendGrid to send emails. It includes:
- Form validation
- Terms & conditions checkbox
- Loading states
- Success/error toast notifications
- Spam protection (terms agreement)

**API Endpoint**: `/api/send-email`

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  'ai-blue': 'hsla(220, 61%, 36%, 1.00)',
  'ai-violet': 'hsl(220, 70%, 50%)',
  // ... more colors
}
```

### Components

All UI components are in `components/ui/` and can be customized using Tailwind classes.

## 🐛 Troubleshooting

### Contact Form Not Working

1. Check SendGrid API key is valid and starts with `SG.`
2. Verify sender email is verified in SendGrid
3. Check `EMAIL_TO` is configured
4. Check browser console for error messages

### Build Errors

```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

## 📝 License

Private and confidential - All rights reserved

## 🤝 Support

For support, email admin@metawurks.com or open an issue in the repository.

---

Built with ❤️ by the MetaWurks team

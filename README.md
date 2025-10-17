# Ethnocentrique Web

A modern blog platform built with Next.js, featuring image uploads via Vercel Blob storage.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Vercel account (for blob storage)

### 1. Clone and Install
```bash
git clone <your-repo-url>
cd Ethnocentrique-web
npm install
```

### 2. Environment Setup
Create a `.env.local` file in the root directory:
```bash
# Database
POSTGRES_PRISMA_URL="your_postgres_connection_string"
POSTGRES_URL_NON_POOLING="your_postgres_connection_string"

# NextAuth
NEXTAUTH_SECRET="your_nextauth_secret"
NEXTAUTH_URL="http://localhost:3000"

# Browser URL (for API calls)
NEXT_PUBLIC_BROWSER_URL="http://localhost:3000"

# Vercel Blob (get this from Vercel dashboard)
BLOB_READ_WRITE_TOKEN="your_blob_token_here"
```

### 3. Database Setup
```bash
# Generate Prisma client
npm run generate

# Run database migrations
npm run migrate

# Seed the database (optional)
npm run seed
```

### 4. Start Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to see your application.

## 📸 Vercel Blob Setup

### 1. Create Blob Store
1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Navigate to **Storage** tab
4. Click **Connect Database** → **Blob**
5. Name your store (e.g., "blog-images")
6. Click **Create**

### 2. Get Your Token
1. After creating the blob store, go to **Settings** → **Environment Variables**
2. Copy the `BLOB_READ_WRITE_TOKEN`
3. Add it to your `.env.local` file

### 3. That's It!
The image upload functionality will work automatically once the token is set.

## 🎯 Features

- ✅ **Blog Post Management** - Create, edit, and publish blog posts
- ✅ **Image Uploads** - Drag & drop images directly to Vercel Blob
- ✅ **Rich Text Editor** - TipTap editor with image support
- ✅ **User Authentication** - NextAuth.js integration
- ✅ **Responsive Design** - Mobile-friendly interface
- ✅ **Story Display** - Beautiful story showcase page

## 📁 Project Structure

```
src/
├── app/                 # Next.js app router
│   ├── api/            # API routes
│   └── (home)/         # Public pages
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   └── dashboard/     # Admin dashboard components
├── lib/               # Utilities and configurations
└── stories/           # Story-related components
```

## 🛠️ Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run generate     # Generate Prisma client
npm run migrate      # Run database migrations
npm run seed         # Seed database with sample data
```

## 🚀 Deployment

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production
Make sure to add all the environment variables from your `.env.local` to your Vercel project settings.

## 📝 Usage

### Creating Blog Posts
1. Navigate to `/admin` (login required)
2. Click "Create New Post"
3. Fill in title, content, and upload cover image
4. Publish when ready

### Adding Images
- **Cover Images**: Use the image upload component in the blog form
- **Content Images**: Click the image icon in the editor toolbar to upload or add URLs

## 🔧 Troubleshooting

### Images Not Uploading
- Check that `BLOB_READ_WRITE_TOKEN` is set correctly
- Verify your Vercel Blob store is created and active

### Database Issues
- Ensure your PostgreSQL connection string is correct
- Run `npm run migrate` to apply database changes

### Build Errors
- Run `npm run generate` to update Prisma client
- Check that all environment variables are set

## 📄 License

This project is private and proprietary.

---

**Need help?** Check the [Next.js documentation](https://nextjs.org/docs) or [Vercel Blob docs](https://vercel.com/docs/storage/vercel-blob).
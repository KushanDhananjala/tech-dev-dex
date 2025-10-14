# Environment Variables Setup Guide

## 🚀 **Quick Setup for Local Development**

### **Step 1: Create Local Environment File**

Create a `.env.local` file in your project root:

```bash
# Copy the example file
cp env.example .env.local
```

### **Step 2: Update with Your Values**

Edit `.env.local` with your actual values:

```env
# Environment Variables for TechDevDex - Local Development

# Next.js Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=TechDevDex

# Google AdSense Configuration
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-6102526466949399
NEXT_PUBLIC_ADSENSE_HEADER_SLOT=1234567890
NEXT_PUBLIC_ADSENSE_SIDEBAR_SLOT=1234567891
NEXT_PUBLIC_ADSENSE_CONTENT_SLOT=1234567892

# Analytics (Optional - add your actual IDs)
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_GTM_ID=your-google-tag-manager-id

# Social Media (Optional - add your actual handles)
NEXT_PUBLIC_TWITTER_HANDLE=@yourhandle
NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername

# Contact Information (Optional - add your actual email)
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com

# Development
NODE_ENV=development
```

## 🌐 **Production Environment (Vercel)**

### **Set these in Vercel Dashboard:**

Go to **Vercel Dashboard** → **Your Project** → **Settings** → **Environment Variables**

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-project-name.vercel.app
NEXT_PUBLIC_SITE_NAME=TechDevDex

# AdSense Configuration
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-6102526466949399
NEXT_PUBLIC_ADSENSE_HEADER_SLOT=your-header-slot-id
NEXT_PUBLIC_ADSENSE_SIDEBAR_SLOT=your-sidebar-slot-id
NEXT_PUBLIC_ADSENSE_CONTENT_SLOT=your-content-slot-id

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_GTM_ID=your-google-tag-manager-id

# Social Media (Optional)
NEXT_PUBLIC_TWITTER_HANDLE=@yourhandle
NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername

# Contact Information (Optional)
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com

# Production
NODE_ENV=production
```

## 🔧 **Environment Variables Explained**

### **Required Variables:**
- `NEXT_PUBLIC_SITE_URL`: Your site URL (localhost for dev, Vercel URL for prod)
- `NEXT_PUBLIC_SITE_NAME`: Your site name
- `NEXT_PUBLIC_ADSENSE_CLIENT_ID`: Your AdSense client ID

### **AdSense Ad Units:**
- `NEXT_PUBLIC_ADSENSE_HEADER_SLOT`: Header ad unit slot ID
- `NEXT_PUBLIC_ADSENSE_SIDEBAR_SLOT`: Sidebar ad unit slot ID
- `NEXT_PUBLIC_ADSENSE_CONTENT_SLOT`: Content ad unit slot ID

### **Optional Variables:**
- `NEXT_PUBLIC_GA_ID`: Google Analytics ID
- `NEXT_PUBLIC_GTM_ID`: Google Tag Manager ID
- `NEXT_PUBLIC_TWITTER_HANDLE`: Your Twitter handle
- `NEXT_PUBLIC_GITHUB_URL`: Your GitHub profile URL
- `NEXT_PUBLIC_CONTACT_EMAIL`: Your contact email

## 🚀 **Quick Commands**

```bash
# Create local environment file
cp env.example .env.local

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to Vercel
git add .
git commit -m "Update environment configuration"
git push origin main
```

## 📋 **Setup Checklist**

- [ ] Create `.env.local` for local development
- [ ] Set environment variables in Vercel dashboard
- [ ] Update site URL with your actual Vercel URL
- [ ] Add AdSense client ID
- [ ] Create ad units in AdSense dashboard
- [ ] Add ad unit slot IDs to Vercel
- [ ] Test locally with `npm run dev`
- [ ] Deploy to production
- [ ] Verify AdSense integration

## 🔍 **Troubleshooting**

**Environment variables not working:**
- Check variable names are exactly correct
- Ensure `.env.local` is in project root
- Restart development server after changes
- Check Vercel dashboard for production variables

**AdSense not loading:**
- Verify client ID is correct
- Check ad units are created
- Ensure domain is approved
- Wait a few minutes for propagation

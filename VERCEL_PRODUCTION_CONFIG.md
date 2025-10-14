# Vercel Production Configuration for TechDevDex

## 🌐 **Production Environment Variables for Vercel Dashboard**

Set these in your Vercel dashboard: **Settings** → **Environment Variables**

### **Required Variables:**

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://www.techdevdex.com
NEXT_PUBLIC_SITE_NAME=TechDevDex

# Google AdSense Configuration
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-6102526466949399
NEXT_PUBLIC_ADSENSE_HEADER_SLOT=your-header-slot-id
NEXT_PUBLIC_ADSENSE_SIDEBAR_SLOT=your-sidebar-slot-id
NEXT_PUBLIC_ADSENSE_CONTENT_SLOT=your-content-slot-id

# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL=kushan.xtream@gmail.com

# Social Media
NEXT_PUBLIC_GITHUB_URL=https://github.com/kushan-xtream

# Analytics (Optional - add when available)
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_GTM_ID=

# Social Media (Optional - add when available)
NEXT_PUBLIC_TWITTER_HANDLE=

# Production Environment
NODE_ENV=production
```

## 🚀 **Quick Setup Steps**

### **Step 1: Update Vercel Environment Variables**

1. Go to [vercel.com](https://vercel.com) → Your TechDevDex project
2. Click **Settings** → **Environment Variables**
3. Add/Update these variables:

| Variable Name | Value | Environment |
|---------------|-------|-------------|
| `NEXT_PUBLIC_SITE_URL` | `https://www.techdevdex.com` | Production, Preview, Development |
| `NEXT_PUBLIC_SITE_NAME` | `TechDevDex` | Production, Preview, Development |
| `NEXT_PUBLIC_ADSENSE_CLIENT_ID` | `ca-pub-6102526466949399` | Production, Preview, Development |
| `NEXT_PUBLIC_CONTACT_EMAIL` | `kushan.xtream@gmail.com` | Production, Preview, Development |
| `NEXT_PUBLIC_GITHUB_URL` | `https://github.com/kushan-xtream` | Production, Preview, Development |
| `NODE_ENV` | `production` | Production, Preview, Development |

### **Step 2: Create AdSense Ad Units**

1. Go to [AdSense Dashboard](https://adsense.google.com)
2. Create ad units for:
   - **Header Ad**: Banner format, responsive
   - **Sidebar Ad**: Rectangle format, responsive  
   - **Content Ad**: Auto format, responsive
3. Copy the slot IDs from each ad unit

### **Step 3: Add Ad Unit IDs to Vercel**

After creating ad units, add these to Vercel:

| Variable Name | Value | Environment |
|---------------|-------|-------------|
| `NEXT_PUBLIC_ADSENSE_HEADER_SLOT` | `your-header-slot-id` | Production, Preview, Development |
| `NEXT_PUBLIC_ADSENSE_SIDEBAR_SLOT` | `your-sidebar-slot-id` | Production, Preview, Development |
| `NEXT_PUBLIC_ADSENSE_CONTENT_SLOT` | `your-content-slot-id` | Production, Preview, Development |

### **Step 4: Deploy Changes**

```bash
# Add all changes
git add .

# Commit with descriptive message
git commit -m "Update environment config with production domain and contact info"

# Push to trigger deployment
git push origin main
```

## ✅ **Current Status**

- ✅ **Domain**: https://www.techdevdex.com
- ✅ **AdSense Client ID**: ca-pub-6102526466949399
- ✅ **Contact Email**: kushan.xtream@gmail.com
- ✅ **GitHub**: https://github.com/kushan-xtream
- ⏳ **Ad Units**: Need to create in AdSense dashboard
- ⏳ **Analytics**: Optional - can add later

## 🎯 **Next Steps**

1. **Set environment variables** in Vercel dashboard
2. **Create ad units** in AdSense dashboard
3. **Add ad unit IDs** to Vercel
4. **Deploy and test** your site
5. **Verify AdSense integration** is working

## 🔍 **Verification Checklist**

- [ ] Site URL updated to https://www.techdevdex.com
- [ ] Contact email set to kushan.xtream@gmail.com
- [ ] GitHub URL set to https://github.com/kushan-xtream
- [ ] AdSense client ID configured
- [ ] Ad units created in AdSense
- [ ] Ad unit slot IDs added to Vercel
- [ ] Site deployed and accessible
- [ ] AdSense integration verified

Your TechDevDex site is now configured with the correct production domain and contact information! 🚀

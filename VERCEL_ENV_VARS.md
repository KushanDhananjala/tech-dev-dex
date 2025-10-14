# Vercel Environment Variables Configuration

## 🎯 **Required Environment Variables for Vercel Dashboard**

Copy and paste these into your Vercel project settings:

### **Step 1: Basic Configuration**

Go to **Vercel Dashboard** → **Your Project** → **Settings** → **Environment Variables**

Add these variables:

```
Variable Name: NEXT_PUBLIC_SITE_URL
Value: https://your-project-name.vercel.app
Environment: Production, Preview, Development
Description: Your site URL

Variable Name: NEXT_PUBLIC_SITE_NAME
Value: TechDevDex
Environment: Production, Preview, Development
Description: Site name

Variable Name: NEXT_PUBLIC_ADSENSE_CLIENT_ID
Value: ca-pub-6102526466949399
Environment: Production, Preview, Development
Description: Google AdSense client ID
```

### **Step 2: AdSense Ad Units (Add after creating ad units)**

```
Variable Name: NEXT_PUBLIC_ADSENSE_HEADER_SLOT
Value: your-header-slot-id
Environment: Production, Preview, Development
Description: Header ad unit slot ID

Variable Name: NEXT_PUBLIC_ADSENSE_SIDEBAR_SLOT
Value: your-sidebar-slot-id
Environment: Production, Preview, Development
Description: Sidebar ad unit slot ID

Variable Name: NEXT_PUBLIC_ADSENSE_CONTENT_SLOT
Value: your-content-slot-id
Environment: Production, Preview, Development
Description: Content ad unit slot ID
```

### **Step 3: Optional Variables**

```
Variable Name: NEXT_PUBLIC_GA_ID
Value: your-google-analytics-id
Environment: Production, Preview, Development
Description: Google Analytics ID

Variable Name: NEXT_PUBLIC_GTM_ID
Value: your-google-tag-manager-id
Environment: Production, Preview, Development
Description: Google Tag Manager ID

Variable Name: NEXT_PUBLIC_TWITTER_HANDLE
Value: @yourhandle
Environment: Production, Preview, Development
Description: Twitter handle

Variable Name: NEXT_PUBLIC_GITHUB_URL
Value: https://github.com/yourusername
Environment: Production, Preview, Development
Description: GitHub profile URL

Variable Name: NEXT_PUBLIC_CONTACT_EMAIL
Value: your-email@example.com
Environment: Production, Preview, Development
Description: Contact email
```

## 🚀 **Quick Setup Process**

1. **Get your Vercel URL:**
   - Go to Vercel dashboard → Your project
   - Copy the URL (e.g., `https://techdevdex.vercel.app`)

2. **Add environment variables:**
   - Go to Settings → Environment Variables
   - Add each variable with the correct values
   - Make sure to select all environments (Production, Preview, Development)

3. **Deploy:**
   - Push your changes to Git
   - Vercel will automatically deploy
   - Check the deployment status

4. **Create AdSense ad units:**
   - Go to AdSense dashboard
   - Create ad units for header, sidebar, and content
   - Copy the slot IDs

5. **Update Vercel with ad unit IDs:**
   - Add the ad unit variables to Vercel
   - Trigger a new deployment

## ✅ **Verification Checklist**

- [ ] All environment variables added to Vercel
- [ ] Site URL updated with correct Vercel URL
- [ ] AdSense client ID configured
- [ ] Ad units created in AdSense
- [ ] Ad unit slot IDs added to Vercel
- [ ] Site deployed and accessible
- [ ] AdSense verification completed
- [ ] Ads displaying correctly

## 🔧 **Troubleshooting**

**Environment variables not working:**
- Check variable names are exactly correct
- Ensure all environments are selected
- Redeploy after adding variables

**AdSense not loading:**
- Verify domain is approved in AdSense
- Check ad units are created
- Wait a few minutes for propagation

**Build failures:**
- Check build logs in Vercel dashboard
- Verify all dependencies are installed
- Check for TypeScript errors

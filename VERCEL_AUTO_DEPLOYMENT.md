# Vercel Auto-Deployment Configuration Guide

Since you're using automatic deployment with Vercel connected to your Git repository, here's how to configure everything properly.

## 🚀 **Vercel Dashboard Configuration**

### 1. **Access Your Vercel Project**
1. Go to [vercel.com](https://vercel.com) and sign in
2. Find your TechDevDex project
3. Click on the project name

### 2. **Environment Variables Setup**

Go to **Settings** → **Environment Variables** and add these variables:

#### **Required Variables (Add these first):**
```env
NEXT_PUBLIC_SITE_URL=https://your-project-name.vercel.app
NEXT_PUBLIC_SITE_NAME=TechDevDex
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-6102526466949399
```

#### **AdSense Ad Unit Variables (Add after creating ad units):**
```env
NEXT_PUBLIC_ADSENSE_HEADER_SLOT=your-header-slot-id
NEXT_PUBLIC_ADSENSE_SIDEBAR_SLOT=your-sidebar-slot-id
NEXT_PUBLIC_ADSENSE_CONTENT_SLOT=your-content-slot-id
```

#### **Optional Variables:**
```env
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_GTM_ID=your-google-tag-manager-id
NEXT_PUBLIC_TWITTER_HANDLE=@yourhandle
NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
```

### 3. **Environment Variable Settings**

For each variable, set:
- **Environment**: Production, Preview, Development (select all)
- **Value**: Your actual value
- **Description**: Brief description of what it's for

### 4. **Domain Configuration**

#### **Get Your Vercel URL:**
1. Go to **Settings** → **Domains**
2. Copy your Vercel URL (e.g., `https://techdevdex.vercel.app`)
3. Update `NEXT_PUBLIC_SITE_URL` with this URL

#### **Custom Domain (Optional):**
1. Add your custom domain in **Settings** → **Domains**
2. Update DNS records as instructed
3. Update `NEXT_PUBLIC_SITE_URL` with your custom domain

## 🔧 **Step-by-Step Configuration**

### **Step 1: Set Basic Environment Variables**

1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Click **Add New**
4. Add these variables one by one:

```
Variable Name: NEXT_PUBLIC_SITE_URL
Value: https://your-project-name.vercel.app
Environment: Production, Preview, Development

Variable Name: NEXT_PUBLIC_SITE_NAME
Value: TechDevDex
Environment: Production, Preview, Development

Variable Name: NEXT_PUBLIC_ADSENSE_CLIENT_ID
Value: ca-pub-6102526466949399
Environment: Production, Preview, Development
```

### **Step 2: Deploy and Test**

1. **Push your changes to Git:**
   ```bash
   git add .
   git commit -m "Add AdSense integration and Vercel config"
   git push origin main
   ```

2. **Vercel will automatically deploy** (check the deployment status in Vercel dashboard)

3. **Test your site:**
   - Visit your Vercel URL
   - Check if the site loads correctly
   - Look for any errors in the browser console

### **Step 3: Create AdSense Ad Units**

1. **Go to AdSense Dashboard:**
   - Visit [adsense.google.com](https://adsense.google.com)
   - Go to **Ads** → **By ad unit**

2. **Create Ad Units:**
   - **Header Ad**: Banner format, responsive
   - **Sidebar Ad**: Rectangle format, responsive
   - **Content Ad**: Auto format, responsive

3. **Get Ad Unit IDs:**
   - Copy the slot IDs from each ad unit
   - You'll get IDs like: `1234567890`, `1234567891`, `1234567892`

### **Step 4: Add Ad Unit Variables to Vercel**

1. Go back to **Vercel** → **Settings** → **Environment Variables**
2. Add the ad unit variables:

```
Variable Name: NEXT_PUBLIC_ADSENSE_HEADER_SLOT
Value: your-header-slot-id
Environment: Production, Preview, Development

Variable Name: NEXT_PUBLIC_ADSENSE_SIDEBAR_SLOT
Value: your-sidebar-slot-id
Environment: Production, Preview, Development

Variable Name: NEXT_PUBLIC_ADSENSE_CONTENT_SLOT
Value: your-content-slot-id
Environment: Production, Preview, Development
```

### **Step 5: Trigger New Deployment**

After adding environment variables, trigger a new deployment:

1. **Option 1: Push a small change:**
   ```bash
   # Make a small change to trigger deployment
   echo "# Updated $(date)" >> README.md
   git add README.md
   git commit -m "Trigger deployment with new env vars"
   git push origin main
   ```

2. **Option 2: Manual redeploy:**
   - Go to Vercel dashboard → **Deployments**
   - Click **Redeploy** on the latest deployment

## 🎯 **Verification Steps**

### **1. Check Deployment Status**
- Go to Vercel dashboard → **Deployments**
- Ensure the latest deployment is successful
- Check build logs for any errors

### **2. Test Your Site**
- Visit your Vercel URL
- Check if AdSense script is loading (inspect element → Network tab)
- Look for placeholder ads in development mode
- Check browser console for errors

### **3. Verify AdSense Integration**
- Open browser developer tools
- Check if AdSense script is loaded
- Look for any AdSense-related errors
- Test on different devices

## 🔍 **Troubleshooting**

### **Common Issues:**

**Environment Variables Not Working:**
- Ensure variables are set for all environments (Production, Preview, Development)
- Check variable names are exactly correct
- Redeploy after adding new variables

**AdSense Not Loading:**
- Verify your domain is approved in AdSense
- Check if ad units are created
- Ensure environment variables are set correctly
- Wait a few minutes for AdSense to propagate

**Build Failures:**
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Verify TypeScript compilation

### **Debug Commands:**

```bash
# Check if environment variables are working
echo $NEXT_PUBLIC_ADSENSE_CLIENT_ID

# Test build locally
npm run build

# Check for TypeScript errors
npm run type-check
```

## 📋 **Deployment Checklist**

- [ ] Vercel project connected to Git repository
- [ ] Environment variables configured in Vercel dashboard
- [ ] Site URL updated with correct Vercel URL
- [ ] AdSense client ID added
- [ ] Ad units created in AdSense dashboard
- [ ] Ad unit slot IDs added to Vercel environment variables
- [ ] Site deployed and accessible
- [ ] AdSense verification completed
- [ ] Ads displaying correctly
- [ ] Performance monitoring set up

## 🚀 **Quick Commands**

```bash
# Check current status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to trigger deployment
git push origin main

# Check deployment status
# (Go to Vercel dashboard → Deployments)
```

## 📞 **Support Resources**

- [Vercel Documentation](https://vercel.com/docs)
- [Environment Variables Guide](https://vercel.com/docs/concepts/projects/environment-variables)
- [AdSense Help Center](https://support.google.com/adsense/)
- [Next.js on Vercel](https://vercel.com/docs/concepts/nextjs)

Your TechDevDex website is now configured for automatic deployment with Vercel! 🎉

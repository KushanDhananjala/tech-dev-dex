# Vercel Deployment Guide for TechDevDex

This guide will help you deploy your TechDevDex website with AdSense integration to Vercel.

## 🚀 Quick Deployment Steps

### 1. **Connect to Vercel**

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect it's a Next.js project

### 2. **Environment Variables Setup**

In your Vercel dashboard, go to **Settings** → **Environment Variables** and add:

#### **Required Variables:**
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_SITE_NAME=TechDevDex
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-6102526466949399
```

#### **AdSense Ad Unit Variables:**
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

### 3. **Vercel Configuration**

The `vercel.json` file is already configured with:
- ✅ Next.js framework detection
- ✅ Security headers
- ✅ Redirects
- ✅ Build optimization

### 4. **Deployment Process**

1. **Automatic Deployment**: Vercel will auto-deploy on every push to main branch
2. **Manual Deployment**: Use Vercel CLI or dashboard
3. **Preview Deployments**: Every PR gets a preview URL

### 5. **Domain Configuration**

#### **Custom Domain (Recommended):**
1. In Vercel dashboard, go to **Settings** → **Domains**
2. Add your custom domain
3. Update DNS records as instructed
4. Update `NEXT_PUBLIC_SITE_URL` in environment variables

#### **Vercel Subdomain:**
- Your site will be available at `your-project.vercel.app`
- Update `NEXT_PUBLIC_SITE_URL` to your Vercel URL

### 6. **AdSense Verification**

1. **Deploy First**: Make sure your site is live on Vercel
2. **Update AdSense**: Use your live domain URL in AdSense dashboard
3. **Verify**: AdSense will verify your domain automatically
4. **Create Ad Units**: After verification, create your ad units

### 7. **Testing Your Deployment**

#### **Local Testing:**
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy preview
vercel

# Deploy to production
vercel --prod
```

#### **Production Testing:**
1. Visit your live site
2. Check browser console for AdSense errors
3. Verify ads are loading (may take a few minutes)
4. Test on different devices

### 8. **Performance Optimization**

#### **Vercel Optimizations:**
- ✅ Automatic image optimization
- ✅ Edge functions
- ✅ CDN distribution
- ✅ Automatic HTTPS

#### **AdSense Optimizations:**
- ✅ Lazy loading ads
- ✅ Responsive design
- ✅ Error handling
- ✅ Development mode

### 9. **Monitoring and Analytics**

#### **Vercel Analytics:**
- Built-in performance monitoring
- Real-time metrics
- Error tracking

#### **AdSense Monitoring:**
- Revenue tracking
- Ad performance metrics
- User engagement data

### 10. **Troubleshooting**

#### **Common Issues:**

**Build Failures:**
```bash
# Check build logs in Vercel dashboard
# Common fixes:
npm install
npm run build
```

**AdSense Not Loading:**
- Verify environment variables are set
- Check domain is approved in AdSense
- Ensure ad units are created
- Check browser console for errors

**Performance Issues:**
- Use Vercel's built-in analytics
- Monitor Core Web Vitals
- Optimize images and assets

### 11. **Environment-Specific Configuration**

#### **Development:**
```env
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

#### **Production:**
```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### 12. **Security Best Practices**

- ✅ HTTPS enforced by Vercel
- ✅ Security headers configured
- ✅ Environment variables secured
- ✅ No sensitive data in client-side code

### 13. **Deployment Checklist**

- [ ] Repository connected to Vercel
- [ ] Environment variables configured
- [ ] Custom domain set up (optional)
- [ ] AdSense client ID added
- [ ] Ad units created in AdSense
- [ ] Site deployed and accessible
- [ ] AdSense verification completed
- [ ] Ads displaying correctly
- [ ] Performance monitoring set up

### 14. **Useful Commands**

```bash
# Vercel CLI commands
vercel login                    # Login to Vercel
vercel                          # Deploy preview
vercel --prod                   # Deploy to production
vercel env add                  # Add environment variable
vercel env ls                   # List environment variables
vercel logs                     # View deployment logs
vercel domains add              # Add custom domain
```

### 15. **Support Resources**

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js on Vercel](https://vercel.com/docs/concepts/nextjs)
- [Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [Custom Domains](https://vercel.com/docs/concepts/projects/domains)

## 🎯 **Quick Start Commands**

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy your project
vercel

# 4. Set environment variables
vercel env add NEXT_PUBLIC_ADSENSE_CLIENT_ID
vercel env add NEXT_PUBLIC_SITE_URL

# 5. Deploy to production
vercel --prod
```

Your TechDevDex website is now ready for Vercel deployment with full AdSense integration! 🚀

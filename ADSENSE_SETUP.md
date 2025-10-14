# Google AdSense Integration Guide

This guide will help you set up Google AdSense with your TechDevDex website.

## Prerequisites

1. **Google AdSense Account**: You need an approved Google AdSense account
2. **Domain Verification**: Your domain must be verified with Google AdSense
3. **Content Requirements**: Ensure your site has sufficient content and traffic

## Setup Steps

### 1. Get Your AdSense Credentials

1. Log in to your [Google AdSense account](https://www.google.com/adsense/)
2. Go to **Ads** → **By ad unit**
3. Create ad units for different placements:
   - **Header Ad**: Banner format, responsive
   - **Sidebar Ad**: Rectangle format, responsive  
   - **Content Ad**: Auto format, responsive

### 2. Configure Environment Variables

1. Copy `env.example` to `.env.local`:
   ```bash
   cp env.example .env.local
   ```

2. Update the AdSense variables in `.env.local`:
   ```env
   # Replace with your actual AdSense client ID
   NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-1234567890123456
   
   # Replace with your actual ad unit slot IDs
   NEXT_PUBLIC_ADSENSE_HEADER_SLOT=1234567890
   NEXT_PUBLIC_ADSENSE_SIDEBAR_SLOT=1234567891
   NEXT_PUBLIC_ADSENSE_CONTENT_SLOT=1234567892
   ```

### 3. Ad Unit Configuration

The system supports three ad placements:

- **Header**: Top banner ad (728x90 or responsive)
- **Sidebar**: Right sidebar ad (300x250 or responsive)
- **Content**: In-content ad (responsive)

### 4. Development vs Production

- **Development Mode**: Shows placeholder ads with "Development Mode" label
- **Production Mode**: Shows real AdSense ads

The mode is automatically determined by `NODE_ENV`:
- `NODE_ENV=development` → Development mode
- `NODE_ENV=production` → Production mode

### 5. Testing Your Setup

1. **Local Development**:
   ```bash
   npm run dev
   ```
   - You'll see placeholder ads with "Development Mode" label
   - No real ads will be served

2. **Production Testing**:
   ```bash
   npm run build
   npm start
   ```
   - Real AdSense ads will be served
   - Make sure your domain is approved by AdSense

### 6. AdSense Policies Compliance

Ensure your site complies with AdSense policies:

- **Content Quality**: High-quality, original content
- **Traffic**: Sufficient organic traffic
- **User Experience**: Fast loading, mobile-friendly
- **Navigation**: Clear site structure
- **Privacy Policy**: Required for AdSense

### 7. Performance Optimization

The AdSense integration includes:

- **Lazy Loading**: Ads load after page content
- **Responsive Design**: Ads adapt to screen size
- **Error Handling**: Graceful fallbacks
- **Development Mode**: Safe testing environment

### 8. Monitoring and Analytics

Track your AdSense performance:

1. **AdSense Dashboard**: Monitor earnings and performance
2. **Google Analytics**: Track user behavior
3. **Console Logs**: Check for AdSense errors in development

### 9. Troubleshooting

Common issues and solutions:

**Ads not showing**:
- Check if AdSense client ID is correct
- Verify domain is approved
- Ensure ad units are properly configured
- Check browser console for errors

**Development mode not working**:
- Verify `NODE_ENV=development`
- Check environment variables
- Restart development server

**Performance issues**:
- Use responsive ad units
- Implement lazy loading
- Monitor Core Web Vitals

### 10. Best Practices

1. **Ad Placement**: 
   - Above the fold for header ads
   - Natural content flow for content ads
   - Non-intrusive sidebar placement

2. **User Experience**:
   - Don't overwhelm with too many ads
   - Maintain site performance
   - Ensure mobile responsiveness

3. **Content Strategy**:
   - Create valuable, engaging content
   - Regular updates to maintain traffic
   - SEO optimization for better visibility

## File Structure

```
src/
├── components/
│   └── ads/
│       └── Ads.tsx          # AdSense component
├── lib/
│   └── adsense.ts           # AdSense configuration
└── pages/
    └── _document.tsx        # AdSense script injection
```

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_ADSENSE_CLIENT_ID` | Your AdSense publisher ID | `ca-pub-1234567890123456` |
| `NEXT_PUBLIC_ADSENSE_HEADER_SLOT` | Header ad unit slot ID | `1234567890` |
| `NEXT_PUBLIC_ADSENSE_SIDEBAR_SLOT` | Sidebar ad unit slot ID | `1234567891` |
| `NEXT_PUBLIC_ADSENSE_CONTENT_SLOT` | Content ad unit slot ID | `1234567892` |

## Support

If you encounter issues:

1. Check the browser console for errors
2. Verify your AdSense account status
3. Ensure all environment variables are set correctly
4. Test in both development and production modes

For AdSense-specific issues, consult the [Google AdSense Help Center](https://support.google.com/adsense/).

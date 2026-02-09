# Storm Landscaping Website - Complete Deployment & Domain Setup Guide

## Overview

Your Storm Landscaping website is now fully functional with a working contact form. This guide walks you through deploying to Netlify (free hosting) and connecting your custom domain so the "Request a Quote" button and all contact forms work properly.

---

## Part 1: How the Contact Form Works

The website now includes a fully functional contact form with Netlify Forms integration. Here's how it works:

**When deployed to Netlify:**
- Visitors fill out the "Request a Quote" form on the `/contact` page or any of the "Get Quote" buttons
- Form submissions are automatically sent to your email address
- You receive notifications for each inquiry
- No backend server or database needed—Netlify handles everything

**Before deployment:**
- The form is functional on the development server but submissions won't be captured
- Once deployed to Netlify, submissions will work automatically

---

## Part 2: Deploy to Netlify (Free Hosting)

### Step 1: Prepare Your Code

Before deploying, ensure all edits are complete:

1. Update contact information in `/client/src/pages/Home.tsx` and `/client/src/pages/Contact.tsx`
2. Add your actual portfolio images
3. Test the site locally to ensure everything looks correct

### Step 2: Create a GitHub Repository

Netlify deploys from GitHub, so you need to push your code there:

1. Go to [GitHub.com](https://github.com) and sign in (or create a free account)
2. Create a new repository named `storm-landscaping` (or your preferred name)
3. In your terminal, navigate to your project directory and run:

```bash
git init
git add .
git commit -m "Initial commit: Storm Landscaping website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/storm-landscaping.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 3: Deploy to Netlify

1. Go to [Netlify.com](https://netlify.com) and sign up for a free account
2. Click **"New site from Git"**
3. Select **GitHub** and authorize Netlify to access your repositories
4. Choose your `storm-landscaping` repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **"Deploy site"**

Netlify will automatically build and deploy your site. You'll receive a temporary URL like `your-site-name.netlify.app`.

**Important:** At this point, your contact form will start working! Netlify automatically detects the form and enables submissions.

---

## Part 3: Connect Your Custom Domain

Once your site is deployed to Netlify, connecting your custom domain is straightforward.

### Option A: Domain Already Registered Elsewhere

If you own a domain registered with GoDaddy, Namecheap, 1&1, or another registrar:

1. **In Netlify:**
   - Go to your site's settings
   - Click **"Domain settings"**
   - Click **"Add custom domain"**
   - Enter your domain (e.g., `stormlandscaping.co.uk`)
   - Netlify will show you the DNS records to add

2. **At Your Domain Registrar:**
   - Log in to your domain registrar's control panel
   - Find the DNS settings (usually under "Domain Management" or "DNS")
   - Add the DNS records that Netlify provided
   - Common records to add:
     - **A record**: Points to Netlify's IP address
     - **CNAME record**: For `www` subdomain (optional but recommended)
   - Save the changes

3. **Wait for DNS Propagation:**
   - DNS changes can take 24-48 hours to fully propagate
   - Your site will be live at your custom domain once propagation is complete
   - Netlify will automatically provision an SSL certificate (HTTPS)

### Option B: Purchase Domain Through Netlify

If you don't have a domain yet, you can purchase one directly through Netlify:

1. In Netlify site settings, click **"Add custom domain"**
2. Enter the domain you want (e.g., `stormlandscaping.co.uk`)
3. If available, Netlify will offer to register it for you
4. Follow the purchase process
5. The domain will be automatically connected to your site

---

## Part 4: Verify Everything Works

Once your domain is connected, test these features:

1. **Visit your domain** in a browser (e.g., `stormlandscaping.co.uk`)
2. **Check HTTPS**: Your URL should show a lock icon (secure connection)
3. **Test the contact form**: Fill out and submit the "Request a Quote" form
4. **Check your email**: You should receive the form submission
5. **Test all pages**: Home, Gallery, Contact, Location pages (London, Bedfordshire, Cambridgeshire)
6. **Test on mobile**: Ensure the site looks good on phones and tablets

---

## Part 5: Making Updates After Deployment

Once your site is live, updating it is simple:

1. **Make changes locally** in your code files
2. **Commit and push to GitHub:**

```bash
git add .
git commit -m "Update: [describe your changes]"
git push
```

3. **Netlify automatically redeploys** your site
4. **Changes go live** within a few minutes

---

## Part 6: Configuring Email Notifications

By default, Netlify sends form submissions to the email associated with your Netlify account. To change this:

1. In Netlify, go to **Site settings → Forms**
2. Under **Form notifications**, add your preferred email address
3. You'll receive an email for each form submission

---

## Part 7: Managing Contact Form Submissions

Netlify provides a dashboard to view all form submissions:

1. In Netlify, go to **Forms** (in the top navigation)
2. You'll see all submissions with:
   - Visitor name and email
   - Phone number (if provided)
   - Service type requested
   - Project details
   - Submission date and time
3. You can download submissions as CSV for record-keeping

---

## Troubleshooting

### Contact form not working after deployment?

- **Check form name**: Ensure the form `name="contact"` matches in your code
- **Wait for Netlify detection**: Sometimes it takes a few minutes for Netlify to detect forms
- **Redeploy**: Push a small change to GitHub to trigger a redeploy
- **Check browser console**: Look for JavaScript errors (press F12 in browser)

### Domain not connecting?

- **DNS propagation**: Wait 24-48 hours for DNS changes to propagate
- **Check DNS records**: Verify you added the correct records at your registrar
- **Netlify support**: Contact Netlify support if DNS records are correct but domain isn't connecting

### Site not updating after pushing changes?

- **Check GitHub**: Verify your changes were pushed to GitHub
- **Check Netlify build**: Go to Netlify **Deploys** tab to see if the build succeeded
- **Clear browser cache**: Press Ctrl+Shift+Delete (or Cmd+Shift+Delete on Mac) to clear cache

---

## Security & Best Practices

Your website is secure and production-ready:

- **HTTPS Encryption**: All traffic is encrypted automatically
- **DDoS Protection**: Netlify's infrastructure protects against attacks
- **No Backend Database**: Static sites are inherently more secure
- **Regular Backups**: Your code is backed up on GitHub
- **Spam Protection**: Consider adding reCAPTCHA to forms if you receive spam (optional)

---

## SEO Optimization for Local Search

To improve visibility in local search results:

1. **Claim Google My Business**: Go to [Google My Business](https://www.google.com/business/) and claim your business
2. **Add to local directories**: List your business on Yelp, Trustpilot, and other local directories
3. **Optimize location pages**: The `/london`, `/bedfordshire`, and `/cambridgeshire` pages are already optimized for local search
4. **Add schema markup**: Consider adding structured data for local business (optional, advanced)
5. **Encourage reviews**: Ask satisfied clients to leave reviews on Google and other platforms

---

## Next Steps Checklist

- [ ] Update contact information (phone, email) in code
- [ ] Add your actual portfolio images
- [ ] Create GitHub repository and push code
- [ ] Deploy to Netlify
- [ ] Connect custom domain
- [ ] Wait for DNS propagation (24-48 hours)
- [ ] Test contact form and all pages
- [ ] Set up email notifications in Netlify
- [ ] Claim Google My Business listing
- [ ] Share your site with friends and colleagues

---

## Support Resources

- **Netlify Documentation**: [docs.netlify.com](https://docs.netlify.com)
- **GitHub Help**: [docs.github.com](https://docs.github.com)
- **Netlify Support**: [support.netlify.com](https://support.netlify.com)
- **React Documentation**: [react.dev](https://react.dev)

---

## File Structure Reference

Key files for reference:

```
storm_landscaping/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx          ← Update contact info here
│   │   │   ├── Contact.tsx       ← Contact form page
│   │   │   ├── Gallery.tsx       ← Portfolio gallery
│   │   │   └── LocationLanding.tsx ← Location pages
│   │   ├── App.tsx               ← Routes configuration
│   │   └── index.css             ← Design tokens & styles
│   ├── public/
│   │   └── storm-landscaping-hero.jpeg ← Your hero image
│   └── index.html                ← HTML template
├── package.json                  ← Dependencies
└── DEPLOYMENT_AND_DOMAIN_SETUP.md ← This file
```

---

## Final Notes

Your website is now production-ready with a fully functional contact form. Once deployed to Netlify and connected to your custom domain, you'll have a professional online presence that automatically captures inquiries from potential clients.

The contact form will work seamlessly, and you'll receive email notifications for each submission. All pages are optimized for mobile devices and search engines, positioning Storm Landscaping as a quality-focused, professional business.

Good luck with your landscaping business!

---

**Built with**: React 19, Tailwind CSS 4, Vite  
**Hosted on**: Netlify (free)  
**Design**: Sculptural Minimalism  
**Last Updated**: February 2026

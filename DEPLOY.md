# Deployment Guide

Here are the simple step-by-step instructions to deploy your Tech News Website.

## Option 1: Vercel (Recommended & Easiest)
Vercel is the creators of Next.js, so it works perfectly with zero configuration.

### Step 1: Push to GitHub
1.  Create a new repository on [GitHub](https://github.com/new).
2.  Open your terminal in VS Code (`Ctrl + ~`).
3.  Run these commands to push your code:
    ```bash
    git init
    git add .
    git commit -m "Ready for deployment"
    git branch -M main
    git remote add origin <YOUR_GITHUB_REPO_URL>
    git push -u origin main
    ```
    *(Replace `<YOUR_GITHUB_REPO_URL>` with the link from step 1)*

### Step 2: Deploy on Vercel
1.  Go to [Vercel.com](https://vercel.com) and sign up/login with GitHub.
2.  Click **"Add New..."** -> **"Project"**.
3.  Find your `Tech News Website` repo and click **"Import"**.
4.  **IMPORTANT**: In the "Build & Development Settings" section:
    *   Vercel usually detects Next.js automatically.
    *   If asked, the "Build Command" is `npm run build`.
    *   The "Output Directory" is `out` (since we are using static export).
5.  Click **"Deploy"**.

🎉 **Done!** You will get a live URL (e.g., `tech-news-website.vercel.app`).

---

## Option 2: GitHub Pages (Free & Integrated)

### Step 1: Push to GitHub
(Same as above)

### Step 2: Configure GitHub Pages
1.  Go to your repository on GitHub.
2.  Click **Settings** > **Pages** (on the left sidebar).
3.  Under **Build and deployment**, select **Source** as **GitHub Actions**.
4.  GitHub will suggest a Next.js workflow. Click **Configure**.
5.  It will create a `nextjs.yml` file. Commit it.
6.  Wait for the Action to finish (check the "Actions" tab).

*Note: Since your `next.config.ts` is already set to `output: 'export'`, this should work smoothly.*

---

## 💡 Important Note on `next.config.ts`
Your current configuration is optimized to run **offline** (opening `index.html` directly). 

If you see broken images or styles on the live site:
1.  Open `next.config.ts`.
2.  Remove or comment out the line: `assetPrefix: '.',`.
3.  Push the changes again.

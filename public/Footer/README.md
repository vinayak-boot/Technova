# About Us Landing Page - Vinayak Soni

A dynamic, dark-themed About Us landing page built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Dark Theme** with glassmorphism effects
- **Smooth Animations** - scroll-triggered fade-ins and hover effects
- **Responsive Design** - works on all devices
- **Modern Stack** - React + Vite + Tailwind CSS

## 📁 Project Structure

```
Footer/
├── src/              # Source files
│   ├── App.jsx       # Main component
│   ├── main.jsx      # React entry point
│   └── index.css     # Styles and animations
├── public/           # Static assets
│   └── profile.jpg   # Profile image
├── dist/             # Built files (production)
└── index.html        # Vite entry point
```

## 🛠️ How to Run

### Option 1: Development Server (Recommended)
```bash
npm install
npm run dev
```
Then open http://localhost:5173/

### Option 2: Production Build
```bash
npm run build
npm run preview
```

### Option 3: Open Built Files
The built version is in the `dist/` folder. To view it:

**Method A - Using a local server:**
```bash
cd dist
python -m http.server 8000
```
Then open http://localhost:8000/

**Method B - Using VS Code:**
1. Install "Live Server" extension
2. Right-click `dist/index.html`
3. Select "Open with Live Server"

## ⚠️ Important Notes

- **Do NOT open `index.html` directly in browser** - it will show a blank page because React apps need a server
- **Always use `dist/index.html`** for the production version
- **Use `npm run dev`** for development with hot reload

## 📝 Customization

- **Profile Image**: Replace `public/profile.jpg`
- **Content**: Edit `src/App.jsx`
- **Styles**: Modify `src/index.css` and `tailwind.config.js`
- **Colors**: Update color palette in `tailwind.config.js`

## 🎨 Tech Stack

- React 18
- Vite 6
- Tailwind CSS 3
- Modern JavaScript (ES6+)

---

Built with ❤️ by Vinayak Soni

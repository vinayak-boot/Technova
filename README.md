# Tech News Website

Welcome to your dynamic Tech News Website! This project is built with **Next.js**, **Tailwind CSS**, and **TypeScript**.

## 🚀 How to Run (Beginner's Guide)

Since you are using VS Code, here is the easiest way to run your website:

1.  **Open the Terminal**
    *   In VS Code, go to the top menu and click `Terminal` -> `New Terminal`.
    *   *Shortcut:* Press `Ctrl + ~` (the key below Esc).

2.  **Start the Server**
    *   Type the following command in the terminal and press `Enter`:
        ```bash
        npm run dev
        ```

3.  **View Your Website**
    *   You will see a message saying `Ready in ...`.
    *   Hold `Ctrl` and click the link that appears: [http://localhost:3000](http://localhost:3000)
    *   Or just open your browser (Chrome, Edge, etc.) and type `localhost:3000` in the address bar.

4.  **Stop the Server**
    *   To stop the website, click inside the terminal and press `Ctrl + C`.
    *   Type `y` and press `Enter` if asked to terminate.

## 🛠️ Project Features

*   **Dynamic Theme**: The background color changes automatically based on the category (AI = Green, Crypto = Orange, etc.).
*   **AI News Feed**: The news articles on the home page update automatically every time you refresh, simulating a daily AI update.
*   **Responsive**: Looks good on mobile phones and desktops.

## 📁 Important Files

If you want to make changes, here are the main files:

*   `src/app/page.tsx`: The **Home Page**. Change the layout or text here.
*   `src/components/Navbar.tsx`: The **Navigation Bar** at the top.
*   `src/lib/news-service.ts`: The **"AI Engine"**. This is where the mock news data is generated. You can add more topics here.
*   `src/app/globals.css`: The **Colors and Styles**. Change the gradient colors here.

## 🆘 Troubleshooting

*   **"Command not found"**: Make sure you have Node.js installed.
*   **"EADDRINUSE"**: This means the port 3000 is already taken. The command will usually try to use a different port (like 3001) automatically. Just check the link in the terminal.

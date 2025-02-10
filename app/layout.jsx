// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "$DreamAI",
  description: "Tired of missing out on the next big crypto? Meme Dream AI isn’t just another AI coin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased overflow-x-clip`}
      >
        {children}
      </body>
    </html>
  );
}

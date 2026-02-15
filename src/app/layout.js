import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

// Configure the Cormorant Garamond font
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const metadata = {
  title: "Fahad.World",
  description: "Portfolio of Fahad",
};

export default function RootLayout({ children }) {
  return (
    // Added 'suppressHydrationWarning' here to fix the extension error
    <html lang="en" suppressHydrationWarning>
      <body className={cormorant.className}>{children}</body>
    </html>
  );
}
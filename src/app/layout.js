import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const fipps = localFont({
  src: "fonts/Fipps.otf",
  variable: "--font-fipps",
  weight: "100 900",
});
const open24 = localFont({
  src: "fonts/Open24.ttf",
  variable: "--font-open24",
  weight: "100 900",
});

export const metadata = {
  title: "Moises Moreno",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fipps.variable} ${open24.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
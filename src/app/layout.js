import "./globals.css";

export const metadata = {
  title: "Twibbonize",
  description: "Clean base with Header, Hero, Footer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

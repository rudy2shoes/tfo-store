import "./globals.css";

export const metadata = {
  title: "TFO - Teak Furniture Online",
  description: "Luxury teak outdoor furniture designed to last generations."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

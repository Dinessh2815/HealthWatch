import "./globals.css";
import Navbar from "../components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        <main className="ml-64">{children}</main>
      </body>
    </html>
  );
}

import "./globals.css";
import HeaderNavigation from "../components/organisms/HeaderNavigation";
import Footer from "../components/organisms/Footer";

export const metadata = {
  title: "Pangasinan Heritage Digital Showcase",
  description:
    "Explore the cultural, historical, and natural heritage of Pangasinan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <HeaderNavigation />

        {children}

        <Footer />
      </body>
    </html>
  );
}
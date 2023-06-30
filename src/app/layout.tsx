import Header from "@/components/layout/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anlog",
  description: "Is An's develop word",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="w-full flex justify-center">
          <div className="max-w-screen-lg">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}

import "./globals.css";
import { Inter } from "next/font/google";
import AuthProvider from "../components/AuthProvider";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  visualViewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={`${inter.className} h-screen`}>
          <NavBar />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
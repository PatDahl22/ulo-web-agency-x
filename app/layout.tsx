
import "./globals.css";
import Layout from "../components/Layout";

export const metadata = {
  title: "ULO",
  description: "Vi hjälper Sveriges bästa företag med allt de behöver",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import styles from "./styles.module.css";
import { Inter } from "next/font/google";
import "../styles/global.css";
import Header from "../components/header";
import Footer from "../components/footer";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={inter.className}>
      <body className={styles.container}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

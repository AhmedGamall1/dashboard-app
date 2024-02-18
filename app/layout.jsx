import { Cairo } from "next/font/google";
import "./globals.css";
import { ThemeModeProvider } from "./providers/ThemeProvider";
const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "dashboard-app",
  desription: "dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} bg-[#F5F5F5] dark:text-black`}>
        <ThemeModeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeModeProvider>
      </body>
    </html>
  );
}

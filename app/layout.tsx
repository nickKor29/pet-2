import "@/app/_styles/globals.css";
import { Nunito } from "next/font/google";
import Header from "./_components/Header";

const nunito = Nunito({
  weight: ["400", "700"],
  subsets: ["cyrillic"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / Русский путь",
    default: "Добро пожаловать / Русский путь",
  },
  description:
    "Откройте для себя экстремальные туры по России! Увлекательные путешествия, горные походы, сплавы по рекам, альпинизм и другие экстремальные приключения для настоящих любителей адреналина. Забронируйте тур прямо сейчас и испытайте незабываемые эмоции!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body
        className={`${nunito.className} bg-primary-950 text-primary-50 min-h-screen flex flex-col antialiased relative`}
      >
        <Header />
        <div className="flex-1 px-4 py-8 md:px-8 md:py-12">
          <main className="max-w-7xl mx-auto w-full"> {children}</main>
        </div>
      </body>
    </html>
  );
}

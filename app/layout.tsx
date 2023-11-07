import "../styles/globals.css";
import { GlobalContextProvider } from "../context/store";
import HeaderMobile from "../components/header-mobile";
import Header from "../components/header";

export const metadata = {
  title: "Last Movies",
  icons: {
    icon: "/next.svg",
  },
  keywords: ["Next.js", "React", "Tailwind CSS"],
  authors: [
    {
      name: "John Asto",
      url: "https://johnasto.netlify.app/",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <HeaderMobile />
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}

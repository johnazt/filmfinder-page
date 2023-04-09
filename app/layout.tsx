import React from "react";
import "../styles/globals.css";
import Navbar from "../components/shared/Navbar";
import { GlobalContextProvider } from "../context/store";

export const metadata = {
  title: "FilmFinder",
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
        <Navbar />
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}

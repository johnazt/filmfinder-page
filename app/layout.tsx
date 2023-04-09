import React from "react";
import "../styles/globals.css";
import Navbar from "../components/shared/Navbar";
import { GlobalContextProvider } from "../context/store";

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

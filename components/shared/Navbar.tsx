import Link from "next/link";
import React from "react";

const Navbar = () => {
  const routes = [
    { name: "FilmFinder", path: "/" },
    { name: "🎬", path: "" },
  ];
  return (
    <nav className="flex justify-between p-4 bg-blue-800 text-xl">
      {routes.map((r) => (
        <Link key={r.path} href={r.path}>
          {r.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;

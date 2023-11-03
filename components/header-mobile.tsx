import Link from "next/link";

const HeaderMobile = () => {
  return (
    <nav className="flex justify-between items-baseline p-5 bg-zinc-950 text-xl h-16">
      <Link href="/">
        <span className="text-2xl font-bold text-red-500">LastMovies</span>
      </Link>
      <HambugerIcon />
    </nav>
  );
};

export default HeaderMobile;

export const HambugerIcon = () => {
  return (
    <button className="pointer-events-auto absolute right-5 top-7 z-30">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="16"
        viewBox="0 0 24 16"
        fill="none"
      >
        <path
          d="M0 16H24V13.3333H0V16ZM0 9.33333H24V6.66667H0V9.33333ZM0 0V2.66667H24V0H0Z"
          fill="white"
        />
      </svg>
    </button>
  );
};

import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-zinc-950 text-xl hidden lg:block">
      <div className="max-w-[80rem] mx-auto relative p-7 flex justify-between items-baseline">
        <div className="flex gap-11 items-baseline">
          <Link href="/">
            <span className="text-2xl font-bold text-red-500">LastMovies</span>
          </Link>
          <div className="flex gap-11">
            <Link href="/">
              <span className="font-light uppercase">movies</span>
            </Link>
            <Link href="/">
              <span className="font-normal uppercase">my list</span>
            </Link>
            <Link href="/">
              <span className="font-normal uppercase">more</span>
            </Link>
          </div>
        </div>
        <div className="flex gap-11">
          <Link href="/">
            <span className="font-normal uppercase">sign up</span>
          </Link>
          <button className="uppercase">log in</button>
        </div>
      </div>
    </div>
  );
};
export default Header;

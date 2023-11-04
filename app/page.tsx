import PopularMovies from "../components/PopularMovies";
import ReleaseMovies from "../components/ReleaseMovies";

const Home = () => {
  return (
    <main className="container lg:container-md mx-auto px-5 px-lg-0 lg:w-[80rem]">
      <ReleaseMovies />
      <PopularMovies />
    </main>
  );
};

export default Home;

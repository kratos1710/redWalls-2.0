import type { NextPage } from "next";
import Head from "next/head";
import HomeCard from "../components/HomeCard";
import Navbar from "../components/Navbar";
const Home: NextPage = () => {
  return (
    <div className="h-full bg-black ">
      <Head>
        <title>RedWalls</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="bg-black max-w-screen-2xl mx-auto min-h-full lg:px-2 h-[calc(100vh-48px)] text-white grid grid-cols-1 lg:grid-cols-2 lg:gap-2">
        <HomeCard text="Anime" link="/anime.webp" route="/Anime" key={1} />
        <HomeCard text="Phone" link="/phone.webp" route="/Phone" key={2} />
        <HomeCard
          text="Wallpapers"
          link="/wallpapers.webp"
          route="/Walls"
          key={3}
        />
        <HomeCard
          text="Widescreen"
          link="/widescreen.webp"
          route="/WideScreen"
          key={4}
        />
      </main>
    </div>
  );
};

export default Home;

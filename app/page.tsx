import Image from "next/image";
import NavBar from "./components/navbar";
import HomeHero from "./components/homeHero";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HomeHero />
      </main>
    </>
  );
}

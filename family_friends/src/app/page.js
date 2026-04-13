import Image from "next/image";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1  bg-white">
      <Navbar />
      <SearchBar />
      <Cards />
      <Footer />
    </div>
  );
}

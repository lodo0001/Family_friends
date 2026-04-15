import { Suspense } from "react";
import SearchBar from "../components/SearchBar";
import Cards from "../components/Cards";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-white">
      <SearchBar />
      <Suspense fallback={<div>Loading dogs...</div>}>
        <Cards />
      </Suspense>
    </div>
  );
}

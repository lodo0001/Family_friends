import { GoStar } from "react-icons/go";

export default async function Page() {
  const res = await fetch("https://api.thedogapi.com/v1/breeds", {
    headers: {
      "x-api-key":
        "live_lcVVLqZaIIIN2FIbWRwCswDIqQA4RA2jn4AW2aYA2p8I6Col38Z6sovvCsSJy1dJ",
    },
  });

  const dogs = await res.json();

  return (
    <div className="grid grid-cols-2 gap-6 p-6 m-2">
      {dogs.slice(0, 6).map((dog) => (
        <div key={dog.id} className="relative rounded-2xl bg-gray-200/30 ">
          <div className="absolute top-2 right-2 bg-gray-100/20 rounded-full p-1">
            <GoStar size={18} className="text-white" />
          </div>
          <img src={dog.image.url} alt={dog.name} className="rounded-2xl" />
          <div className="p-2">
            <h2 className="text-black font-bold">{dog.name}</h2>
            <h3 className="text-gray-500">{dog.origin}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

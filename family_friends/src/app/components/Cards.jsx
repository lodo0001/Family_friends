// import { GoStar } from "react-icons/go";

// export default async function Page() {
//   "use server";
//   const res = await fetch("https://api.thedogapi.com/v1/breeds", {
//     headers: {
//       "x-api-key": process.env.API_KEY,
//     },
//   });

//   const dogs = await res.json();

//   return (
//     <div className="grid grid-cols-2 gap-6 p-6 m-2">
//       {dogs.slice(0, 10).map((dog) => (
//         <div
//           key={dog.id}
//           className="relative rounded-2xl bg-gray-200/30 shadow-xl"
//         >
//           <div className="absolute top-2 right-2 bg-gray-100/20 rounded-full p-1">
//             <GoStar size={18} className="text-white" />
//           </div>
//           <img src={dog.image.url} alt={dog.name} className="rounded-2xl" />
//           <div className="p-3">
//             <h2 className="text-black font-bold">{dog.name}</h2>
//             <h3 className="text-gray-500 font-l">{dog.origin}</h3>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

import Dog from "./Dog";

export default async function Page() {
  const res = await fetch("https://api.thedogapi.com/v1/breeds", {
    headers: {
      "x-api-key": process.env.API_KEY,
    },
  });

  const dogs = await res.json();

  return (
    <div className="grid grid-cols-2 gap-6 p-6 m-2">
      {dogs.slice(0, 10).map((dog) => (
        <Dog key={dog.id} dog={dog} />
      ))}
    </div>
  );
}

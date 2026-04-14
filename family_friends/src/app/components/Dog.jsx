import { GoStar } from "react-icons/go";

const Dog = ({ dog }) => {
  return (
    <div className="relative rounded-2xl bg-gray-200/30 shadow-xl">
      <img src={dog.image?.url} alt={dog.name} className="rounded-2xl" />
      <div className="absolute top-2 right-2 bg-gray-100/20 rounded-full p-1">
        <GoStar size={18} className="text-white" />
      </div>

      <div className="p-3">
        <h2 className="text-black font-bold">{dog.name}</h2>
        <h3 className="text-gray-500">{dog.origin}</h3>
      </div>
    </div>
  );
};

export default Dog;

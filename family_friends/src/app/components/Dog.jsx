import { GoStar } from "react-icons/go";
import Image from "next/image";

const Dog = ({ name, breed, img }) => {
  return (
    <div className="relative rounded-2xl bg-gray-200/30 shadow-xl">
      <Image src={img} alt={name} fill className="object-cover rounded-2xl" />
      <div className="absolute top-2 right-2 bg-gray-100/20 rounded-full p-1">
        <GoStar size={18} className="text-white" />
      </div>

      <div className="p-3">
        <h2 className="text-black font-bold">{name}</h2>
        <h3 className="text-gray-500">{breed}</h3>
      </div>
    </div>
  );
};

export default Dog;

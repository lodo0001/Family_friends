import { GoStarFill } from "react-icons/go";
import { RiArrowLeftSLine } from "react-icons/ri";

const DogPicture = () => {
  return (
    <div className="flex justify-center">
      <div className="relative">
        <img
          src="https://picsum.photos/200"
          className="w-80 h-80 rounded-[20px]"
          alt="Random billede"
        />
        <button className="absolute top-5 left-5 bg-white rounded-full p-2">
          <RiArrowLeftSLine size={25} className="text-black" />
        </button>
        <div className="absolute top-5 right-5 bg-gray-100/20 rounded-full p-2">
          <GoStarFill size={25} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default DogPicture;

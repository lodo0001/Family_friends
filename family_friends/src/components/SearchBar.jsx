import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
  return (
    <div className="text-black flex gap-3 p-3 m-3 pt-0 ">
      <div className="text-2xl bg-[#F2968F] p-4 rounded-full text-white justify-center items-center flex rotate-90">
        <FiSearch size={25} />
      </div>
      <input
        className="w-full p-3 border-2 rounded-[30px] text-gray-400 border-[#CACACD] text-lg"
        type="text"
        placeholder="search breeds"
      />
    </div>
  );
};

export default Searchbar;

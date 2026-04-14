import Description from "../components/Description";
import DogPicture from "../components/DogPicture";
import FactBtn from "../components/FactBtn";

export default function Page() {
  return (
    <div className="flex flex-col flex-1 bg-white">
      <DogPicture />
      <FactBtn />
      <Description />
    </div>
  );
}

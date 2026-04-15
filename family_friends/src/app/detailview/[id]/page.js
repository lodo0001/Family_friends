import FactBtn from "@/components/FactBtn";
import Description from "@/components/Description";
import DogPicture from "@/components/DogPicture";

export default function Page() {
  return (
    <div className="flex flex-col flex-1 bg-white">
      <DogPicture />
      <FactBtn />
      <Description />
    </div>
  );
}

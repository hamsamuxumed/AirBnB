import Image from "next/image";

export const SmartCard = ({ img, location, distance }) => {
  return (
    <div className=" items-center space-x-4 flex transition transform duration-200 ease-out cursor-pointer hover:bg-gray-200 rounded-xl hover:scale-105">
      <div className=" relative h-16 w-16 m-3 p-2  items-center ">
        <Image
          className="rounded-lg"
          src={img}
          layout="fill"
          objectPosition="left"
          objectFit="a"
        />
      </div>
      <div>
        <h2>{location}</h2>
        <p className=" text-gray-500 text-sm">{distance}</p>
      </div>
    </div>
  );
};

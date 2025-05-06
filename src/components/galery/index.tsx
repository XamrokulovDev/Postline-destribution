import { GaleryInfo } from "../../../data/galery";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import Image from "next/image";

const Galery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const mainImage = GaleryInfo[currentIndex].image;

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? GaleryInfo.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === GaleryInfo.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div id="delivery" className="bg-[#F7F7F7] py-20">
      <div className="container flex flex-col gap-6">
        

        <div className="flex items-center justify-between gap-10 max-xl:flex-col">
          {/* Left Text Section */}
          <div className="w-[50%] max-xl:w-full flex flex-col gap-10">
            <h1 
              className="text-5xl max-xl:text-2xl text-[#333] text-start max-xl:text-center"
              title="Выгодная логистика"
            >
              {"Выгодная логистика"}
            </h1>
            <p className="text-lg text-[#333]">
              Мы организовываем оперативную доставку продуктов питания по Ташкенту и Ташкентской области, основываясь на удобном для вас графике работы
            </p>

            <h3 className="text-[23px] text-[#333]">
              {"График поставок:"}
              <ul className="list-disc ml-5 mt-2">
                <li className="text-[18px] text-[#333]">
                  При оформлении заявки до 12:00 доставка осуществляется в этот же день.
                </li>
                <li className="text-[18px] text-[#333]">
                  При оформлении заявки с 12.00 до 21:00 доставка осуществляется на следующее утро.
                </li>
              </ul>
            </h3>
          </div>
          {/* Right Image Section */}
          <div className="w-[50%] max-xl:w-full flex flex-col gap-2">
            <div className="w-full h-[350px] rounded-xl relative">
              <button
                onClick={prevImage}
                className="h-full bg-transparent hover:bg-black text-gray-700 hover:text-white hover:opacity-20 absolute left-0 top-0 z-20 px-10"
              >
                <IoIosArrowBack size={35} />
              </button>
              <Image
                src={mainImage}
                alt="Main gallery"
                className="w-full h-full object-cover transition-all duration-300 rounded-3xl"
                width={700} 
                height={350} 
              />
              <button
                onClick={nextImage}
                className="h-full bg-transparent hover:bg-black text-gray-700 hover:text-white hover:opacity-20 absolute right-0 top-0 z-20 px-10"
              >
                <IoIosArrowForward size={35} />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-2 overflow-x-auto">
              {GaleryInfo.map((item, index) => (
                <div
                  key={item.id}
                  className={`h-24 rounded-3xl overflow-hidden cursor-pointer relative`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <Image
                    src={item.image}
                    alt={`Thumbnail ${item.id}`}
                    className="w-full h-full object-cover"
                    width={300}
                    height={200}
                  />
                  <div
                    className={`w-full h-full bg-white absolute top-0 left-0 z-20 ${
                      index === currentIndex ? "opacity-0" : "opacity-40"
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galery;
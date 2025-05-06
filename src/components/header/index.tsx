import Image from "next/image";
import MagneticButton from "../magnetic.button";

const Header = () => {
  return (
    <div id="home" className="bg-[#F2E6D8] relative overflow-hidden">
      <div className="container h-[750px] flex items-center justify-between max-xl:hidden max-xl:py-20">
        <div className="w-[55%] flex flex-col gap-5 absolute pt-5">
          <h1
            className="text-[55px] text-black font-normal leading-16"
            title="Продукты питания оптом для ресторанов и кафе"
          >
            Оптовые поставки <br /> продуктов для ресторанов, <br /> кафе и гостиниц
          </h1>
          <div className="flex items-center max-xl:flex-col gap-16">
            <p className="text-lg text-[#333333bc] font-normal">
              Осуществляем поставки <br /> продуктов питания оптом для <br /> всех сегментов HoReCa
            </p>
            <a href="#register-1">
              <MagneticButton />
            </a>
          </div>
        </div>
        <div className="w-[50%] z-0"></div>
        <div className="w-[43%] absolute bottom-[-1vw] right-[-1vw]">
          <Image
            src="https://res.cloudinary.com/dmgcfv5f4/image/upload/v1745586116/Screenshot_from_2025-04-25_17-59-27-Photoroom_zvqnj4.png"
            alt="Header Image"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Mobile view (media query) */}
      <div className="container h-full flex flex-col items-center justify-between gap-10 xl:hidden">
        <div className="flex flex-col gap-6 text-center pt-28">
          <h1
            className="text-[28px] text-black font-normal"
            title="Продукты питания оптом для ресторанов и кафе"
          >
            Оптовые поставки продуктов для ресторанов, кафе и гостиниц
          </h1>
          <p className="text-[15px] text-[#333333e4] font-normal">
            Осуществляем поставки продуктов питания оптом для всех сегментов HoReCa
          </p>
        </div>
        <Image
          src="https://res.cloudinary.com/dmgcfv5f4/image/upload/v1745417636/header-Photoroom_ifneic.png"
          alt="Header Image"
          width={600}
          height={400}
        />
        <a href="#register-1" className="pb-20">
          <MagneticButton />
        </a>
      </div>
    </div>
  );
};

export default Header;
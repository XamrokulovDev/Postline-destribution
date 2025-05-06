import { useEffect, useState } from "react";
import axios from "axios";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

// import _api 
import { _api } from "../../utils/_api";

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    phone: "",
    email: "",
    address: "",
    coordinates: [41.3066, 69.212],
  });

  useEffect(() => {
    axios
      .get(`https://food-story.onrender.com/api/contact`)
      .then((response) => {
        setContactInfo({
          phone: response.data.data.phone,
          email: response.data.data.email,
          address: response.data.data.address,
          coordinates: response.data.data.coordinates || [41.3066, 69.212],
        });
      })
      .catch((error) => {
        console.error("Error fetching contact data:", error);
      });
  }, []);

  return (
    <div id="contact" className="bg-white py-20">
      <div className="container flex items-center justify-between max-xl:flex-col gap-10">
        <div className="w-[30%] max-xl:w-full flex flex-col gap-6">
          <h1
            className="text-5xl max-xl:text-2xl text-[#333] text-start max-xl:text-center"
            title="Контактная информация"
          >
            Контактная информация
          </h1>
          <p className="text-[16px] text-[#333]">
            Мы предлагаем большой выбор продуктов питания по оптовым и розничным ценам! от магазина до сети — поставим быстро и выгодно!
          </p>
          <p className="text-[16px] text-[#333]">
            Гарантируем высокое качество реализуемой продукции и соблюдение сроков поставок благодаря налаженной работе, сырьевой базе и тщательно подобранным производителям, и поставщикам продуктов.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <a href={`tel:${contactInfo.phone}`} target="_blank" className="flex items-center gap-3">
              <BsFillTelephoneFill size={19} className="text-[#045E33]" />
              <p className="text-[16px] text-[#333]">{contactInfo.phone}</p>
            </a>
            <a href="https://www.instagram.com/postlinedistribuz" target="_blank" className="flex items-center gap-3">
              <AiFillInstagram size={20} className="text-[#045E33]" />
              <p className="text-[16px] text-[#333]">Postlinedistribuz</p>
            </a>
            <a href="https://t.me/postlinedistribuz" target="_blank" className="flex items-center gap-3">
              <FaTelegramPlane size={20} className="text-[#045E33]" />
              <p className="text-[16px] text-[#333]">Postlinedistribuz</p>
            </a>
            <a href={`mailto:${contactInfo.email}`} target="_blank" className="flex items-center capitalize gap-3">
              <MdEmail size={20} className="text-[#045E33]" />
              <p className="text-[16px] text-[#333]">{contactInfo.email}</p>
            </a>
            <a href={`https://www.google.com/maps/search/?api=1&query=${contactInfo.address}`} title={contactInfo.address} target="_blank" className="flex items-center gap-3">
              <FaLocationDot size={19} className="text-[#045E33]" />
              <p className="text-[15px] text-[#333]">{contactInfo.address}</p>
            </a>
          </div>
        </div>

        <div className="w-[60%] h-[500px] max-xl:w-full rounded-3xl shadow-2xl p-2">
          <YMaps>
            <Map
              defaultState={{ center: contactInfo.coordinates, zoom: 12 }}
              width="100%"
              height="100%"
            >
              <Placemark geometry={contactInfo.coordinates} />
            </Map>
          </YMaps>
        </div>
      </div>
    </div>
  );
};

export default Contact;
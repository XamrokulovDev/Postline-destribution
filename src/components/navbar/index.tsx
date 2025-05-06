import { useEffect, useState } from "react";
import { NavbarInfo } from "../../../data/navbar";
import { SlMenu } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import ModalRegister from "../register.modal"; 

// import _api 
import { _api } from "../../utils/_api";
import axios from "axios";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Navbar = () => {
  const logo =
    "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1745406972/logo_xynehi.png";
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    phone: "",
    email: "",
  });

  useEffect(() => {
    axios
      .get(`${_api}/contact`)
      .then((response) => {
        setContactInfo({
          phone: response.data.data.phone,
          email: response.data.data.email,
        });
      })
      .catch((error) => {
        console.error("Error fetching contact data:", error);
      });

    if (
      window.location.hash === '#about' ||
      window.location.hash === '#product' || 
      window.location.hash === '#delivery' ||
      window.location.hash === '#contact' || 
      window.location.hash === '#register-1' ||
      window.location.hash === '#register-2'
    ) {
      window.location.hash = '#home';
      document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); 
    }
  }, []);

  return (
    <>
      {/* Modal */}
      <ModalRegister isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      
      {/* Desktop Navbar */}
      <nav className="max-xl:hidden w-full bg-[#ffffffe0] backdrop-blur-md fixed top-0 left-0 py-3 z-50">
        <div className="container flex justify-between items-center">
          <a href="#home" className="w-[150px]">
            <img src="https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746112890/post2_dplcbi.png" alt="product image for navbar" />
          </a>
          <ul className="flex items-center gap-16 max-2xl:gap-8">
            {NavbarInfo.map((item) => (
              <li
                key={item.id}
                className="font-medium text-[15px] hover:text-[#045E33] transition-all duration-200"
              >
                <a href={item.href}>{item.title}</a>
              </li>
            ))}
          </ul>
          <button 
            onClick={() => setModalOpen(true)}
            className="bg-[#045E33] text-[15px] text-[#ffffffed] uppercase rounded-lg cursor-pointer shadow-lg shadow-[#00800043] hover:translate-y-[-6px] hover:bg-[#054f2b] transition-all duration-200 px-8 py-[8px]"
          >
            Заказать звонок
          </button>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="xl:hidden w-full bg-[#fffffff9] backdrop-blur-md fixed top-0 left-0 py-3 z-50 max-sm:px-5">
        <div className="container flex justify-between items-center">
          <a href="#home" className="w-[90px]">
            <img src="https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746112890/post2_dplcbi.png" alt="product image for navbar" />
          </a>
          <div className="mt-2" onClick={() => setMenuOpen(true)}>
            <SlMenu size={30} className="cursor-pointer" aria-label="Open Menu" />
          </div>
        </div>

        {/* Sidebar Menu */}
        <div
          className={`w-full h-screen bg-white fixed top-0 ${
            menuOpen ? "right-0" : "right-full"
          } transition-all duration-500 ease-in-out z-40`}
        >
          <div className="w-full h-screen relative shadow-xl py-20 max-sm:px-5">
            <IoClose
              size={23}
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-3 cursor-pointer text-[#333]"
              aria-label="Close Menu"
            />
            <div className="container">
              <div className="w-[150px]">
                <img src="https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746112890/post2_dplcbi.png" alt="product image for navbar" />
              </div>
              <ul className="flex flex-col gap-5 mt-10 border-b-[2px] border-gray-300 pb-5">
                {NavbarInfo.map((item) => (
                  <li
                    key={item.id}
                    className="text-[17px] hover:text-[#045E33] transition-all duration-200"
                  >
                    <a 
                      href={item.href} 
                      onClick={() => setMenuOpen(false)}
                      className="text-[#333]"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
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
                <a href={`mailto:${contactInfo.email}`} className="flex items-center capitalize gap-3">
                  <MdEmail size={20} className="text-[#045E33]" />
                  <p className="text-[16px] text-[#333]">{contactInfo.email}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import ModalError from "../error.modal"; 
import axios from "axios";
import ThankYouModal from "../thank";

// import _api 
import { _api } from "../../utils/_api";

interface ModalRegisterProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalRegister = ({ isOpen, onClose }: ModalRegisterProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isError, setIsError] = useState(false); 
  const [isSuccess, setIsSuccess] = useState(false); 
  const [isLoading, setIsLoading] = useState(false); 

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.phone || !formData.email || !formData.name) {
      setIsError(true); 
    } else {
      setIsError(false);
      setIsLoading(true); 

      const phoneRegex = /^\+998\d{9}$/;

      if (!phoneRegex.test(formData.phone)) {
        setIsError(true); 
        setIsLoading(false);
        return;
      }

      try {
        const response = await axios.post(`${_api}/contact-us`, {
          name: formData.name,
          email: formData.email,
          phone: formData.phone, 
        });

        if (response.data.success) {
          setIsSuccess(true);
          setTimeout(() => {
            setIsSuccess(false);
            setFormData({ name: "", email: "", phone: "" }); 
            onClose(); 
          }, 2000); 
        } else {
          setIsError(true);
        }
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false); 
      }
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isError && <ModalError onClose={() => setIsError(false)} />} 
      {isSuccess && <ThankYouModal visible={isSuccess} />} 

      <div
        className="w-screen h-screen fixed top-0 left-0 z-[99] bg-[#00000095]"
        onClick={handleOverlayClick} 
      >
        <div
          className="w-[600px] max-sm:w-full bg-white mt-16 absolute top-0 left-[50%] translate-x-[-50%] rounded-lg pb-8"
          onClick={(e) => e.stopPropagation()} 
        >
          <IoClose
            className="text-gray-400 text-xl cursor-pointer absolute top-3 right-3"
            onClick={onClose} 
            title="Закрыть"
          />

          <h1
            title="Оставьте заявку"
            className="text-[30px] font-medium text-[#333] text-center py-5 border-b-1 border-gray-300"
          >
            Оставьте заявку
          </h1>

          <p className="text-[17px] font-medium text-[#333333d5] text-center py-5">
            Менеджер свяжется с вами в ближайшее время
          </p>

          <form
            onSubmit={handleSubmit} 
            className="flex flex-col gap-8 px-[50px] mt-2"
          >
            <div className="relative bg-[#EDEDED]">
              <input
                type="text"
                placeholder=" "
                id="name"
                aria-label="Имя"
                className="w-full focus:border-[#BDBDBD] outline-none p-4 peer"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <label
                htmlFor="name"
                className="absolute left-5 peer-focus:left-0 top-[30%] peer-focus:top-[10%] font-medium peer-focus:text-gray-500 text-[#1E1E1E] transition-all duration-200 origin-top-left peer-focus:translate-y-[-2rem] peer-placeholder-shown:translate-y-0 peer-not-placeholder-shown:translate-y-[-2.8rem] peer-not-placeholder-shown:left-0 peer-not-placeholder-shown:text-gray-500 peer-placeholder-shown:scale-100"
              >
                Имя
              </label>
            </div>

            <div className="relative bg-[#EDEDED]">
              <input
                type="text"
                placeholder=" "
                id="email"
                aria-label="Электронная почта"
                className="w-full focus:border-[#BDBDBD] outline-none p-4 peer"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <label
                htmlFor="email"
                className="absolute left-5 peer-focus:left-0 top-[30%] peer-focus:top-[10%] font-medium peer-focus:text-gray-500 text-[#1E1E1E] transition-all duration-200 origin-top-left peer-focus:translate-y-[-2rem] peer-placeholder-shown:translate-y-0 peer-not-placeholder-shown:translate-y-[-2.8rem] peer-not-placeholder-shown:left-0 peer-not-placeholder-shown:text-gray-500 peer-placeholder-shown:scale-100"
              >
                Электронная почта
              </label>
            </div>

            <div className="relative bg-[#EDEDED]">
              <input
                type="text"
                placeholder=" "
                id="phoneNumber"
                aria-label="Номер телефона"
                className="w-full focus:border-[#BDBDBD] outline-none p-4 peer"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <label
                htmlFor="phoneNumber"
                className="absolute left-5 peer-focus:left-0 top-[30%] peer-focus:top-[10%] font-medium peer-focus:text-gray-500 text-[#1E1E1E] transition-all duration-200 origin-top-left peer-focus:translate-y-[-2rem] peer-placeholder-shown:translate-y-0 peer-not-placeholder-shown:translate-y-[-2.8rem] peer-not-placeholder-shown:left-0 peer-not-placeholder-shown:text-gray-500 peer-placeholder-shown:scale-100"
              >
                Номер телефона *
              </label>
            </div>

            <button
              type="submit" 
              className="w-full bg-[#045E33] text-[16px] text-[#ebebebed] uppercase rounded-md cursor-pointer shadow-lg shadow-[#00800043] hover:translate-y-[-4px] hover:bg-[#054f2b] transition-all duration-200 py-3"
              disabled={isLoading} 
            >
              {isLoading ? "Отправка..." : "Отправить"}
            </button>
          </form>

          <p className="text-[14px] text-[#333333d5] text-center mt-2">
            Нажимая кнопку, вы даете согласие на{" "}
            <a href="" className="underline">
              обработку персональных данных
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default ModalRegister;
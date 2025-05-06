import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavbarInfo } from '../../../data/navbar';
import ModalError from '../error.modal/footer';
import { submitPhone, setPhone, clearStatus } from '../../store/callme';
import type { RootState, AppDispatch } from '../../store'; 
import ThankYouModal from '../thank';

const Footer = () => {
  const dispatch = useDispatch<AppDispatch>(); 
  const { phone, loading, error } = useSelector((state: RootState) => state.phone);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const [thankYouVisible, setThankYouVisible] = useState(false);
  
  useEffect(() => {
    return () => {
      dispatch(clearStatus());
    };
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      console.log("Xatolik yuz berdi:", error);
      setModalMessage(error);
      setIsModalOpen(true);
    }
  }, [error]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPhone(e.target.value));
  };

  const validatePhone = () => {
    const phonePattern = /^\+998\d{9}$/;
    if (!phone || !phone.match(phonePattern)) {
      setModalMessage("Поле «Номер телефона» обязательно для заполнения и должно быть в формате +998901427141.");
      setIsModalOpen(true);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validatePhone()) {
      await dispatch(submitPhone(phone));
      setThankYouVisible(true);
      setTimeout(() => {
        setThankYouVisible(false);
      }, 2000);
      dispatch(setPhone(''));
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    dispatch(clearStatus());
  };

  return (
    <div className="bg-[#000000] py-20">
      {isModalOpen && <ModalError message={modalMessage!} onClose={handleCloseModal} />}
      <ThankYouModal visible={thankYouVisible} />
      <div className="container flex justify-between items-center max-xl:flex-col gap-10">
        {/* Logo + Company Info */}
        <div className="max-xl:w-full flex xl:justify-start flex-col max-xl:items-center gap-4">
          <a href={"#"} className="w-[250px]">
            <img src="https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746112877/post_blm0ie.png" alt="" />
          </a>
          <p className="text-white xl:w-[200px] text-[13.5px] max-xl:items-center">
            Надежный оптовый поставщик продуктов питания в рестораны и кафе
          </p>
          <div>
            <h1 className="text-[#979797] text-[15px]">OOO POST LINE</h1>
            <h1 className="text-[#979797] text-[15px]">ИНН 311672203</h1>
          </div>
        </div>

        {/* Menu */}
        <div className="max-xl:w-full flex justify-center flex-col max-xl:items-center max-xl:text-center xl:mt-16 gap-3">
          <h1 className="text-[#979797] text-lg">Меню</h1>
          <ul className="flex flex-col gap-3">
            {NavbarInfo?.length ? (
              NavbarInfo.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="text-white">
                    {item.title}
                  </a>
                </li>
              ))
            ) : (
              <p className="text-white">Menu items are unavailable at the moment.</p>
            )}
          </ul>
        </div>

        {/* Consultation Form */}
        <div className="max-md:w-full flex flex-col justify-center items-center xl:mt-16">
          <h1 className="text-[#979797] text-lg xl:text-xl mb-8">Бесплатная консультация</h1>
          <form onSubmit={handleSubmit} className="w-sm max-sm:w-md max-md:w-md max-sm:px-20 max-xl:w-md flex flex-col gap-5">
            <div className="relative bg-[#BDBDBD]">
              <input
                type="text"
                placeholder=" "
                id="phoneNumber"
                aria-label="Номер телефона"
                className="w-full border-b-1 border-gray-400 focus:border-[#BDBDBD] outline-none py-4 p-3 peer"
                value={phone}
                onChange={handlePhoneChange}
                disabled={loading}
              />
              <label
                htmlFor="phoneNumber"
                className="absolute left-5 peer-focus:left-0 top-[30%] peer-focus:top-[10%] font-medium peer-focus:text-gray-500 text-[#1E1E1E] transition-all duration-200 origin-top-left peer-focus:translate-y-[-2rem] peer-placeholder-shown:translate-y-0 peer-not-placeholder-shown:translate-y-[-2.8rem] peer-not-placeholder-shown:left-0 peer-not-placeholder-shown:text-gray-500"
              >
                Номер телефона *
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#045E33] text-[15px] text-[#ffffffed] uppercase rounded-lg cursor-pointer shadow-lg shadow-[#00800043] hover:translate-y-[-6px] hover:bg-[#054f2b] transition-all duration-200 px-8 py-3 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? "Отправка..." : "Заказать обратный звонок"}
            </button>
            <p className="text-white text-center text-sm">
              Нажимая кнопку, вы даете согласие на{" "}
              <a href="#" className="underline">
                обработку персональных данных
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
import { useState } from "react";
import axios from "axios";
import ModalError from "../error.modal";
import ThankYouModal from "../thank";

// import _api 
import { _api } from "../../utils/_api";

interface FormComponentsProps {
  formId: string;
}

const FormComponents: React.FC<FormComponentsProps> = ({ formId }) => {
  const nameId = `${formId}-name`;
  const phoneId = `${formId}-phone`;
  const emailId = `${formId}-email`;
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    region: "",
  });
  const [loading, setLoading] = useState(false); 
  const [showThankYouModal, setShowThankYouModal] = useState(false);

  const phoneRegex = /^\+998\d{9}$/;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!formData.phone || !formData.email || !formData.region) {
      setShowModal(true); 
      return;
    }
  
    if (!phoneRegex.test(formData.phone)) {
      setShowModal(true); 
      return;
    }
  
    setLoading(true); 
  
    try {
      const response = await axios.post(`https://food-story.onrender.com/api/price-request`, formData);
      
      if (response.data.success) {
        console.log("Form submitted successfully:", response.data);
        setShowThankYouModal(true); 
        
        setFormData({ name: "", phone: "", email: "", region: "" }); 
  
        const radioButtons = document.querySelectorAll('input[name="region"]') as NodeListOf<HTMLInputElement>;
        radioButtons.forEach(button => button.checked = false);
  
        setTimeout(() => {
          setShowThankYouModal(false);
        }, 2000); 
      } else {
        setShowModal(true);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      setShowModal(true); 
    } finally {
      setLoading(false);
    }
  };  

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="w-2xl max-xl:w-full bg-white rounded-[25px] shadow-2xl p-16 max-xl:p-10">
      <div className="flex flex-col gap-6">
        <h1 className="text-5xl max-xl:text-2xl text-[#333] text-center" title="Оставьте заявку на обратную связь">
          Оставьте заявку на обратную связь
        </h1>
        <p className="text-[17px] max-xl:text-[16px] text-[#333] text-center">
          Отправьте запрос на полный каталог продукции с оптовыми ценами на Ваш e-mail
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-10">
        {/* Имя */}
        <div className="relative">
          <input
            type="text"
            id={nameId}
            placeholder=" "
            className="peer w-full border-b-1 border-gray-300 focus:border-green-800 outline-none pt-2 pb-2 text-base"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <label
            htmlFor={nameId}
            className="absolute left-0 top-1/2 -translate-y-1 text-gray-500 text-base transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-2 peer-focus:top-[-14px] peer-focus:-translate-y-0 peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-4"
          >
            Имя
          </label>
        </div>

        {/* Телефон */}
        <div className="relative">
          <input
            type="text"
            id={phoneId}
            placeholder=" "
            className="peer w-full border-b-1 border-gray-300 focus:border-green-800 outline-none pt-2 pb-2 text-base"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
          <label
            htmlFor={phoneId}
            className="absolute left-0 top-1/2 -translate-y-1 text-gray-500 text-base transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-2 peer-focus:top-[-14px] peer-focus:-translate-y-0 peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-4"
          >
            Номер телефона *
          </label>
        </div>

        {/* Email */}
        <div className="relative">
          <input
            type="email"
            id={emailId}
            placeholder=" "
            className="peer w-full border-b-1 border-gray-300 focus:border-green-800 outline-none pt-2 pb-2 text-base"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <label
            htmlFor={emailId}
            className="absolute left-0 top-1/2 -translate-y-1 text-gray-500 text-base transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-2 peer-focus:top-[-14px] peer-focus:-translate-y-0 peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-4"
          >
            Электронная почта *
          </label>
        </div>

        {/* Регион */}
        <label className="text-sm text-gray-500">Выберите регион *</label>
        <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-4">
          {[
            { id: "olmazor", label: "Алмазарский район" },
            { id: "bektemir", label: "Бектемирский район" },
            { id: "mirobod", label: "Мирабадский район" },
            { id: "mirzo-ulugbek", label: "Мирзо-Улугбекский район" },
            { id: "sergeli", label: "Сергелийский район" },
            { id: "chilonzor", label: "Чиланзарский район" },
            { id: "shayxontoxur", label: "Шайхантаурский район" },
            { id: "yunusobod", label: "Юнусабадский район" },
            { id: "yakkasaroy", label: "Яккасарайский район" },
            { id: "yashnabod", label: "Яшнабадский район" },
            { id: "uchtepa", label: "Учтепинский район" },
            { id: "tashkent", label: "Ташкентская область" },
          ].map(({ id, label }) => (
            <div key={id} className="flex items-center">
              <input
                type="radio"
                id={`${formId}-${id}`} 
                value={label}
                name="region"
                className="mr-2 w-6 h-6 border-2 border-red-600 peer-checked:bg-green-800 cursor-pointer"
                onChange={(e) => setFormData({ ...formData, region: e.target.value })} 
              />
              <label htmlFor={`${formId}-${id}`} className="text-sm text-gray-500">{label}</label>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button 
          type="submit"
          className="w-full bg-[#045E33] text-[15px] text-[#ffffffed] uppercase rounded-lg cursor-pointer shadow-lg shadow-[#00800043] hover:translate-y-[-6px] hover:bg-[#054f2b] transition-all duration-200 px-8 py-5"
          disabled={loading} 
        >
          {loading ? "Отправка..." : "Получить прайс-лист"}
        </button>

        <p className="text-sm">
          Нажимая кнопку, вы даете согласие на <a href="#" className="underline">обработку персональных данных</a>
        </p>
      </form>

      {/* Error Modal */}
      {showModal && <ModalError onClose={handleCloseModal} />}

      {/* Thank You Modal */}
      {showThankYouModal && <ThankYouModal visible={showThankYouModal} />}
    </div>
  );
};

export default FormComponents;
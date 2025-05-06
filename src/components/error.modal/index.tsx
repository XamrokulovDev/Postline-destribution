// import icons 
import { IoCloseOutline } from "react-icons/io5";

interface ModalErrorProps {
  message?: string;
  onClose: () => void;
}

const ModalError: React.FC<ModalErrorProps> = ({
  onClose,
}) => {
  return (
    <div className="fixed flex inset-0 items-center justify-center bg-[#000b] z-[999] max-sm:px-10">
      <div className="max-sm:w-full bg-[#F27474] text-white rounded-2xl shadow-lg relative flex flex-col items-start pt-20 gap-5 p-6">
        <button onClick={onClose} className="absolute top-[-50px] left-[50%] translate-x-[-50%] bg-white rounded-full border-[8px] border-[#F27474] p-1 text-5xl mb-4">
          <IoCloseOutline className="text-xl text-[#F27474]" size={70}/>
        </button>
        <h1 title={"Неправильно заполнены поля:"} className="text-3xl font-bold">Неправильно заполнены поля:</h1>
        <span className="font-medium text-[17px]">
          <p>Поле «Номер телефона» обязательно для заполнения.</p>
          <p>Поле «Выберите регион» обязательно для <br /> заполнения.</p>
          <p>Поле «Электронная почта» обязательно для заполнения.</p>
        </span>
        <button
          onClick={onClose}
          className="w-full bg-white text-[#404040db] font-semibold py-3 rounded-full hover:bg-gray-100 transition"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default ModalError;
"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";

export const ProductCard = ({ item, index }: { item: any; index: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 0.4,
        delay: index * 0.5,
        ease: "easeOut",
      }}
      className="flex flex-col gap-8"
    >
      <div
        onClick={handleOpenModal}
        className="product-card cursor-pointer flex flex-col items-center gap-4 text-center relative pb-24 p-5 min-h-[250px] max-md:min-h-[250px] bg-white rounded shadow"
      >
        {/* Title */}
        <h1
          title={item.title}
          className="text-[30px] max-xl:text-[20px] break-words overflow-hidden text-ellipsis line-clamp-1 w-full"
        >
          {item.title}
        </h1>

        {/* Description */}
        <p className="text-[15px] text-[#333] break-words overflow-hidden text-ellipsis line-clamp-3 w-full">
          {item.description}
        </p>

        {/* Image */}
        <div className="product-image w-[150px] h-[150px] absolute bottom-[-30%] z-20 rounded-full bg-white shadow-b-lg flex items-center justify-center">
          <Image
            src={item.image}
            alt={item.description || "Product image"}
            width={150}
            height={150}
            className="object-cover p-1 rounded-full"
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          className="w-screen h-screen bg-[#00000079] flex items-center justify-center fixed top-0 left-[50%] translate-x-[-50%] z-[555]"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{
            opacity: { duration: 0.1, ease: "easeInOut" },
            scale: { duration: 0.1, ease: "easeInOut" },
          }}
        >
          <RiCloseLargeFill
            className="absolute top-5 right-10 max-md:right-5 text-3xl text-white cursor-pointer"
            onClick={handleCloseModal}
            size={30}
            title="Close"
          />
          <div className="bg-[#E7D1A6] p-6 rounded-lg shadow-lg w-[80%] lg:h-[80%] max-md:w-full text-center overflow-y-auto">
            <div className="h-[50%] flex items-start justify-start max-xl:flex-col-reverse max-xl:gap-10 border-b border-[#412F26] mt-10 p-5">
              <span className="w-[50%] max-xl:w-full text-start flex flex-col gap-5">
                <h1
                  title={item.title}
                  className="text-6xl max-md:text-3xl max-xl:text-4xl text-[#412F26] break-words overflow-hidden text-ellipsis line-clamp-1 font-bold mb-2"
                >
                  {item.title}
                </h1>
                <p className="text-[#412F26] break-words overflow-hidden text-ellipsis line-clamp-3 max-xl:text-sm">{item.description}</p>
              </span>
              <Image
                src={item.image}
                alt={item.description || "Product image"}
                width={1200}
                height={1200}
                className="mx-auto w-[35%] max-h-full object-contain max-xl:w-[70%] max-md:w-full rounded"
              />
            </div>

            <div className="w-[40%] max-xl:w-full text-start flex flex-col items-start mt-10 gap-5">
              <h1
                title={item.title2}
                className="text-6xl max-md:text-3xl max-xl:text-4xl text-[#412F26] break-words overflow-hidden text-ellipsis line-clamp-1 font-bold mb-2"
              >
                {item.title2}
              </h1>
              <p className="text-[#412F26] break-words overflow-hidden text-ellipsis line-clamp-3 max-xl:text-sm">{item.description2}</p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};
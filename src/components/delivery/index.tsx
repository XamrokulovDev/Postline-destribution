// import delivery info 
import { DeliveryInfo } from "../../../data/delivery";

// import icons 
import { PiHamburgerThin } from "react-icons/pi";

// import animation
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const Delivery = () => {
  return (
    <div className="bg-white py-20">
      <div className="container flex flex-col gap-6">
        <h1
          className="text-5xl max-xl:text-2xl text-[#333] text-start max-xl:text-center"
          title="Организация поставок продуктов"
        >
          {"Организация поставок продуктов"}
        </h1>
      </div>
      <div className="container grid grid-cols-4 max-sm:grid-cols-1 max-xl:grid-cols-2 gap-10 pt-20">
        {
          DeliveryInfo?.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-[#F7F7F7] flex flex-col items-center justify-center rounded-lg gap-3 py-8 px-5"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true }}
            >
              <item.icon className={`text-4xl delivery-text-color-${item.id}`} />
              <h1 title={item.title} className="text-lg max-xl:text-sm text-[#333]">{item.title}</h1>
            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default Delivery;
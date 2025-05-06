import { BenefitsInfo } from "../../../data/benefits";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutPage1 = () => {
  return (
    <div className="container grid grid-cols-4 max-xl:grid-cols-2 max-sm:grid-cols-1 mt-10">
      {BenefitsInfo.map((item, index) => {
        const [ref, inView] = useInView({
          triggerOnce: true,
          threshold: 0.2,
        });

        return (
          <motion.div
            key={item.id}
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            className={`flex flex-col card-border card-border-${item.id} gap-3 border border-[#C0101E] items-start p-5`}
          >
            <h1
              title={item.title}
              className="text-[#C0101E] text-[24px] text-start leading-7 font-bold max-xl:text-[20px] backdrop-blur-md rounded-lg"
            >
              {item.title}
            </h1>
            <p className="text-white text-[16px] text-start leading-6 max-xl:text-[15px] backdrop-blur-md rounded-lg">
              {item.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AboutPage1;
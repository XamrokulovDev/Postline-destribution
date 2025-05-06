"use client"
import Head from "next/head"

interface ThankYouModalProps {
  visible: boolean
}

export default function ThankYouModal({ visible }: ThankYouModalProps) {
  if (!visible) return null

  return (
    <>
      <Head>
        <title>Спасибо за обращение | FoodStory</title>
      </Head>
      <div className="w-screen h-screen flex flex-col items-center justify-center min-h-screen bg-white text-center fixed top-0 left-0 z-[9999] px-4">
        <div className="">
          <div className="w-[450px] max-md:w-full">
            <img src="https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746112890/post2_dplcbi.png" alt="" />
          </div>
        </div>
        <h1 title="Спасибо за обращение!" className="text-3xl md:text-4xl font-bold text-gray-800 my-4">Спасибо за обращение!</h1>
        <p className="text-lg">В ближайшее время с Вами свяжется специалист и ответит на все вопросы!</p>
      </div>
    </>
  )
}
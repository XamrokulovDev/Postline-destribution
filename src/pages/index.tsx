// import components 
import Benefits from "@/components/benefits ";
import Contact from "@/components/contact";
import Delivery from "@/components/delivery";
import Footer from "@/components/footer";
import Form from "@/components/form";
import FormFooter from "@/components/form.footer";
import Galery from "@/components/galery";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Products from "@/components/products";
// import SwiperSlider from "@/components/swiper";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Benefits />
      <Products />
      <Form />
      <Delivery />
      <Galery />
      {/* <SwiperSlider /> */}
      <FormFooter />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home;
import FormComponents from "../form.components";

const FormFooter = () => {
  return (
    <div className="w-full bg-[url(../../public/bg.jpg)] bg-no-repeat bg-cover bg-right max-xl:py-16">
      <div id="register-2" className="container flex items-center justify-start max-xl:justify-center xl:py-20">
        <FormComponents formId="register-2"/>
      </div>
    </div>
  )
}

export default FormFooter;
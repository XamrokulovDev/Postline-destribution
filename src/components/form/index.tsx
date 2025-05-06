import FormComponents from "../form.components";

const Form = () => {
  return (
    <div className="w-full bg-[url(../../public/bg2.jpg)] bg-no-repeat bg-cover bg-right max-xl:py-16">
      <div
        id="register-1"
        className="container flex items-center justify-end max-xl:justify-center bg-register xl:py-20"
      >
        <FormComponents formId="register-1"/>
      </div>
    </div>
  );
};

export default Form;
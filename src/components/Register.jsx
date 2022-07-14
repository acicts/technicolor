import { useForm } from "react-hook-form";

const FormComponent = ({ name, label, optional, register }) => {
  return (
    <div className="flex flex-col my-5">
      <label className="text-xl font-[Poppins] text-gray-700 shadow-md">
        {label}
        {optional ? "" : <span className="text-red-500"> *</span>}
      </label>

      <input
        {...register(name, { required: !optional })}
        className="rounded-md border-gray-400 shadow-md h-10 border px-3 w-56 lg:w-auto outline-none focus:bg-gray-100"
      />
    </div>
  );
};

const Register = () => {
  const { register, handleSubmit } = useForm();
  return (
    <form
      action=""
      onSubmit={handleSubmit((data) => {
        let form = document.getElementById("registration-form");
        form.submit(data);
      })}
      method="post"
      id="register"
      className="mt-40 lg:w-[50rem] mx-auto "
    >
      <span className="section-title">Register Now</span>
      <div className="w-[95%] lg:w-full h-[45rem] lg:h-[50rem]  shadow-lg border-4 border-black px-10 lg:px-40 pt-5 form rounded-md">
        <FormComponent name="name" label="Full Name" register={register} />
        <FormComponent name="class" label="Class" register={register} />
        <FormComponent
          name="admission"
          label="Admission Number"
          register={register}
        />
        <FormComponent name="phone" label="Phone Number" register={register} />
        <FormComponent
          name="whatsapp"
          label="Whatsapp Number"
          register={register}
        />
        <FormComponent
          name="discord"
          label="Discord Username"
          optional
          register={register}
        />
        <input
          type="submit"
          value="Register"
          className="btn w-48 lg:w-80 h-16  bg-white lg:mt-10 outline-none"
        />
      </div>
    </form>
  );
};

export default Register;

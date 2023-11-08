import { useState } from "react";
import { useFormik } from "formik";
//
import Validation from "./validation/Validation";
const PersonalInformation = () => {
  const [showTitle, setShowTitle] = useState(false);
  const formik = useFormik({
    initialValues: {
      title: "",
      surname: "",
      firstname: "",
      middlename: "",
      gender: "",
      dob: "",
      email: "",
      phoneNumber: "",
      identificationNumber: "",
      identificationType: "",
      file: "",
      occupation: "",
      state: "",
     
    },
    validationSchema: Validation,
    onSubmit: (values) => {
      console.log("Form values:", values);
    },
  });
  const handleSubmit = () => {
    formik.handleSubmit();
    console.log(formik.values);
  };
  return (
    <div className="h-screen">
      <div></div>
      <div className="w-fit bg-gray-100 flex-col gap-8  items-center justify-center px-4 py-8">
        <div className="flex gap-4  ">
          <div className="flex flex-col">
            {!showTitle ? (
              <input
                onFocus={() => setShowTitle(true)}
                className="w-[24rem] py-3 px-4  border border-gray-300 border-solid"
                type="text"
                name="title"
                placeholder="Title"
              />
            ) : (
              <select
                name="title"
                onChange={formik.handleChange}
                defaultValue={formik.values.title}
                className=" w-[24rem] py-3 border border-gray-300 border-solid text-black px-4"
              >
                <option>Miss</option>
                <option>Master</option>
                <option>Mr</option>
                <option>Mrs</option>
                <option>Pastor</option>
                <option>Alaji</option>
                <option>Dr</option>
                <option>Prof</option>
                <option>Chief</option>
                <option>Rev</option>
              </select>
            )}
            {formik.errors.title && formik.touched.title && (
              <p className="text-[12px] capitalize text-[#ff3333]">
                {formik.errors.title}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <input
              className="py-3 w-[24rem] px-4 border border-gray-300 border-solid text-black"
              onChange={formik.handleChange}
              defaultValue={formik.values.surname}
              type="text"
              name="surname"
              placeholder="Surname"
            />
            {formik.errors.surname && formik.touched.surname && (
              <p className="text-[12px] capitalize text-[#ff3333]">
                {formik.errors.surname}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <input
              className="py-3 w-[24rem]  px-4 border border-gray-300 border-solid text-black"
              onChange={formik.handleChange}
              defaultValue={formik.values.firstname}
              type="text"
              name="firstname"
              placeholder="First name"
            />
            {formik.errors.firstname && formik.touched.firstname && (
              <p className="text-[12px] capitalize text-[#ff3333]">
                {formik.errors.firstname}
              </p>
            )}
          </div>
        </div>
        <div className="flex gap-4  mt-4">
          <div className="flex flex-col">
            <input
              className="py-3 w-[24rem] border border-gray-300 border-solid text-black px-4"
              defaultValue={formik.values.middlename}
              onChange={formik.handleChange}
              type="text"
              name="middlename"
              placeholder="middle name"
            />
            {formik.errors.middlename && formik.touched.middlename && (
              <p className="text-[12px] capitalize text-[#ff3333]">
                {formik.errors.middlename}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            {" "}
            <input
              className="py-3 w-[24rem] px-4 border border-gray-300 border-solid text-black"
              type="email"
              name="email"
              defaultValue={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Email"
            />
            {formik.errors.email && formik.touched.email && (
              <p className="text-[12px] capitalize text-[#ff3333]">
                {formik.errors.email}
              </p>
            )}
          </div>
         
          <div className="flex flex-col">
            <input
              className="py-3 w-[24rem] border border-gray-300 border-solid text-black px-4"
              defaultValue={formik.values.dob}
              onChange={formik.handleChange}
              type="text"
              name="dob"
              onBlur={(e) => (e.target.type = "text")}
              onFocus={(e) => (e.target.type = "date")}
              placeholder="Date of Birth"
            />
            {formik.errors.dob && formik.touched.dob && (
              <p className="text-[12px] capitalize text-[#ff3333]">
                {formik.errors.dob}
              </p>
            )}
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <div className="flex flex-col">
            <input
              className="py-3 w-[24rem] px-4 border border-gray-300 border-solid text-black"
              type="tel"
              name="phoneNumber"
              onChange={formik.handleChange}
              defaultValue={formik.values.phoneNumber}
              placeholder="+234 705 123 4567"
              min={11}
            />
            {formik.errors.phoneNumber && formik.touched.phoneNumber && (
              <p className="text-[12px] capitalize text-[#ff3333]">
                {formik.errors.phoneNumber}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <select
              className=" py-3 w-[24rem] px-4 border border-gray-300 border-solid text-black "
              onChange={formik.handleChange}
              defaultValue={formik.values.state}
              name="state"
            >
              <option>State</option>
              <option>Lagos</option>
              <option>Abuja</option>
              <option>Enugu</option>
              <option>Abia</option>
              <option>Adamawa</option>
              <option>Delta</option>
              <option>Edo</option>
              <option>other</option>
            </select>
            {formik.errors.state && formik.touched.state && (
              <p className="text-[12px] capitalize text-[#ff3333]">
                {formik.errors.state}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <select
              className="py-3 w-[24rem]  px-4 border border-gray-300 border-solid text-black"
              defaultValue={formik.values.gender}
              onChange={formik.handleChange}
              name="gender"
            >
              <option className="">Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            {formik.errors.gender && formik.touched.gender && (
              <p className="text-[12px] capitalize text-[#ff3333]">
                {formik.errors.gender}
              </p>
            )}
          </div>
        </div>
        <div className=" flex gap-4 mt-4">
          <div className="flex flex-col">
            <select
              className="py-3 w-[24rem] px-4 border border-gray-300 border-solid text-black"
              name="identificationType"
              onChange={formik.handleChange}
              defaultValue={formik.values.identificationType}
            >
              <option>Means of Identification</option>
              <option value="nin">NIN</option>
              <option value="passport">Passport</option>
              <option value="driving license">Driving License</option>
            </select>
            {formik.errors.identificationType &&
              formik.touched.identificationType && (
                <p className="text-[12px] capitalize text-[#ff3333]">
                  {formik.errors.identificationType}
                </p>
              )}
          </div>
          <div className="flex flex-col">
            {" "}
            <input
              className="py-3 w-[24rem] px-4 border border-gray-300 border-solid text-black"
              type="number"
              name="identificationNumber"
              defaultValue={formik.values.identificationNumber}
              onChange={formik.handleChange}
              placeholder="Identification Number"
            />
            {formik.errors.identificationNumber &&
              formik.touched.identificationNumber && (
                <p className="text-[12px] capitalize text-[#ff3333]">
                  {formik.errors.identificationNumber}
                </p>
              )}
          </div>
          <div className="flex flex-col">
            <input
              className="py-3 w-[24rem] px-4 border border-gray-300 border-solid text-black"
              type="text"
              onChange={formik.handleChange}
              defaultValue={formik.values.occupation}
              name="occupation"
              placeholder="Occupation"
            />
            {formik.errors.occupation && formik.touched.occupation && (
              <p className="text-[12px] capitalize text-[#ff3333]">
                {formik.errors.occupation}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col mt-4">
           <div className="flex relative flex-col">
           <label className=" flex justify-start" > Upload ID (Only PNG, JPG, JPEG, GIF) </label>
            <input
              type="file"
              accept=".png, .jpg, .jpeg, .gif"
             aria-label="Upload"
              className=" bg-slate-400 py-3 w-[24rem] px-4"
              onChange={formik.handleChange}
              defaultValue={formik.values.file}
              name="file"
            />
            {formik.errors.file && formik.touched.file && (
              <p className="text-[12px] capitalize text-[#ff3333]">
                {formik.errors.file}
              </p>
            )}
           </div>
          </div>
      </div>
      <div className="flex gap-6 mt-4 justify-end">
        {/* <button className=" bg-white px-[3rem] border border-solid border-red-700 text-red-700 py-[10px] rounded-sm">
          Cancel
        </button> */}
        <button
          type="submit"
          onClick={handleSubmit}
          className=" bg-red-700 px-[3rem] text-white py-[10px] rounded-sm"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PersonalInformation;

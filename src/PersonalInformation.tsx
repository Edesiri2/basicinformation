import { useState } from "react";
import { useFormik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileText } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Validation from './validation/Validation'
const PersonalInformation = (props:any) => {
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
      address: "",
      state:"",
      paymentFrequency:"",
      sumAssured:"",
      premium:"",

    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Validation
  })
  return (
    <div className="h-screen">
         <div>
      <section className="w-[100%]  px-6 pt-5 pb-8">
        <div className=" mx-auto">
          <div className="flex justify-between">
            <h1 className=" text-lg md:text-2xl text-red-800 font-medium md:font-bold">
              Whole Life Assurance
            </h1>
            <nav className="c-breadcrumb-1 -style-icons">
              <ol className="c-breadcrumb-1-inner flex items-center space-x-4">
                <li className="c-breadcrumb-1-item">
                  <a
                    href="https://custodianplc.com.ng"
                    className="c-breadcrumb-1-link flex bg-slate-300 items-center space-x-2 text-[#111111]  p-0 md:p-2 rounded"
                  >
                    <FontAwesomeIcon icon={faHome} color="#111" />
                  </a>
                </li>
                <li className="c-breadcrumb-1-item">
                  <a
                    href="#"
                    className="clippath bg-slate-300 text-sm py-2 px-8 flex items-center gap-2 space-x-2 text-[#111111]  p-2 "
                  >
                    <FontAwesomeIcon
                      className=" "
                      icon={faFileText}
                      color="#111111"
                    />
                    Life Insurance
                  </a>
                </li>
                <li className="c-breadcrumb-1-item">
                  <a
                    href="#"
                    className="clippath bg-[#900000] text-white text-sm py-2 px-8 "
                  >
                    Whole Life Assurance
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      </div>
      <div className="w-fit bg-gray-100 flex-col gap-8  items-center justify-center px-4 py-8">
        <div className="flex gap-4  ">
          <div className="flex flex-col">
            {!showTitle ? (
              <input
                onFocus={() => setShowTitle(true)}
                className="w-[24rem] py-3 px-4"
                type="text"
                name="title"
                placeholder="Title"
              />
            ) : (
              <select
                name="title"
                onChange={formik.handleChange}
                defaultValue={formik.values.title}
                className=" w-[24rem] py-3 text-gray-400 px-4"
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
              className="py-3 w-[24rem] px-4 text-gray-400"
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
              className="py-3 w-[24rem] px-4 text-gray-400"
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
              className="py-3 w-[24rem] text-gray-400 px-4"
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
          <div className="flex flex-col">
            <select
              className="py-3 w-[24rem] px-4 text-gray-400"
              defaultValue={formik.values.gender}
              onChange={formik.handleChange}
              name="gender"
            >
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            {formik.errors.gender && formik.touched.gender && (
              <p className="text-[12px] capitalize text-[#ff3333]">
                {formik.errors.gender}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            {" "}
            <input
              className="py-3 w-[24rem] px-4 text-gray-400"
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
        </div>
        <div className="flex gap-4 mt-4">
          <div className="flex flex-col">
            <input
              className="py-3 w-[24rem] px-4 text-gray-400"
              type="number"
              name="phoneNumber"
              onChange={formik.handleChange}
              defaultValue={formik.values.phoneNumber}
              placeholder="+234 xxx xxx xxxx"
            />
            {formik.errors.phoneNumber && formik.touched.phoneNumber && (
              <p className="text-[12px] capitalize text-[#ff3333]">
                {formik.errors.phoneNumber}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <select
              className=" py-3 w-[24rem] px-4 text-gray-400 "
              onChange={formik.handleChange}
              defaultValue={formik.values.state}
              name="state"
            >
              <option >State</option>
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
            <input
              className="py-3 w-[24rem] px-4 text-gray-400"
              type="text"
              onChange={formik.handleChange}
              defaultValue={formik.values.occupation}
              name="occupation"
              placeholder="Occupation"
            />
            {formik.errors.occupation && formik.touched.occupation && (
              <p className="text-[12px] capitalize text-[#ff3333]">{formik.errors.occupation}</p>
            )}
          </div>
        </div>
        <div className=" flex gap-4 mt-4">
          <div className="flex flex-col">
            <select
              className="py-3 w-[24rem] px-4 text-gray-400"
              name="identificationType"
              onChange={formik.handleChange}
              defaultValue={formik.values.identificationType}
            >
              <option>Identification Type</option>
              <option value="nin">NIN</option>
              <option value="passport">Passport</option>
              <option value ="driving license">Driving License</option>
             
            </select>
            {formik.errors.identificationType && formik.touched.identificationType && (
              <p className="text-[12px] capitalize text-[#ff3333]">
                {formik.errors.identificationType}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            {" "}
            <input
              className="py-3 w-[24rem] px-4 text-gray-400"
              type="number"
              name="identificationNumber"
              defaultValue={formik.values.identificationNumber}
              onChange={formik.handleChange}
              placeholder="Identification Number"
            />{formik.errors.identificationNumber && formik.touched.identificationNumber && (
              <p className="text-[12px] capitalize text-[#ff3333]">
                {formik.errors.identificationNumber}
              </p>
            )}
          </div>
         <div className="flex flex-col"><input type="file" className=" bg-slate-400 py-3 w-[24rem] px-4" />
         {formik.errors.file && formik.touched.file && (<p className="text-[12px] capitalize text-[#ff3333]">{formik.errors.file}</p>)}</div> 
        </div>
       
         
        <div className=" flex gap-4 mt-4">
          <div className="flex flex-col">
            <input
              className="py-3 w-[24rem] px-4 text-gray-400"
              name="sumAssured"
              onChange={formik.handleChange}
              defaultValue={formik.values.sumAssured}
              type="number"
              placeholder="Sum Assured"
             
            />
            {formik.errors.sumAssured && formik.touched.sumAssured && (
              <p className="text-[12px] capitalize text-[#ff3333]">
                {formik.errors.sumAssured}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <select
              className="py-3 w-[24rem] px-4 text-gray-400"
              name="paymentFrequency"
              onChange={formik.handleChange}
              defaultValue={formik.values.paymentFrequency}
            >
              <option>Payment Frequency</option>
              <option value="annually">Annually</option>
              <option value="monthly"></option>
              <option value ="quarterly"></option>
             
            </select>
            {formik.errors.paymentFrequency && formik.touched.paymentFrequency && (
              <p className="text-[12px] capitalize text-[#ff3333]">
                {formik.errors.paymentFrequency}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            {" "}
            <input
              className="py-3 w-[24rem] px-4 text-gray-400"
              type="number"
              name="premium"
              defaultValue={formik.values.premium}
              onChange={formik.handleChange}
              placeholder="Premium"
            />{formik.errors.premium && formik.touched.premium && (
              <p className="text-[12px] capitalize text-[#ff3333]">
                {formik.errors.premium}
              </p>
            )}
          </div>
        </div>
      
      </div>
      <div className="flex gap-6 mt-4 justify-end">
      <button onClick={props.handlePrev} className=" bg-red-700 px-[3rem] text-white py-[10px] rounded-sm">
          Prev
        </button>
        <button className=" bg-red-700 px-[3rem] text-white py-[10px] rounded-sm">
          Next
        </button>
      </div>
    </div>
  );
};

export default PersonalInformation;

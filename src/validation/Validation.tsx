import * as Yup from 'yup'

const validationSchema = Yup.object({
    title: Yup.string()
        .required('title is Required'),
    surname: Yup.string()
        .required('surname is Required'),
        middlename: Yup.string().required('middlename is Required'),
    firstname: Yup.string()
        .required('firstname is Required'),
    gender: Yup.string()
        .required('gender is Required'),
    dob: Yup.string()
        .required('dob is Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('email is Required'),
    phoneNumber: Yup.string()
        .required('phone number is Required').min(11).max(11),
        state: Yup.string().required('state is Required'),
    identificationNumber: Yup.string()
        .required('ID isRequired'),
    occupation: Yup.string().required("occupation is Required"),
    identificationType: Yup.string().required("identificationType is Required"),
    premium: Yup.string().required('premium Required'),
    sumAssured: Yup.string().required('sumAssured is Required'),
    paymentFrequency: Yup.string().required('paymentFrequency is Required'),
})


export default validationSchema
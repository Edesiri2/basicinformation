import * as Yup from 'yup'

const validationSchema = Yup.object({
    title: Yup.string()
        .required('Required'),
    surname: Yup.string()
        .required('Required'),
    firstname: Yup.string()
        .required('Required'),
    middlename: Yup.string()
        .required('Required'),
    gender: Yup.string()
        .required('Required'),
    dob: Yup.string()
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    phoneNumber: Yup.string()
        .required('Required'),
    identificationNumber: Yup.string()
        .required('Required'),
    identificationType: Yup.string(),
    file: Yup.string(),
    occupation: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
})

export default validationSchema
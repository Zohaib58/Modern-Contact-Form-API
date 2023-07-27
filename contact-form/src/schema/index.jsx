import * as Yup from "yup"

export const contactFormSchema = Yup.object({
    name: Yup.string().min(2, "Atleast two characters").max(20, "Less than 20 characters please").required('Name is required'),
    email: Yup.string().email().required('Email is required'),
    address: Yup.string().min(10, "Atleast 10 characters required").max(20, "Less than 20 characters please").required('Address is required'),
    phone: Yup.string().min(10, "Atleast 10 charcters required").max(20, "Less than 20 characters please").required('Phone is required')

})
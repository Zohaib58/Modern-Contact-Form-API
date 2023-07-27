import * as Yup from "yup"

export const contactFormSchema = Yup.object({
    name: Yup.string().min(2, "Atleast two characters").max(2000, "Less than 2000 characters please").required('Name is required'),
    email: Yup.string().email().required('Email is required'),
    address: Yup.string().min(10, "Atleast 10 characters required").max(2000, "Less than 2000 characters please").required('Address is required'),
    phone: Yup.string().min(10, "Atleast 10 charcters required").max(2000, "Less than 2000 characters please").required('Phone is required')

})
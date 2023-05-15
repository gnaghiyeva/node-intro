import * as yup from "yup"

export const FormValidation = yup.object().shape({
    productName:yup.string().min(5),
    brandName:yup.string().min(5),
    price:yup.number().required("required price").positive(),
    stockCount:yup.number().required("required price").positive()
})
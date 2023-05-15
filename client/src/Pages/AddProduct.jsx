import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { postProduct } from '../httprequests';
import { useFormik } from "formik"
import { FormValidation } from '../validation';
const AddProduct = () => {
    const [newProd, setNewProd] = useState({});
    const navigate = useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        postProduct(newProd)
        console.log(newProd)
        navigate('/')
    }

    function handleChange(e){
        setNewProd({...newProd,[e.target.name]:e.target.value})
    }
    const formik = useFormik({
        //2
        initialValues: {
            productName: "",
            brandName: "",
            price:"",
            imageURL:"",
            stockCount: "",
            isDiscounted:false
        },

        onSubmit: handleSubmit,
        validationSchema: FormValidation
    })
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
    <TextField name='productName' onChange={(e)=>handleChange(e)} id="standard-basic"  variant="standard" placeholder='productName' type='text' />
    <TextField name='brandName' onChange={(e)=>handleChange(e)} id="standard-basic"  variant="standard" placeholder='brandName' type='text'/>
    <TextField name='price' onChange={(e)=>handleChange(e)} id="standard-basic"  variant="standard" placeholder='price' type='number'/>
    <TextField name='stockCount' onChange={(e)=>handleChange(e)} id="standard-basic"  variant="standard" placeholder='stockCount' type='number'/>
    <TextField name='image' onChange={(e)=>handleChange(e)} id="standard-basic"  variant="standard" placeholder='image' type='text'/>
    
    <Button type='submit' variant='contained' color='success'>Add</Button>
</form>
  )
}

export default AddProduct
const baseURL = "http://localhost:5050";

//get all products
export const getAllProducts= async()=>{
    let globalData;
   await fetch(`${baseURL}/products`)
    .then(response => response.json())
    .then(data=>{
       globalData=data;
    })
    return globalData;
}

//get product by ID'

export const getProductByID = async(id)=>{
    let globalData;
   await fetch(`${baseURL}/products/${id}`)
   .then(response=>response.json())
   .then(data=>{
    globalData=data;
   })
   return globalData
}


//delete product by ID
export const deleteProductByID = async(id)=>{
    let globalData;
    await fetch(`${baseURL}/products/${id}`,{
        method:'DELETE',    
    }).then(data=>{
        globalData=data;
    })
    return globalData
     
}


//post Product
export const postProduct = async(category)=>{
    fetch(`${baseURL}/products`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(category),
    })
    }


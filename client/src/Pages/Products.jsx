import React, { useEffect, useRef, useState } from 'react'
import { Navbar } from '../Components/Navbar'
import { deleteProductByID, getAllProducts } from '../httprequests'
import { Card, Col, Row } from 'antd';
import { Button } from '@mui/material';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';


const Products = () => {
    const [products, setProducts] = useState();

    const storage = useRef([]);
    useEffect(()=>{
     getAllProducts().then(data=>{
      console.log(data)
      setProducts(data)
      storage.current = data
     })
    },[])

    function handleDelete(id){
        if(Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
           
            if (result.isConfirmed) {
                deleteProductByID(id)
                setProducts(products.filter((product)=>product.id!==id))
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })){
           
           }
    }
  return (
    <>
    

    <Navbar/>
     <h1 style={{textAlign:'center'}}>PRODUCTS</h1>
    <Row style={{ width: '80%', margin: '0 auto' }} gutter={[20, 30]}>

            {products && products.map((post) => (
                <Col key={post.id} className="gutter-row" span={6} xs={24} sm={24} md={12} lg={6}>
                    <Card style={{ height: '600px' }} hoverable key={post.id}
                        cover={<img alt="example" src={post.image} />}
                    >

                        <h3><i>Name:</i><Link to={`${post.id}`} >{post.productName}</Link></h3>
                        <h3><i>Price:</i> {post.brandName}</h3>
                        <h3><i>Price:</i> {post.price}</h3>
                        <p><i>stockCount:</i> {post.stockCount}</p>

                        {/* <p><b>ID:</b>{post.id}</p> */}
                        <Button onClick={()=>handleDelete(post.id)} variant='contained' >delete</Button>
                    </Card>

                </Col>

            ))}

        </Row>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.js"></script>
    </>
  )
}


export default Products
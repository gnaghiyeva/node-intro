import React, { useEffect, useState } from 'react'
import { getProductByID } from '../httprequests';
import { Link, useParams } from 'react-router-dom';
import { Card, Col, Row } from 'antd';
import { Button } from '@mui/material';

const ProductDetail = () => {
  const{id} = useParams();
  const [prod, setProd] = useState({})
  console.log(id)
  useEffect(()=>{
   getProductByID(id).then(res=>{
    setProd(res);
   })
  },[])
  return (
    <>
    <h1 style={{textAlign:'center'}}>Detail page of {prod.productName} </h1>
     <Row
    style={{ width: "80%", margin: "80px auto",display:'flex',justifyContent:'center' }}
    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
  >
    

    <Col className="gutter-row" span={6} xs={24} sm={24} md={12} lg={6}>
                    <Card style={{ height: '600px' }} hoverable key={prod.id}
                        cover={<img alt="example" src={prod.image} />}
                    >

                        <h3><i>Name:</i><Link to={`${prod.id}`} >{prod.productName}</Link></h3>
                        <h3><i>Price:</i> {prod.brandName}</h3>
                        <h3><i>Price:</i> {prod.price}</h3>
                        <p><i>stockCount:</i>{prod.stockCount}</p>

                        {/* <p><b>ID:</b>{post.id}</p> */}
                        <Button variant='contained'> <Link style={{color:'white', textDecoration:'none'}} to='/'>Go back</Link></Button>
                    </Card>

                </Col>
                </Row>
    </>
  )
}

export default ProductDetail
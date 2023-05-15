const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors') 

const app = express();
app.use(cors());
app.use(bodyParser());
const PORT = 5050; //3000 3001 5050 8080

let ID = undefined;


const fakeData=[
    {
        id:1,
        productName:"Iphone 13",
        brandName:"Apple",
        price:1800,
        stockCount:20,
        image:"https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_hero_09142021_inline.jpg.slideshow-xlarge_2x.jpg",
        isDiscounted:true
      },
      {
        id:2,
        productName:"Iphone 13",
        brandName:"Apple",
        price:1800,
        stockCount:20,
        image:"https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_hero_09142021_inline.jpg.slideshow-xlarge_2x.jpg",
        isDiscounted:true
      },
      {
        id:3,
        productName:"Iphone 13",
        brandName:"Apple",
        price:1800,
        stockCount:20,
        image:"https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_hero_09142021_inline.jpg.slideshow-xlarge_2x.jpg",
        isDiscounted:true
      },
      {
        id:4,
        productName:"Iphone 13",
        brandName:"Apple",
        price:1800,
        stockCount:20,
        image:"https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_hero_09142021_inline.jpg.slideshow-xlarge_2x.jpg",
        isDiscounted:true
      },
      {
        id:5,
        productName:"Iphone 13",
        brandName:"Apple",
        price:1800,
        stockCount:20,
        image:"https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_hero_09142021_inline.jpg.slideshow-xlarge_2x.jpg",
        isDiscounted:true
      }
 
];

if(fakeData.length==0){
  ID=1;
}
else{
  let maxID = fakeData.sort((a,b)=>b.id-a.id)[0].id;
  ID = ++maxID
}

//get all products
app.get('/products', (req, res) => {
    if(fakeData.length===0){
      res.status(204).send("no content")
      return
    }
    else{
      res.status(200).send(fakeData)
      return
    }
  })

  //get by ID
  app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    // const singleData = fakeData.find((data)=>data.id==id)
    const singleData = fakeData.find((data)=>data.id===parseInt(id))
   if(singleData===undefined){
      res.status(404).send("data not found 404")
      return
    }
    else{
      res.status(200).send(singleData)
      return
    }
  })

  //delete product by id
  app.delete('/products/:id',(req,res)=>{
    const id = req.params.id;
    const data = fakeData.find((data)=>data.id===parseInt(id));
    if(data===undefined){
      res.status(404).send("no such product");
      return
    }
    else{
      const idx = fakeData.indexOf(data)
      fakeData.splice(idx,1);
      console.log(fakeData)
      res.status(202).send('prduct deleted succesfully');
    }
  })

  app.post('/products',(req,res)=>{
    const newProduct = {
      id:ID,
      productName:req.body.productName,
      brandName:req.body.brandName,
      price:req.body.price,
      stockCount:req.body.stockCount,
      image:req.body.image,
      isDiscounted:req.body.isDiscounted,
    }
    fakeData.push(newProduct);
    ID++;
    res.status(201).send("data post succesful")
  console.log('request body',req.body);
  res.send("post test")
  })

  app.listen(PORT, () => {
    console.log(`first Node App running on port ${PORT}`)
  })
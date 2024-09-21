import React,{useState,useEffect, useRef} from 'react'
import { API_URL } from './api'
import { useParams } from 'react-router-dom';
import Topbar from './topbar';



const Productmenu = () => {
    const [products,setproducts] = useState([]);

    const {firmId,firmname} = useParams();


    const producthandler = async()=>{
      try {
        const response = await fetch(`${API_URL}/product/${firmId}/products`)
        const newproductdata = await response.json()
        setproducts(newproductdata.products);
        
      } catch (error) {
        console.error("products failed to fetch",error);
      }
    }

    useEffect(()=>{
      producthandler()
    },[])
    
    

  return (
    <>
    <Topbar />
      <section className="productsection">
        <h1>{firmname}</h1>
        {products.map((item)=>{
          return(
            <div className='productbox'>
              <div>
              <div><strong>{item.productname}</strong></div>
              <div>{item.price}</div>
              <div className='itemdescp'>
                {item.description}
                </div>
              </div>
              <div className='productgroup'>
                      <img src={`${API_URL}/uploads/${item.image}`} /> 
                      <div className='addbtn'>ADD</div>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Productmenu
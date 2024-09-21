import React,{useState,useEffect} from 'react'
import { API_URL } from './api'
import { IoIosArrowDropleftCircle,IoIosArrowDroprightCircle } from "react-icons/io";
import { ThreeCircles } from 'react-loader-spinner'


const Chains = () => {
    const [vendordata,setvendordata]  = useState([]);
    const [scrollposition,setscrollposition] = useState(0);
    const [loading,setloading] = useState(true)


    const vendorfirmhandler = async ()=>{

      try {
        const response = await fetch(`${API_URL}/vendor/all-vendors`)
        const newdata =await response.json()
        setvendordata(newdata);
        console.log("this is api data",newdata)
        setloading(false);
        
      } catch (error) {
        alert("failed to fetch data");
        console.error("failed to fetch data");
        setloading(true)
      }

    }

    useEffect(()=>{
      vendorfirmhandler()
    },[])


    const handlescroll = (direction) =>{
      const gallery = document.getElementById('chaingallery');
      const scrollamount = 500;

      if(direction === "left"){
        gallery.scrollTo({
          left:gallery.scrollLeft -scrollamount,
          behavior:"smooth"
        })
      }
      else if(direction === "right"){
        gallery.scrollTo({
          left:gallery.scrollLeft+scrollamount,
          behavior:"smooth"
        })
      }
    }

  return (
    <>
    <div className="loadersection">
    {loading && <>
      <div className='loader'>
      </div>
      <ThreeCircles
      visible={true}
      height="100"
      width="100"
      color="orangered"
      ariaLabel="three-circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      />
      </>

    }
    </div>
  <div className='chainstop'>
      <h2>Top restaurant chains in Hyderabad</h2>
      <div className="btnsection">
        <button onClick={()=>handlescroll("left")}><IoIosArrowDropleftCircle className='btnicon'/>
        </button>
        <button onClick={()=>handlescroll("right")}><IoIosArrowDroprightCircle className='btnicon'/>
        </button>
      </div>
  </div>
    <section className='chainsection' id='chaingallery' onScroll={(e)=>setscrollposition(e.target.scrollLeft)}>
      {vendordata.vendors && vendordata.vendors.map((vendor)=>{
        return(
          <>
            <div className="vendorbox">
          {vendor.firm.map((item)=>{
            return(
              <>
                <div className="firmimage">
                  <img src={`${API_URL}/uploads/${item.image}`}  />
                </div>
                <div className='firmdata'>
                  <strong>{item.firmname}</strong>
                  <div>{item.area}</div>
                </div>
              </>
            )
          })}
        </div>
          </>
        )
      })}
    </section>
    </>

  )
}

export default Chains
import React, { useCallback, useState } from 'react'
import { itemData } from './data'
import { IoIosArrowDropleftCircle,IoIosArrowDroprightCircle } from "react-icons/io";



const Itemsdisplay = () => {

    const [displayitem,setdisplayitem] = useState(itemData)
    const [scrollposition,setscrollposition] = useState(0);


    const handleScroll = (direction)=>{
        const gallery = document.getElementById('itemgallery');
        const scrollamount = 500;

        if(direction==="left")
        {
            gallery.scrollTo({
                left:gallery.scrollLeft-scrollamount,
                behavior:'smooth'
            })
        }else if(direction === "right"){
            gallery.scrollTo({
                left:gallery.scrollLeft+scrollamount,
                behavior:'smooth'
            })
        }
    }
    

  return (
    <>
    
    <div className='itemtop'>
        <h2>What's on your mind?</h2>
        <div className="btnsection">
        <button onClick={()=>handleScroll("left")}><IoIosArrowDropleftCircle className='btnicon'/></button>
        <button onClick={()=>handleScroll("right")}><IoIosArrowDroprightCircle className='btnicon'/></button>
        </div>
    </div>
    <div className="itemsection" id='itemgallery' onScroll={(e)=>setscrollposition(e.target.scrollLeft)}>
        {displayitem.map((item)=>{
            return(
                <div className="gallery">
                    <img src={item.item_img} alt={item.item_img}  />
                </div>
            )
        })}
    </div>
    </>
  )
}

export default Itemsdisplay
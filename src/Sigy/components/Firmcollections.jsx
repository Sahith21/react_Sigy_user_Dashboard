import React, { useState, useEffect } from 'react'
import { API_URL } from './api'
import { Link } from 'react-router-dom'
const Firmcollections = () => {
  const [firmdata, setfirmdata] = useState([])
  const [selectedregion, setselectedregion] = useState('All')
  const [activecategory,setactivecategory] = useState('all');

  const firmdatahandler = async () => {
    try {
      const response = await fetch(`${API_URL}/vendor/all-vendors`)
      const newfirmdata = await response.json()
      setfirmdata(newfirmdata.vendors)
      console.log("firmdata:", newfirmdata);
    } catch (error) {
      alert("firm data not fetched");
      console.error('firm data not fetched', error);
    }
  }

  useEffect(() => {
    firmdatahandler()
  }, [])

  const filterhandler = (region,category) => {
    setselectedregion(region);
    setactivecategory(category)
  };

  return (
    <>
      <h2>Restaurants with online food delivery in Hyderabad</h2>
      <div className="filterbutton">
        <button onClick={() => filterhandler("All",'all')} className={activecategory === 'all' ? 'activebutton': ''}>All</button>
        <button onClick={() => filterhandler("South-Indian",'south-indian')} className={activecategory === 'south-indian' ? 'activebutton': ''}>South-Indian</button>
        <button onClick={() => filterhandler("North-Indian",'north-indian')} className={activecategory === 'north-indian' ? 'activebutton': ''}>North-Indian</button>
        <button onClick={() => filterhandler("Chinese",'chinese')} className={activecategory === 'chinese' ? 'activebutton': ''}>Chinese</button>
        <button onClick={() => filterhandler("Bakery",'bakery')} className={activecategory === 'bakery' ? 'activebutton': ''}>Bakery</button>
      </div>
      <section className="firmsection">
        {firmdata.map((apple) => {

          return apple.firm.map((item) => {
            if (selectedregion === "All" || item.region.includes(selectedregion.toLocaleLowerCase())) {
              return (
                <Link to={`/products/${item._id}/${item.firmname}`} className='Link'>
                  <div className='firmgroupbox'>
                    <div className='firmgroup'>
                      <img src={`${API_URL}/uploads/${item.image}`} />
                      <div className="firmoffer">
                        {item.offer}
                      </div>
                    </div>
                    <div className='firmdetails'>
                      <strong>{item.firmname}</strong>
                      <div>{item.region.join(`, `)}</div>
                      <div>{item.area}</div>
                    </div>
                  </div>
                </Link>
              );
            }
          })

          return null;
        })}
      </section>
    </>
  );
};

export default Firmcollections
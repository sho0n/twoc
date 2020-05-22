import React, { useState, useEffect } from "react";



const Ads = () => {
  const [ads, setAds] = useState([]);

  // Get all ads

  async function getAds() {
    const res = await fetch("https://twoc-nv25lzr5wa-ew.a.run.app/posts");

    const adsArray = await res.json();

    setAds(adsArray);
  }

  useEffect(() => {
    getAds();
  }, []);



  return (


    <div className=''>
      {ads.map(ad => (




        <div key={ad.id} className="card">
          <h2>{ad.name}</h2>
          <p>{ad.vehicle_model}</p>
          <p>{ad.red_number}</p>
          <p>{ad.pick_up_address}</p>
          <p>{ad.drop_off_address}</p>
          <p>{ad.created_date}</p>
          <p>{ad.mobile_number}</p>
          <p>{ad.info}</p>
        </div>

      ))}

    </div>
  );
};

export default Ads;
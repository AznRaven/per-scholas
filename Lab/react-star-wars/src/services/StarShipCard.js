import { getData } from "./sw-api";
import React, { useEffect, useState } from 'react'

function StarShipCard() {
    let [starship, setStarship] = useState([])

    useEffect(() => { 
        async function starShipData() {
           const data = await getData()
           setStarship(data.results)
           console.log(data.results)
        } starShipData()

    }, [])
    // }
   console.log(starship)
  return (
    <div className="cardbox">
      {starship.map((item, index) => <p className="card" key={index}>{item.name}</p>)}
    </div>
  )
}

export default StarShipCard;

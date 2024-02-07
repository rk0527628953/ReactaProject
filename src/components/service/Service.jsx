import { observer } from "mobx-react"
import * as React from 'react';
import "./service.css"


const Service=(observer(({service})=>{

 

  return (
    <>
      
      <div className="grid-container-2"> 

      <div className="grid-item">
          <h5>מס' שירות:</h5>
          <p className="color-p">{service.id}</p>
        </div>

        <div className="grid-item ">
          <h5> שם:</h5>
          <p className="color-p">{service.name}</p>
        </div>

        <div className="grid-item ">
          <h5>תיאור השירות:</h5>
          <p className="color-p">{service.description}</p>
        </div>

        <div className="grid-item ">
          <h5>סכום:</h5>
          <p className="color-p"> {service.price}</p>
        </div>

        <div className="grid-item ">
          <h5>משך זמן:</h5>
          <p className="color-p">{service.duration}</p>
        </div>

      </div>


     
    
    </>
  )
}

))

export default Service

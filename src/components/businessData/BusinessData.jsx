import { observer } from "mobx-react"
import dataStore from "../../data/dataStore"
import { useEffect, useState } from "react";
import { getBusinessData } from "../../data/server";
import {  Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import EditBusinessData from "./EditBusinessData";
import "./BusinessData.css"
// import Fab from '@mui/material/Fab';
// import EditIcon from '@mui/icons-material/Edit';
import * as React from 'react';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import p from '../../images/p.png'



const BusinessData=(observer((props)=>{

  const { admin=true } = props;


const business=dataStore.businessData;
console.log(business)

useEffect(() => {
  getBusinessData()
}, [])


const[open,setOpen]=useState(false)

const handleOpenModal=()=>{
    setOpen(true);
}

const handleCloseModal=()=>{
  setOpen(false)
}
    return (
      <>
      <div className="blue"></div>
       <img src={p} className="image"></img>

        <div>{business?<div className="businessData">
          <div className="businessData_p">
          שם  :{business.name}
          <br/>
          <br/>
          כתובת  : {business.address}
          <br/>
          <br/>
          טלפון : {business.phone}
          <br/>
          <br/>
          בעלים  : {business.owner}
          <br/>
          <br/>
          
          תיאור  :{business.description}
          </div>
          <div className="logo">
          <h1 className="logo-title">rk</h1>
          <p className="logo-p">ליווי מקצועי לעסק שלך</p>
          </div>
          
        </div>
        
        
       
          
        :null}
          <>
        
          {admin &&
           <Fab color="#2acbd2" aria-label="edit"
           onClick={handleOpenModal}>
           <EditIcon />
           </Fab>}
          <br/>
          <br/>
          <Dialog open={open} onClose={handleCloseModal}>
              {/* <DialogTitle>Edit Business Details</DialogTitle> */}
              <DialogContent>
               {admin &&<EditBusinessData business={business} handleEdit={()=>setOpen(false)}></EditBusinessData>}
              </DialogContent>
              <DialogActions>
                <br/>
                <button variant="outlined" onClick={handleCloseModal}>ביטול</button>
              </DialogActions>
          </Dialog>
          </>
        {/* )} */}
        </div>
      </>
    )
  }

  ))
  
  export default BusinessData

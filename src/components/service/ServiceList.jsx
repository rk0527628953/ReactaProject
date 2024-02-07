import { observer } from "mobx-react"
import AddService from "./AddService"
import { useEffect, useState } from "react"
import dataStore from "../../data/dataStore"
import Service from "./Service"
import { getServices } from "../../data/server"
import {  Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import "./serviceList.css"
import * as React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';



const ServiceList= (observer((props)=>{

  const { admin=true } = props;
  const[addServiceForm,setAddServiceForm]=useState(false)

  useEffect(() => {
    getServices()
  }, [])

  

  const handleAddService=()=>{
      setAddServiceForm(true)
  }


  const[open,setOpen]=useState(false)

  const handleOpenModal=()=>{
      setOpen(true);
  }
  
  const handleCloseModal=()=>{
    setOpen(false)
  }
  


    return (
      <>
        
        <div>


         {admin&&
         <Fab color="rgb(30, 30, 74)" aria-label="add"
         onClick={handleOpenModal}>
         <AddIcon />
       </Fab>}
         <Dialog open={open} onClose={handleCloseModal}>
              {/* <DialogTitle>Edit Business Details</DialogTitle> */}
              <DialogContent>
              <AddService setAddServiceForm={setAddServiceForm} setOpen={setOpen}></AddService>
              </DialogContent>
              <DialogActions>
                <br/>
                <button variant="outlined" onClick={handleCloseModal}>ביטול</button>
              </DialogActions>
          </Dialog>

        </div>
       
        <div className="all-grid">
        <div className="grid-container">
        {dataStore.services.map((service,index)=>{
          return <Service key={index} service={service}></Service>
        })}
        </div>
        </div>


      </>
    )
  }))
  
  export default ServiceList

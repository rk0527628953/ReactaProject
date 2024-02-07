import { observer } from "mobx-react"
import { useState } from "react";
import { updateBusinessData } from "../../data/server";
import { Button, TextField} from "@mui/material";
import "./editBusinessData.css"


const EditBusinessData=(observer(({business,handleEdit})=>{

  const[editBusiness,setEditBusiness]=useState(business)

const handleFormSubmit=(e)=>{
  e.preventDefault();
  updateBusinessData(editBusiness).then(x=>{
    handleEdit();
  })


};

const handleInputChange=(e)=>{
  setEditBusiness({
    ...editBusiness,[e.target.name]: e.target.value,
  });

}


    return (
      <>
        
        <div>
          <form onSubmit={handleFormSubmit} className="edit-form">
            <TextField name="name" type='text' label="שם" variant="outlined" value={editBusiness.name} onChange={handleInputChange} margin="dense" className="edit"></TextField>
            <TextField name="address" type='text' label="כתובת" variant="outlined" value={editBusiness.address} onChange={handleInputChange} margin="dense" />
            <TextField name="phone" type='text' label="טלפון" variant="outlined" value={editBusiness.phone} onChange={handleInputChange} margin="dense" />
            <TextField name="owner" type='text' label="בעלים" variant="outlined" value={editBusiness.owner} onChange={handleInputChange} margin="dense" />
            <TextField name="description" type='text' label="תיאור" variant="outlined" value={editBusiness.description} onChange={handleInputChange} margin="dense" />
            <br/>
            <br/>
            <button  variant="outlined"type="submit">עדכון</button>
          </form>
        </div>
      </>
    )
  }))
  
  export default EditBusinessData

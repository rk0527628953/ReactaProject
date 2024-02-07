import { observer } from "mobx-react"
import { useState } from "react";
import { Button, TextField } from '@mui/material';
import { addService } from "../../data/server";


const AddService=(observer(({setAddServiceForm,setOpen})=>{

  const [name, setName] = useState('')
    const [price, setPrice] = useState('');
    const [id, setId] = useState('');
    const[description,setDescription]=useState('')
    const[duration,setDuration]=useState('')

    const handleAddService=()=>{
      addService(name, price,id,description,duration);
      setAddServiceForm(false);
      setOpen(false);
      
    }




    return (
      <>
        <TextField id="id" label="מס' שירות" variant="outlined" value={id} onChange={(e)=>setId(e.target.value)} />
            <br/>
            <br/>
            <TextField id="name" label="שם השירות" variant="outlined" value={name} onChange={(e)=>setName(e.target.value)} />
            <br/>
            <br/>
            <TextField id="description" label="תיאור השירות" variant="outlined" value={description} onChange={(e)=>setDescription(e.target.value)} />
            <br/>
            <br/>
            <TextField id="price" label="סכום" variant="outlined" value={price} onChange={(e)=>setPrice(e.target.value)} />
            <br/>
            <br/>
            <TextField id="duration" label="משך זמן" variant="outlined" value={duration} onChange={(e)=>setDuration(e.target.value)} />
            <br/>
            <br/>
            
            <Button variant="contained" onClick={handleAddService} >שמירת שירות</Button>
            <br/>  
      </>
    )
  }))

  
  export default AddService

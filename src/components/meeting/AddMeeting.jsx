import { useState } from "react";
import { addMeeting } from "../../data/server";
import dataStore from "../../data/dataStore";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { observer } from "mobx-react";
import "./addMeeting.css"


const AddMeeting = (observer(({setOpen}) => { 

  const [name, setName] = useState('');
  const [phon, setPhon] = useState('');
  const [email, setEmail] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [serviceName, setServiceName] = useState('');



  const handleAddMeeting=()=>{
    debugger
    addMeeting(name,phon,email,dateTime)
    setOpen(false);
  }





  const[errorDate,setErrorDate]=useState(false);


  const getCurrentDateTime = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  const handleForm=(e)=>{
    e.preventDefault();
    addMeeting(fromDataMeeting).then(()=>{
      if(dataStore.isMeeting===false)
      {
        setErrorDate(true);
        alert("bbbbb")
      }
      else{
        if(dataStore.isMeeting===true)
        {
          setErrorDate(false);
          ////////////////////////
          setFromDataMeeting({
            serviceName: '',
          dateTime: '',
          NameUser: '',
          Phone: '',
          Email: '',
          });
        }
      }
    })

  }

  const handleChange=(e)=>{
    setFromDataMeeting({...fromDataMeeting,[e.target.name]:e.target.value,});

  }

  const servicesNames = [];

  dataStore.services.forEach((s)=>{
      if(!servicesNames.includes(s.name)){
        servicesNames.push(s.name)
      }

  })
  

    return (
      <>
        
        <form onSubmit={handleForm} className="dialog-meeting">
         
        <FormControl fullWidth sx={{ mt: 1 }} margin="dense" >
        <InputLabel name="serviceName-label">סוג השירות</InputLabel>
        <Select
          labelId="serviceName-label"
          name="serviceName"
          value={serviceName}
          onChange={(e)=>setServiceName(e.target.value)}
          variant="outlined"
        >
        <MenuItem value=''>בחר שירות</MenuItem>
        {servicesNames?.map((option) => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
           </Select>
           </FormControl>
           <br/>
          <TextField  id="name" label="שם" variant="outlined" value={name} onChange={(e)=>setName(e.target.value)}></TextField>
          <br/>
          <TextField  fullWidth sx={{ mt:1}} type='datetime-local' name="dateTime"  variant="outlined" value={dateTime} onChange={(e)=>setDateTime(e.target.value)} margin="dense" 
            error={errorDate}
            helperText={errorDate&&'Busy date, schedule another date'} inputProps={{ min: getCurrentDateTime() }}/> 
          <br/>
          <TextField id="phon" label="טלפון" variant="outlined" value={phon} onChange={(e)=>setPhon(e.target.value)}></TextField>
          <br/>
          <TextField id="email" label="אימייל" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)}></TextField>
          <br/>
          <br/>
          <Button variant="contained" onClick={handleAddMeeting} >שמור</Button>




           
            

        </form>        
      </>
    )
  }))
  
  export default AddMeeting

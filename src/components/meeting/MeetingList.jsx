import { observer } from "mobx-react"
import { useEffect, useState } from "react"
import dataStore from "../../data/dataStore"
import { getMeetings } from "../../data/server"
import Meeting from "./Meeting"
import {  Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import AddMeeting from "./AddMeeting"


const MeetingList=(observer((props)=>{  

  const { admin=true } = props;
  

  useEffect(() => {
    getMeetings()
  }, [])


  const[open,setOpen]=useState(false);
  const[addMeetingForm,setAddMeetingForm]=useState(false);

  const handleOpenModal=()=>{
      setOpen(true);
  }

  const handleCloseModal=()=>{
    setOpen(false);
  }


  const getColor = (dateTime) => {
    const currentDate = new Date();
    const meetingDate = new Date(dateTime);
  
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    
    const meetingYear = meetingDate.getFullYear();
    const meetingMonth = meetingDate.getMonth();
    const meetingDay = meetingDate.getDate();
  
    const differenceInDays = Math.floor(
      (meetingDate - currentDate) / (1000 * 60 * 60 * 24)
    );
  
    if (currentYear === meetingYear && currentMonth === meetingMonth && currentDay === meetingDay) {
      return 'red';
    } else if (meetingDate < currentDate) {
      return 'red';
    } else if (differenceInDays <= 7) {
      return 'orange';
    } else {
      return 'green';
    }
  }

    return (
      <>
        
        <div>
          {!admin&&<button onClick={handleOpenModal}>לקביעת פגישה</button>}
          <Dialog open={open} onClose={handleCloseModal}>
          <DialogTitle>קביעת פגישה</DialogTitle>
          <DialogContent>
            <AddMeeting setAddMeetingForm={setAddMeetingForm} setOpen={setOpen}></AddMeeting>
          </DialogContent>
          <DialogActions>
          <button variant="outlined" onClick={handleCloseModal}>ביטול</button>
          </DialogActions>
          </Dialog>
        </div>

       

        <div className="all-grid">
        <div className="grid-container">
          {
            admin&& dataStore.meetings.map((meeting,index)=>{
              return <Meeting key={index} meeting={meeting} ></Meeting>
            })
          }
          </div>
          </div>
        
      </>
    )
  }

  ))
  
  export default MeetingList

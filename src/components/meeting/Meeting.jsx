import { observer } from "mobx-react"

const Meeting=(observer(({meeting})=>{  

const getMeetingColor=(dateTime)=>{
  const today=new Date();
  const meetingDate=new Date(dateTime);
  const timeDiff=Math.abs(meetingDate.getTime()-today.getTime());
  const diffDays=Math.ceil(timeDiff/(1000*3600*24));
  if(diffDays<0)
  {
    return 'non'
  }
  else{
    if(diffDays===1){
      return 'red';
    }
    else{
      if(diffDays<=7){
        return 'orange';
      }
      else{
        return 'green'
      }
    }
  }

}

    return (
      <>

<div className="grid-container-2" style={{borderColor:getMeetingColor(meeting.dateTime)}}> 

  <div className="grid-item">
    <h5>שם:</h5>
    <p className="color-p">{meeting.name}</p>
  </div>
  <div className="grid-item">
    <h5>טלפון:</h5>
    <p className="color-p">{meeting.phon}</p>
  </div>
  <div className="grid-item">
    <h5>אימייל:</h5>
    <p className="color-p">{meeting.email}</p>
  </div>
  <div className="grid-item">
    <h5>תאריך:</h5>
    <p className="color-p">{new Date(meeting.dateTime).toLocaleDateString()}</p>
  </div>
  <div className="grid-item">
    <h5>שעה:</h5>
    <p className="color-p">{meeting.dateTime.split('T')[1]}</p>
  </div>
  </div>
       {/* {meeting.name}
       <br/>
       {meeting.phon}
       <br/>
       {meeting.email}
       <br/>
       {meeting.dateTime} */}
      </>
    )
  }

  ))
  
  export default Meeting

import { useState } from "react"
import BusinessData from "../businessData/BusinessData"
import MeetingList from "../meeting/MeetingList"
import ServiceList from "../service/ServiceList"

function AdminHome() {
  const[openSevices,setOpenSevices]=useState(true);
  const[openMeeting,setOpenMeeting]=useState(false);

  const handleOpenServices=()=>{
    setOpenSevices(true)
    setOpenMeeting(false)
  }
  
  const handleOpenMeeting=()=>{
    setOpenMeeting(true)
    setOpenSevices(false)
  }

    return (
      <>
        <BusinessData></BusinessData>
        <button onClick={handleOpenServices}>שירותים</button>
        <button onClick={handleOpenMeeting}>פגישות</button>
        {openSevices&&<ServiceList setOpenSevices={setOpenSevices}></ServiceList>}
        {openMeeting&&<MeetingList></MeetingList>}
      </>
    )
  }
  
  export default AdminHome

import { observer } from "mobx-react"
import './App.css'
import BusinessData from './components/businessData/BusinessData'
import ServiceList from './components/service/ServiceList'
import MeetingList from "./components/meeting/MeetingList"



const App=(observer(()=>{
 
  return (
    <>
   
     <BusinessData admin={false}></BusinessData>
     <ServiceList admin={false}></ServiceList>
     <MeetingList admin={false}></MeetingList>

     
    </>
  )
}

))

export default App

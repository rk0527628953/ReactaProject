import { observer } from "mobx-react"
import dataStore from "../../data/dataStore"
import AdminHome from "./AdminHome"
import Login from "./Login"

const AdminPage=(observer(()=>{
  

    return (
      <>
     
      {dataStore.isLogin ? <AdminHome /> : <Login />}
        {console.log("dataStore.isLogin",dataStore.isLogin)}
      </>
    )
  }

  ))
  
  export default AdminPage

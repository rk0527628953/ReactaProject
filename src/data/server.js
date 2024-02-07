import axios from "axios";
import dataStore from "./dataStore";
import swal from 'sweetalert';
import Swal from 'sweetalert2'

export const hundleLogin = async (name,password) => {
    try {
        const res = await axios.post('http://localhost:8787/login', { name: name, password: password })
        if (res.status === 200) {
            console.log("vvvvvvvvvv")
            swal("יופי!", "התחברת בהצלחה!", "success");
            dataStore.setIsLogin(true);
            console.log("dataStore.isLogin",dataStore.isLogin)
        }
    }
    catch (error) {
        if (error.status === 401) {
            Swal.fire({
                icon: "error",
                title: "אופס....",
                text: "משהו השתבש",
                // footer: '<a href="#">Why do I have this issue?</a>'
              });
            console.log('failed')


        }
        else {
            console.log("xxxxxxxxxxx")
            Swal.fire({
                icon: "error",
                title: "אופס....",
                text: "משהו השתבש",
                // footer: '<a href="#">Why do I have this issue?</a>'
              });
              
        }

    }


}


export async function getBusinessData() {
    try {
        const response = await axios.get('http://localhost:8787/businessData');
        const businessData = response.data;
        dataStore.setBusinessData(businessData);
        
        console.log("gbd",dataStore.businessData);
        return;

    } catch (error) {
        console.error(error);
    }
}



export async function updateBusinessData(businessData) {
    const res = await axios.post('http://localhost:8787/businessData', businessData);
    if (res.status === 200) {
        dataStore.editBusinessData(businessData);
        
        console.log("bd",dataStore.businessData);
        return 'success';
    }
    else { return 'failed'; }
}






export async function getServices() {
    const response = await axios.get('http://localhost:8787/services');
    const services=response.data;
    dataStore.setServices(services);
}





export async function addService(service, price, id, description, duration) {
    try {
        const res = await axios.post('http://localhost:8787/service', { name: service, price: price, id: id, description: description, duration: duration });
        if (res.status === 200) {
            dataStore.addService({ name: service, price: price, id: id, description: description, duration: duration });
            return 'success';
        }
    }
    catch (error) {
        return 'failed';
    }
}





export async function getMeetings(){
    try {
        const response=await axios.get('http://localhost:8787/appointments');
        const meetings=response.data;
        dataStore.setMeetings(meetings);
        return
    } catch (error) {
         console.error(error); 
        
    }
}

export async function addMeeting(name,phon,email,dateTime){
    try {
        debugger
        const res=await axios.post('http://localhost:8787/appointment',{name:name,phon:phon,email:email,dateTime:dateTime});
        if(res.status===200)
        {
            dataStore.addMeeting({name:name,phon:phon,email:email,dateTime:dateTime});
            dataStore.setIsMeeting(true);
            swal("יופי!", "פגישתך נקבעה בהצלחה!", "success");
        }
    } catch (e) {
        dataStore.setIsMeeting(false);
        Swal.fire({
            icon: "error",
            title: "אופס...",
            text: "תאריך זה תפוס, בחר תאריך אחר!",
            // footer: '<a href="#">Why do I have this issue?</a>'
          });
        return 'failed';
        
    }
}


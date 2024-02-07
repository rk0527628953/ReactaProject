import { action, makeObservable, observable } from "mobx";

class DataStore{
    isLogin=false;
    businessData=null;
    services=[];
    meetings = [];
    isMeeting=true;

    constructor(){
        makeObservable(this,{
            isLogin:observable,
            businessData:observable,
            services:observable,
            meetings:observable,
            isMeeting:observable,
            setIsLogin:action,
            setBusinessData:action,
            editBusinessData:action,
            setServices:action,
            addService:action,
            setMeetings:action,
            addMeeting:action,
            setIsMeeting:action



            


        })
    }
    setIsLogin(status){
        this.isLogin=status;
    }

    setBusinessData = (businessData) => {
        if (Object.keys(businessData).length === 0 && businessData.constructor === Object){  //if business is empty
            this.businessData = this.defaultBusinessData
       
        }    
        else {
            this.businessData = businessData
        }
    }


    // setBusinessData=(businessData)=>{
    //     console.log("@@@@@@@@@@@@@@@@@@@@@@@", businessData)
    //     // if(businessData.length < 0)
    //     // {
    //     //     this.businessData=defaultBusinessData;
           
    //     // }
    //     // else
    //     // {
    //     //     this.businessData=businessData;        }
    //     if(businessData.length>0){
    //         this.businessData=businessData;
    //     }
    //     else{
    //         this.businessData=defaultBusinessData;
    //     }

    //     // this.businessData=businessData;


    // }


    // setBusinessData = (data) => {
    //     if (data.length > 0) {
    //         this.businessData = data;
    //     }
    //     else {
    //         this.businessData = defaultBusinessData;
    //     }
    // }
    
    // editBusinessData(formData) {
    //     this.businessData = {name:formData.name, address:formData.address,  phone:formData.phone, owner:formData.owner, logo:formData.logo, description:formData.description};
    // }

    


    // setBusinessData = (data) => {
    //     if (data.length > 0) {
    //         this.businessData = data;
    //     }
    //     else {
    //         this.businessData = defaultBusinessData;
    //     }
    // }


    editBusinessData(fromData){
        this.businessData={name:fromData.name,address:fromData.address, phone:fromData.phone,owner:fromData.owner,logo:fromData.logo,description:fromData.description}
        console.log("ebd",this.businessData)
    }


    // setServices = (services) => {
    //     this.services = [...this.services, ...services];
    // }

    setServices = (services) => {
        this.services = services;
    }


    addService = (service) => {
        this.services = [...this.services, service];
    }   

    setMeetings=(meeting)=>{
        this.meetings=meeting.sort((a,b)=>{
            const dateA=new Date(a.dateTime);
            const dateB=new Date(b.dateTime);
            return dateA-dateB;
        })

    }

    addMeeting=(meeting)=>{
        
        this.meetings=[...this.meetings,meeting]
    }

    setIsMeeting=(status)=>{
        this.isMeeting=status;
    }


    
    
   
   
   
   
    
    

}
export default new DataStore();

const defaultBusinessData = {
    name: "Coding Academy",
    address: "123 Main Street",
    phone: "555-1234",
    owner: "John Doe",
    logo: "https://example.com/logo.png",
    description: "A coding academy that offers courses on web development."
  }

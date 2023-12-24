import React from "react";
import { MDBInput, MDBCol } from "mdbreact";

export default function Search({ searchName, setsearchName }) {
    
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
   
       
      <MDBCol md="6" >
    
      <MDBInput 
     
      value={searchName}
      onChange={(e) => {
        setsearchName(e.target.value);
      }}
       hint="Search" 
       type="text"
        containerClass="mt-0" />
    </MDBCol>
  
  
   
      </div>
     

    
  );
}

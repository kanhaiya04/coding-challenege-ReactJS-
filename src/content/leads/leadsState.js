import React, { useState } from "react";
import leadsContext from "./leadsContent";

const LeadsState = (props) => {

  
  const d=[{
    "id":"4",
    "Name": "This is editing the note",
    "email": "kan@gmail.com",
    "Source": "website",
    "Status": "Follow_up",
    "date": "2023-04-29",
    "Time": "09:52:19.000",
    "createdAt": "2023-04-28T20:02:44.326Z",
    "updatedAt": "2023-04-29T09:52:20.049Z"
  },
  {
    "id": "2",
    "Name": "my first",
    "email": "kan@gmail.com",
    "Source": "website",
    "Status": "Follow_up",
    "date": "2023-04-29",
    "Time": "09:52:19.000",
    "createdAt": "2023-04-28T20:02:44.326Z",
    "updatedAt": "2023-04-29T09:52:20.049Z"
  }];
  const [leads,setLeads]=useState(d);

  const addLead = (Name,email,Source,Status,date,Time,createdAt,updatedAt)=>{
    const data={
      id:1,
      Name:Name,
      email:email,
      Source:Source,
      Status:Status,
      date:date,
      Time:Time,
      createdAt:createdAt,
      updatedAt:updatedAt
    }
    setLeads(leads.concat(data));
    
  };

  const deleteLead = (id)=>{
    const newLead = leads.filter((lead) => {
      return lead.id !== id;
    });
    setLeads(newLead);
  }

  const updateLead = (id,Name,email,Source,Status,date,Time,createdAt,updatedAt)=>{
    let newLeads = JSON.parse(JSON.stringify(leads));
    for (let index = 0; index < newLeads.length; index++) {
      const element = newLeads[index];
      if (element.id === id) {
        newLeads[index].Name = Name;
        newLeads[index].email = email;
        newLeads[index].Source = Source;
        newLeads[index].Status = Status;
        newLeads[index].date = date;
        newLeads[index].Time = Time;
        newLeads[index].createdAt = createdAt;
        newLeads[index].updatedAt = updatedAt;
        break;
      }
    }
      setLeads(newLeads);
  }
  

  return (
    <leadsContext.Provider value={{leads,addLead,deleteLead,updateLead}}>
      {props.children}
      </leadsContext.Provider>
  );
};

export default LeadsState;

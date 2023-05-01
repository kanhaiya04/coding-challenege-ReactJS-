import React, { useEffect, useMemo, useState } from "react";
import leadsContext from "./leadsContent";
import { useQuery } from "@apollo/client";
import { getLeads } from "../../Graphql/Query";

const LeadsState = (props) => {
  const [leadsData, setLeads] = useState([]);
  const { loading, data } = useQuery(getLeads);

  useEffect(() => {
    if (data) {
      const res = data.leads.data;

      const final = [];
      for (let i = 0; i < res.length; i++) {
        const values = {
          id: res[i].id,
          Name: res[i].attributes.Name,
          email: res[i].attributes.email,
          Source: res[i].attributes.Source,
          Status: res[i].attributes.Status,
          date: res[i].attributes.date,
          Time: res[i].attributes.Time,
          createdAt: res[i].attributes.createdAt,
          updatedAt: res[i].attributes.updatedAt,
        };
        final.push(values);
      }
      setLeads(final);
    }
  }, [data]);

  if (loading) return <></>;

  const addLead = (
    Name,
    email,
    Source,
    Status,
    date,
    Time,
    createdAt,
    updatedAt
  ) => {
    const data = {
      id: 1,
      Name: Name,
      email: email,
      Source: Source,
      Status: Status,
      date: date,
      Time: Time,
      createdAt: createdAt,
      updatedAt: updatedAt,
    };
    setLeads(leadsData.concat(data));
  };

  const deleteLead = (id) => {
    const newLead = leadsData.filter((lead) => {
      return lead.id !== id;
    });
    setLeads(newLead);
  };

  const updateLead = (
    id,
    Name,
    email,
    Source,
    Status,
    date,
    Time,
    createdAt,
    updatedAt
  ) => {
    let newLeads = JSON.parse(JSON.stringify(leadsData));
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
  };

  return (
    <leadsContext.Provider
      value={{ leadsData, addLead, deleteLead, updateLead }}
    >
      {props.children}
    </leadsContext.Provider>
  );
};

export default LeadsState;

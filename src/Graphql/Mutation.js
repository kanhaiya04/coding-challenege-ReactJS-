import { gql } from "@apollo/client";

export const createLead=gql`

enum ENUM_LEAD_STATUS {
        New
        Negative
        Enrolled
        Follow_up
        Interested
      }

enum ENUM_LEAD_SOURCE {
        google
        my_app
        website
        word_of_mouth
}

mutation createLead($Name:String,$email:String,$Source:ENUM_LEAD_SOURCE,$Status:ENUM_LEAD_STATUS,$date:Date,$Time:Time){
        createLead(
          data: {
            Name: $Name,
            email: $email,
            Source: $Source,
            Status:  $Status,
            date: $date,
            Time: $Time,
          }
        )

        
      }
      
`;
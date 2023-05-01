import { gql } from "@apollo/client";

export const getLeads = gql`
  {
    leads {
      data {
        attributes {
          Name
          email
          Source
          Status
          date
          Time
          createdAt
          updatedAt
        }
        id
      }
    }
  }
`;

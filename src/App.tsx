import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Routes from "./Routes";
import LeadsState from "./content/leads/leadsState";
import SideBar from "./components/Sidebar/Sidebar";
import "./App.css";
import { useState } from "react";
const client = new ApolloClient({
  uri: `${process.env.REACT_APP_URL}/graphql`,
  cache: new InMemoryCache(),
});

function App() {

  const [sidebarOpen, setSideBarOpen] = useState(false);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };
  return (
    <LeadsState>

    <ApolloProvider client={client}>
        <Routes/>
        <SideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
    </ApolloProvider>
    </LeadsState>
  );
}

export default App;
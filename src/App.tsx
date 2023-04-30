import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Routes from "./Routes";
import LeadsState from "./content/leads/leadsState";
const client = new ApolloClient({
  uri: `${process.env.REACT_APP_URL}/graphql`,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <LeadsState>

    <ApolloProvider client={client}>
        <Routes/>
    </ApolloProvider>
    </LeadsState>
  );
}

export default App;
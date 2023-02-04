import Header from "./components/Header";
import {ApolloProvider,ApolloClient,InMemoryCache}
 from '@apollo/client';
import AddClientModal from "./components/AddClientModal";
 import Clients from './components/Clients'
 const client = new ApolloClient({
  uri:'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
})
 function App() {
  return (
    <>
    <ApolloProvider client={client}> 
    <Header/>
    <div className="container">
      <AddClientModal/>
     <Clients/>
    </div>
    </ApolloProvider>
    </>
  );
}

export default App;

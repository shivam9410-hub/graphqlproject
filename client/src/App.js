import Header from "./components/Header";
import {ApolloProvider,ApolloClient,InMemoryCache}

 from '@apollo/client';
 import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
 import AddClientModal from "./components/AddClientModal";
 import Clients from './components/Clients'
import Project from "./components/Project";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";


 const client = new ApolloClient({
  uri:'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
})
 function App() {
  return (
    <>
    <ApolloProvider client={client}> 
    <Router>    <Header/>
    <div className="container">
      <Routes>
        <Route path="/" element={<Home/>}/>
       
<Route path="*" element={<NotFound/>}/>
          
      </Routes>
    </div>
    </Router>

    </ApolloProvider>
    </>
  );
}

export default App;

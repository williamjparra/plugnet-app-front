//importamos los modulos
import {BrowserRouter as Router, Route} from 'react-router-dom';
import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { createUploadLink } from "apollo-link-upload";

//importamos las paginas
import Clients from './pages/Clients'
import UploadFile from './pages/UploadFile'

import './App.css';
//importamos los componentes
import Navbar from './components/Navbar'
import ClientInfo from './pages/ClientInfo';

const client = new ApolloClient({
  link: createUploadLink({uri: 'http://localhost:5055/api'}),
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <Router>
          <Navbar />
          <div className="app-container">    
            <Route exact path="/clients" component={Clients} />
            <Route exact path="/client/:id" component={ClientInfo}/>
            <Route exact path="/upload" component={UploadFile} />
          </div>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;

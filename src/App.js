//importamos los modulos
import {BrowserRouter as Router, Route} from 'react-router-dom';
import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

//importamos las paginas
import Clients from './pages/Clients'

import './App.css';
//importamos los componentes
import Navbar from './components/Navbar'
import createClient from './components/CreateClient'

const client = new ApolloClient({
  uri: 'http://localhost:5055/api',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <Navbar />
        <div className="app-container">
          <Router>
            <Route exact path="/clients" component={Clients} />
            <Route exact path="/create" component={createClient}/>
          </Router>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;

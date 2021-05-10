import React from 'react'
import { gql, useQuery } from '@apollo/client';
import NewClient from '../components/NewClient'
import { Link } from 'react-router-dom'

import './css/Client.css'

function Clients() {

    const { loading, error, data } = useQuery(GET_CLIENTS);

    if (loading) return <p>Loading...</p>
    if (error) return <p> error intente mas tarde </p>

    return(
        <div className="app-wrapper">
            <h1>Clientes</h1>
            <NewClient />
            <div className="clients-container" >
                <table>
                    <tbody>
                        <tr>
                            <th>
                                <h2>
                                    Nombre
                                </h2> 
                            </th>
                            <th>
                                <h2>
                                    Contacto
                                </h2> 
                            </th>
                            <th>
                                <h2>
                                    Nota
                                </h2> 
                            </th>
                        </tr>
                        {
                            data.getClients.map( client => (
                                <tr key={client._id}>
                                    <td>
                                        <Link to={`/client/${client._id}`} >
                                            {client.name}
                                        </Link>
                                    </td>
                                    <td>
                                        { 
                                            client.contact !== null &&
                                            client.contact.phone &&
                                            client.contact.email
                                        }
                                        {
                                            !client.contact && 'este cliente no posee informacion de contacto'
                                        }
                                    </td>
                                    <td>
                                        {client.note}
                                        {!client.note && 'este cliente no tiene ninguna nota'}
                                    </td>
                                </tr>
                            ))                          
                        }
                    </tbody>
                </table>
            </div> 
        </div>
    )
}

const GET_CLIENTS = gql`
    {
        getClients {
            _id
            name
            contact {
                email
                phone
            }
            note
        }
    }
`

export default Clients
import React from 'react'
import { gql, useQuery } from '@apollo/client';
import NewClient from '../components/NewClient'
import ClientDataList from '../components/ClientDataList'

import './css/Client.css'

function Clients() {

    const { loading, error, data } = useQuery(GET_CLIENTS);

    if (loading) return <p>Loading...</p>
    if (error) return <p> error intente mas tarde </p>
    console.log(data)

    return (
        <div className="app-wrapper">
            <h1>Clientes</h1>
            <NewClient />
            <div className="clients-container" >
                <ul>
                    <li className="table-header">
                        <div className="col-1">
                            <h2>
                                Nombre
                            </h2>
                        </div>
                        <div className="col-2">
                            <h2>
                                Contacto
                            </h2>
                        </div>
                        <div className="col-3">
                            <h2>
                                Nota
                            </h2>
                        </div>
                    </li>
                    {
                        data.getClients.map(client => (
                            <li key={client._id} className="table-row">
                                <ClientDataList client={client} key={client._id} />
                            </li>
                        ))
                    }
                </ul>
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
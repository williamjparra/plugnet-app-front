import React from 'react'
import { gql, useQuery } from '@apollo/client'
import dateFormater from '../utils/dateFormater'
import './css/ClientData.css'

export default function ClientData(props) {

    const { loading, error, data } = useQuery(GET_CLIENT_INFO, {
        variables: {
            id: props.clientID
        }
    })

    if(loading) {
        return <p>Loading ...</p>
    }

    if(error) {
        return <p>hubo un error intente de nuevo mas tarde</p>
    }

    if(data) {
        const {getClient: client} = data;

        return (
            <div className={`client-card ${ client.status ? '' : 'client-unactive' }`}>
                <div className="clientData">
                    <p className="clientName">{client.name}</p>
                    <small>Cliente creado: {dateFormater(client.createdAt)}</small>
                    <small>Cliente actualizado: {dateFormater(client.updatedAt)}</small>
                </div>
                <div className="contactInfo">
                    <p><b>Telefono:</b> {client.contact.phone}</p>
                    <p><b>Correo:</b> {client.contact.email}</p>
                    <small>
                        {client.contact.desc}
                    </small>
                </div>
                <div className="clientNote">
                    <h2>
                        Nota:
                    </h2>
                    <p>
                        {client.note}
                    </p>
                </div>
            </div>
        )
    }
}

const GET_CLIENT_INFO = gql`
    query myclient($id: ID!) {
        getClient(_id: $id){
            name
            contact{
                phone
                email
                desc
            }
            createdAt
            updatedAt
            note
            status
        }
    }
`
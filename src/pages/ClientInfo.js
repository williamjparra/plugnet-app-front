import React from 'react'
import { useParams } from 'react-router-dom'

//importamos los componentes
import ClientData from '../components/ClientData'


function ClientInfo() {

    const { id } = useParams()

    return (
        <div>
            <ClientData clientID={id} />
        </div>
    )
}

export default ClientInfo
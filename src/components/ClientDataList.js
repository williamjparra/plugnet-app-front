import React from 'react'
import { Link } from 'react-router-dom'

export default function ClientDataList(props) {

    return (
        <>
            <div className="col-1">
                <Link to={`/client/${props.client._id}`} >
                    {props.client.name}
                </Link>
            </div>
            <div className="col-2">
                {
                    props.client.contact !== null &&
                    props.client.contact.phone &&
                    props.client.contact.email
                }
                {
                    !props.client.contact && 'este cliente no posee informacion de contacto'
                }
            </div>
            <div className="col-3">
                {props.client.note}
                {!props.client.note && 'este cliente no tiene ninguna nota'}
            </div>
        </>
    )
}
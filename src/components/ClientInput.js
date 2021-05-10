import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client'

export default function ClientInput() {
    //editamos nuestros hooks 
    const [clientData, AddClient] = useState({
        name: "",
        phone: "",
        email: "",
        desc: "",
        note: "",
    })

    const initialState = {
        name: "",
        phone: "",
        email: "",
        desc: "",
        note: "",
    }


    const [addClientMutation, { data, error, loading }] = useMutation(ADD_ClIENT)

    //declaramos nuestras funciones para manejo de los datos
    const updateData = (e) => {
        const update = {
            ...clientData,
            [e.target.name] : e.target.value
        }

        AddClient(update)
    }

    const createClient = e => {
        e.preventDefault()

        var {
            name,
            phone,
            email,
            desc,
            note
        } = clientData


        addClientMutation({
            variables: {
                client: {
                    name,
                    contact : {
                        phone: phone === "" ? "informacion no disponiblie" : phone ,
                        email: email === "" ? "informacion no disponiblie" : email,
                        desc: desc === "" ? "no hay nota disponible" : desc
                    },
                    createdAt: new Date(Date.now()).toISOString(),
                    updatedAt: new Date(Date.now()).toISOString(),
                    note,
                    status: true
                }
            }
        })

        AddClient(initialState)
    }

    if(data) {
        console.log(data)
    }

    if (error) {
        return <div> error </div>
    }

    if (loading) {
        return <div>...loading </div>
    }

    return (
        <div>
            <form>
                <h2>Completa los siguientes campos para agregar un nuevo cliente</h2>
                <input 
                    type="text" 
                    placeholder="Nombre de empresa/cliente" 
                    name="name" 
                    onChange={updateData} 
                    value={clientData.name} 
                />
                <input 
                    type="text" 
                    placeholder="phone" 
                    name="phone" onChange={updateData} 
                    value={clientData.phone}
                    required
                />
                <input 
                    type="text" 
                    placeholder="email" 
                    name="email" onChange={updateData} 
                    value={clientData.email}
                    required
                />
                <input 
                    type="text" 
                    placeholder="descripcion del contacto" 
                    name="desc" onChange={updateData} 
                    value={clientData.desc}
                    required
                />
                <input 
                    type="text" 
                    placeholder="note" 
                    name="note" onChange={updateData} 
                    value={clientData.note}
                />
                <button onClick={createClient}>
                    agregar cliente
                </button>
            </form>
            <div className="checkData">
                <h3>
                    Estos son los datos que se guardaran...
                </h3>
                <small>
                    por favor chequea que esten bien
                </small>
                <div>
                    <p>
                        name : {clientData.name}
                    </p>
                    <p>
                        phone : {clientData.phone}
                    </p>
                    <p>
                        email : {clientData.email}
                    </p>
                    <p>
                        desc : {clientData.desc}
                    </p>
                    <p>
                        note : {clientData.note}
                    </p>
                </div>
            </div>
        </div>
    )
}

const ADD_ClIENT = gql`
    mutation createClient(
        $client: ClientInput!
    ){
        createClient(
            input: $client
        ){
            name
            contact {
                phone
                email
                desc
            }
            createdAt
            updatedAt
            note
        }
    }
`
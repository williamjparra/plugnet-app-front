import React from 'react'
import { gql, useMutation } from '@apollo/client'

function CreateClient(props) {
    let createClient = {
        name: "newOne",
        contact: {
            phone: "1234667789",
            email: "algo@algo.algo",
            desc: "esta es una descripcion"
        },
        createdAt: new Date(Date.now()).toISOString(),
        updatedAt: new Date(Date.now()).toISOString(),
        note: "esto es una nota",
        status: true
    }

    const [addClient] = useMutation(ADD_ClIENT)
    
    const addClientFunc = (e) => {
        e.preventDefault();
        try{
            addClient({variables: {
                name: "newOne",
                contact: {
                    phone: "1234667789",
                    email: "algo@algo.algo",
                    desc: "esta es una descripcion"
                },
                createdAt: "26/2/2021",
                updatedAt: "26/2/2021",
                note: "esto es una nota",
                status: true
            }})
            console.log(createClient)
        } catch (e) {
            console.log(e)
        }
    }

    return(
        <div className="test">
            <form onSubmit={addClientFunc}>
                <p>
                    prueba
                </p>
                <button type="submit">
                    presiona para subir 
                </button>
            </form>
        </div>
    )
}

const ADD_ClIENT = gql`
    mutation CreateNewClient($createClientInput: ClientInput!){
        createClient(input: $createClientInput){
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

export default CreateClient
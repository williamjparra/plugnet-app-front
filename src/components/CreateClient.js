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

    const [addClient] = useMutation(ADD_ClIENT, {
        variables: {
            name: "newOne",
            createdAt: "26/2/2021",
            updatedAt: "26/2/2021",
            note: "esto es una nota",
        }
    })
    
    /*const addClientFunc = (e) => {
        e.preventDefault();
        try{
            addClient({variables: {
                
            }})
            console.log(createClient)
        } catch (e) {
            console.log(e)
        }
    }*/

    return(
        <div className="test">
            <form onSubmit={addClient}>
                <p>
                    prueba para ver si funciona
                </p>
                <button type="submit">
                    presiona para subir 
                </button>
            </form>
        </div>
    )
}

const ADD_ClIENT = gql`
    mutation CreateNewClient(
        $name: String!
        $createdAt: String!
        $updatedAt: String!
        $note: String!
    ){
        createClient(
            createClientInput: {
                name: $name
                createdAt: $createdAt
                updatedAt: $updatedAt
                note: $note
            }
        ){
            name
            createdAt
            updatedAt
            note
        }
    }
`

export default CreateClient
import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import axios from 'axios'

export default function UploadFile() {
    
    const [progress, setProgress] = useState()

    const [addFileMutation, { data, error, loading }] = useMutation(UPLOAD_FILE, {
        onCompleted: data => console.log(data)
    })

    const UploadFileF = async e => {
        console.log(e)
        e.preventDefault()
        const file = new FormData()

        file.append('file', e.target.files[0])
        console.log(file)
        await axios.post('http://localhost:5055/upload?filename=williamParra', file ,{
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: data => {
                setProgress(Math.round((100 * data.loaded) / data.total))
            }
        })
        .then( response => {
            console.log(response.data)
        })
        .catch(() => console.log("no se pudo"))
    }

    const handleLoad = e => {
        console.log(e)
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
                hi upload  your file
                <input type="file" onChange={UploadFileF} onProgress={handleLoad}></input>
            </form>
            <p>
                {progress}
            </p>
        </div>
    )
}

const UPLOAD_FILE = gql`
    mutation addFile(
        $file: Upload!
    ){
        uploadFile(file: $file){
            url
        }
    }
`

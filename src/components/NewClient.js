import React, { useState } from 'react'
//importamos el componenete del input para los clientes nuevos
import ClientInput from './ClientInput'
//importamos el css
import './css/NewClient.css'
//importamos las imagenes
import arrow from '../img/arrow-down-sign-to-navigate.svg'

export default function NewClient() {
    const [open, setOpen] = useState(false)

    const openComponent = () => {
        open === false ? setOpen(true) : setOpen(false)
    }

    return (
        <div className="addClientAppContainer">
            <div className={open ? 'open clientInputContainer' : 'close clientInputContainer'}>
                <ClientInput />
            </div>
            <div className="arrow-icon" onClick={openComponent}>
                <i>
                    <img src={arrow} alt="arrow to open" className={open ? 'active' : 'unactive'}/>
                </i>
            </div>
        </div>
    )
}

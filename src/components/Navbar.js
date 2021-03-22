import React from 'react'
import { Link } from 'react-router-dom'

import './css/navbar.css'

function Navbar() {
    return(
        <div className="navbar">
            <div className="brand">
                <h1>
                    Plugnet
                </h1>
            </div>
            <div className="navbar-container">
                <div className="navbar-list">
                    <ul>
                        <li>
                            <a href="#">
                                Dasboard
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Usuarios                          
                            </a>
                        </li>
                        <li>
                             <a href="#">
                                Abonos <br />
                                Deudas                            
                            </a>
                        </li>
                        <li>
                             <a href="#">
                                Gastos <br />
                                ganancias
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                ubicacion <br />
                                clientes
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
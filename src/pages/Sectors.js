import React from 'react'

import SectorList from '../components/SectorList'
import RouterList from '../components/RouterLIst'

import './css/sectors.css'

export default function Sectors() {

    return (
        <div className="sectors-container">
            <header>
                <h1>
                    Sectores y Routers de Borde
                </h1>
            </header>
            <main>
                <div className="sectors">
                    <SectorList />
                </div>
                <div className="routers">
                    <RouterList />
                </div>
            </main>
        </div>
    )
}

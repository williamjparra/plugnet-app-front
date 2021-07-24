import React from 'react'
import { gql, useQuery } from '@apollo/client'

const SectorList = () => {
    const { loading, error, data } = useQuery(GET_SECTORS)

    if (loading) return <p> loading </p>
    if (error) return <p> hubo un error </p>

    const sectors = data.getAllSectors

    return (
        <div className="sectorListContainer">
            <header>
                <h2>Sectores</h2>
            </header>
            <div className="sectorList">
                <div className="tableHeader">
                    <div className="col-1">
                        <h3>alias</h3>
                    </div>
                    <div className="col-2">
                        <h3>Modelo</h3>
                    </div>
                    <div className="col-3">
                        <h3>Ip</h3>
                    </div>
                </div>
                {
                    sectors.map(sector => <div className="tableBody" key={sector._id}>
                        <div className="col-1">
                            <span>
                                <b>{sector.alias}</b>
                            </span>
                        </div>
                        <div className="col-2">
                            <span>
                                <b>
                                    {sector.antenaModel}
                                </b>
                            </span>
                        </div>
                        <div className="col-3">
                            <p>
                                <a href={`http://${sector.ip}`} target="_blank">
                                    {sector.ip}
                                </a>
                            </p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

const GET_SECTORS = gql`
    {
        getAllSectors {
            _id
            antenaModel
            ip
            alias
        }
    }
`

export default SectorList
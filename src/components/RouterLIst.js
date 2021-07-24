import React from 'react'
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom'

const RouterList = () => {
    const { loading, error, data } = useQuery(GET_BORDER_ROUTERS)

    if (loading) return <p> loading... </p>
    if (error) return <p> hubo un error </p>

    const routers = data.getBorderRouters

    return (
        <section className="BorderRoutersContainer">
            <header>
                <h2>Listas de Routers de Borde</h2>
            </header>
            <div className="routersList">
                <div className="tableHeader">
                    <div className="col-1">
                        <h3>Nombre</h3>
                    </div>
                    <div className="col-2">
                        <h3>Modelo</h3>
                    </div>
                    <div className="col-3">
                        <h3>Ip</h3>
                    </div>
                </div>
                {routers.map(router => <div className="tableBody" key={router._id}>
                    <div className="col-1">
                        <Link to={`/router/${router._id}`}>
                            {router.name}
                        </Link>
                    </div>
                    <div className="col-2">
                        <p>{router.model}</p>
                    </div>
                    <div className="col-3">
                        <a href={`http://${router.ip}`} target="_blank">
                            {router.ip}
                        </a>
                    </div>
                </div>)}
            </div>
        </section>
    )
}

const GET_BORDER_ROUTERS = gql`
{
    getBorderRouters {
        _id
        name
        ip
        model
    }
}`

export default RouterList;

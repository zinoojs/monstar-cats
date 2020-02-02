import React from 'react'
import './card.style.css'

export const Card = (props) => (
    <div className="card-container">
        <img alt="monstar" src={ `https://robohash.org/${props.monstar.id}?set=set4&size=180x180`} />
        <h1>{props.monstar.name}</h1>
        <p>{props.monstar.email}</p>
    </div>
)
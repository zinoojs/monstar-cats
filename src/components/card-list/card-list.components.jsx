import React from 'react';
import { Card } from '../card/card.components';
import './card-list.style.css';

export const CardList = props => (
    
    <div className="card-list">
        {
          props.monstars.map(monstar => 
          (<Card key={monstar.id} monstar={monstar}/> ))
        }
    </div>
)
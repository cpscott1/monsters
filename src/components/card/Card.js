import React from 'react';

export const Card = ({monster}) => (
  <div className='card-container'>
    <img alt='monster' src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} />
    <h1>{monster.name}</h1>
    <p>{monster.email}</p>
  </div>
)

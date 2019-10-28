import React from 'react';
import { Card } from '../card/Card';

export const CardList = ({monsters}) => (
  <div className='card-list'>
    {monsters.map(monster => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
)

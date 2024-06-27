import React from 'react';
import { birthdayCakes, weddingCakes } from './../../data';

function Home() {
  return (
    <div>
      <h1>{birthdayCakes.map((cake)=>(cake.title))}</h1>
    </div>
  );
}

export default Home;


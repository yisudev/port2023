import React, { useState } from 'react';
export default function Skills(){
  const [rotating, setRotating] = useState(false);

  const handleContainerClick = () => {
    setRotating(!rotating);};
  return (
    <div className='backdrop-filter backdrop-blur-lg bg-opacity-50 contenedor-delcontenedor h-screen'id='habilidades'>
      <h4 className='text-center text-white mb-20 text-2xl'>HABILIDADES</h4>
      <div className={`contenedor-totalxd ${rotating ? 'rotating' : ''}`}   onClick={handleContainerClick}>
        
        <div class="circle-container">
          <div class="circle"></div>
          <div class="image-wrapper top">
            <img src={require('../../img/h1.png')} alt="Imagen 1" class={`image ${rotating ? 'rotating-img' : ''}`} />
          </div>
          <div class="image-wrapper right">
            <img src={require('../../img/h2.png')} alt="Imagen 2" class={`image ${rotating ? 'rotating-img' : ''}`} />
          </div>
          <div class="image-wrapper bottom">
            <img src={require('../../img/h3.png')}alt="Imagen 3" class={`image ${rotating ? 'rotating-img' : ''}`} />
          </div>
          <div class="image-wrapper left">
            <img src={require('../../img/h4.png')} alt="Imagen 4" class={`image ${rotating ? 'rotating-img' : ''}`} />
          </div>
          </div>
        </div>
    </div>
      
        );
}
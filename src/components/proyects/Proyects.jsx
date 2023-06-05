import React, { useState } from 'react';

export default function Proyect() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      imageUrl: require('../../img/p1.jpg'),
      title: 'CLUB DE TECNOLOGIA CREE',
      description: 'Instructor de Robotica Lego EV3 y Diseño Web',
    },
    {
      imageUrl: require('../../img/p2.jpg'),
      title: 'TALLER DE AGUARANDU',
      description: 'Instructor Logica de programacion y Python',
    },
    {
      imageUrl: require('../../img/p3.jpg'),
      title: 'DelySis',
      description: 'Sistema de Gestión para Restaurantes',
    },
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };
  return (
    <div className="relative h-screen w-full overflow-hidden" id="proyectos">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 h-full w-full transform transition-transform duration-300 ${index === currentSlide ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
          <img className="h-full w-full object-cover " src={slide.imageUrl} alt={`Slide ${index + 1}`} />
          <div className="absolute text-center top-0 left-0 h-full w-full flex flex-col justify-center items-center p-8 bg-black bg-opacity-50 text-white">
            <h2 className="text-4xl font-bold mb-4 ">{slide.title}</h2>
            <p className="text-lg">{slide.description}</p>
          </div>
        </div>
      ))}

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded"
        onClick={handlePrevSlide}
      >
        ◖
        
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded"
        onClick={handleNextSlide}
      >
        ◗
      </button>
    </div>
  );
};



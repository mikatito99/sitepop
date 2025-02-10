
import React from 'react';
import './inicio.scss';

function Inicio() {
  return (
    <div className="inicio">
   
      <h1 className="titulo">Bem-vindo ao Meu Site</h1>
      <div className="gif-container">
        <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHF1Nm1jMW8zbWVwcHI5dnE2M2hjM3pnZno4ejd6MjI3eXU0eTIzZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rHR8qP1mC5V3G/giphy.gif" alt="GIF de um filme famoso" className="gif-grande" />
        <p className="frase-filme">"Que a Força esteja com você." - Star Wars</p>
      </div>
    </div>
  );
}

export default Inicio;





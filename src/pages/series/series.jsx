import React from 'react';
import './series.scss';

function Series() {
  const series = [

    {
      titulo: "Família Soprano",
      imagem: "https://s2.glbimg.com/D35EcVBdm711T_-eh8ITdD1bVU0=/620x413/smart/e.glbimg.com/og/ed/f/original/2019/01/10/the-sopranos-1024x768.jpg",
      informacoes: "A vida e os conflitos de uma família ligada à máfia."
    },
    {
      titulo: "Breaking Bad",
      imagem: "https://lh4.googleusercontent.com/proxy/r-sya3ZCKlhdxIt9btTqURZSnzwZ1i9KaHW1fZtcNnVrcSbft0emR6mZBDMOQLglYH5duq4ngnr6MjJLzd1wXjKFIhU7FppwSde8MrXcLrCRw_zwVR3R-qBZVObr0ww9ZQHK",
      informacoes: "Um professor de química que vira traficante de metanfetamina."
    },
   
    {
      titulo: "The Wire",
      imagem: "https://jpimg.com.br/uploads/2021/10/thewire-reproducao-hbo.jpg",
      informacoes: ""
    },
    {
      titulo: "Game of Thrones",
      imagem: "https://tm.ibxk.com.br/2017/10/06/06112625373029.jpg?ims=1200x675",
      informacoes: ""
    },
    {
      titulo: "Mad Men: Inventando Verdades",
      imagem: "https://miro.medium.com/v2/resize:fit:700/0*PD5kGJGd1A1sdhEr.",
      informacoes: ""
    },
    {
      titulo: "Friends",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCKQKmXP1bvHhojoDjaR7tStMtybolbQe8EA&s",
      informacoes: ""
    },
    {
      titulo: "Fleabag",
      imagem: "https://s2-techtudo.glbimg.com/TsOuEcuSRG28nD01QN3HnQAgtlw=/0x0:1200x700/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/x/z/ArLSkLQWARDqww2AY5Iw/fleabag-1.jpg",
      informacoes: ""
    },
    {
      titulo: "Seinfeld",
      imagem: "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/seinfeld_onesheet_1400x2100.png?itok=FO5EDJwd",
      informacoes: ""
    },
    {
      titulo: "Chernobyl",
      imagem: "https://uauposters.com.br/media/catalog/product/cache/1/thumbnail/800x930/9df78eab33525d08d6e5fb8d27136e95/5/0/506620201013-uau-posters-series-seriado-chernobyl.jpg",
      informacoes: ""
    },
    {
      titulo: "Succession",
      imagem: "https://tm.ibxk.com.br//ms/images/highlights/000/043/111/40893.jpg",
      informacoes: ""
    }
  ];

  return (
    <div className="series">
      <h1>Página de Séries</h1>
      <p>Descubra as melhores séries aqui!</p>
      <div className="series-list">
        {series.map((serie, index) => (
          <div className="serie" key={index}>
            <img src={serie.imagem} alt={serie.titulo} className="imagem-serie" />
            <div className="texto-serie">
              <h2>{serie.titulo}</h2>
              <p>{serie.informacoes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Series;



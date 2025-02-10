import React from 'react';
import './HQs.scss';

function HQs() {
  const hqs = [
    {
      titulo: "Watchmen",
      Autor:"Alan Moore e Dave Gibbons",
      imagem: "https://tm.ibxk.com.br//ms/images/highlights/000/052/638/49570.jpg",
      informacoes: "é uma ótima hq"
    },
    {
      titulo: "Sandman",
      Autor:"Neil Gaiman",
      imagem: "https://kanto.legiaodosherois.com.br/w1200-q95-k1/wp-content/uploads/2022/08/legiao_pa0EXNg41n7O.png.webp",
      informacoes: ""
    },
    {
      titulo: "Maus",
      Autor: "Art Spiegelman",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqc5PMKF_LSkYsiTB4hLVZAsDOhPYgBi4MiA&s",
      informacoes: ""
    },
    {
      titulo: "Batman: The Dark Knight Returns",
      Autor:"Frank Miller",
      imagem: "https://m.media-amazon.com/images/I/71TfU3GnfML._AC_UF894,1000_QL80_.jpg",
      informacoes: ""
    },
    {
      titulo: "v de Vingança",
      Autor:"Alan Moore David Lloyd",
      imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi8aSkQ43wxU5QKCEJUSv247AKx7JZoobPXcp6fu0Mi5N_ZyxCfNyCTlOYuYXHShZsK0cjvPCRktq7TXMVKzNwwWn2XY3gRTtlVzlcXdZGsCO62j_GIueUN3GRxVDLSo2rBzsRtcv1I-vGA/s1600/vdevingan%C3%A7a1.jpg",
      informacoes: ""
    },
    {
      titulo: "Black Hole",
      Autor:"Charles Burns",
      imagem: "https://m.media-amazon.com/images/I/61WeDSijomL._AC_UF1000,1000_QL80_.jpg",
      informacoes: ""
    }
  ];

  return (
    <div className="hqs">
      <h1> HQs</h1>
      <p>Indicação de ótimas Histórias de quadrinhos para se ler </p>
      <div className="hqs-list">
        {hqs.map((hq, index) => (
          <div className="hq" key={index}>
            <img src={hq.imagem} alt={hq.titulo} className="imagem-hq" />
            <div className="texto-hq">
              <h2>{hq.titulo}</h2>
              <p>{hq.informacoes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default HQs;

import React from 'react';
import './filmes.scss';

function Filmes() {
  const filmes = [
    {
      titulo: "Piscose",
      imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJO7Uv_Eib7MLQEgBb9qT32EwAa89qHi3_464WQXtuv5d5ot_KBEYV6Iy66eKZSLRyOaCvbarEO40VsvONfOGN2CtdfJs0MYU6k5ekDMBxW4C2QvZQqpu1iFVgfIdVY_Mr8mwXxPE-lPE/s720/cena-do-filme-psicose-ilustrando-artigo-da-cronica-de-cinema.jpg",
      informacoes: "Um Filme de 1960 .",
      opinioes: "Psicose é um filme de suspense que mexe com a mente do espectador. A história tem várias reviravoltas e é cheia de tensão com uma performance icônica de Anthony Perkins. A cena do chuveiro e o final ainda são de arrepiar até hoje.Com toda certeza revolucionou a forma de fazer cinema"
    },
    {
      titulo: "Carrie, a Estranha",
      imagem: "https://opovoamazonense.com.br/wp-content/uploads/2024/09/O-cinema-de-rua-do-Centro-exibira-nesta-sexta-feira-Vestida-para-matar-e-Carrie-a-estranha.jpg",
      informacoes: "de 1976 é um filme de terror/mistério",
     opinioes: "Meu filme Favorito já assisti 876534354 de vezes"
    },
    {
      titulo: "Beleza Americana",
      imagem: "https://cinemaedebate.com/wp-content/uploads/2017/02/beleza-americana.jpg",
      informacoes: "Informações sobre o Filme 3.",
      opinioes: "Opiniões sobre o Filme 3."
    },
    {
      titulo: "A Mão Que Balança o Berço",
      imagem: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0C2C0EF69DA3F3F51D397546975ED7417FFABD801AA6425E6BDF1F1F76A18CE3/scale?width=1200&aspectRatio=1.78&format=webp",
      informacoes: "Informações sobre o Filme 4.",
      opinioes: "A Mão que Balança o Berço é aquele tipo de filme que te prende do começo ao fim. A mulher já tá super fragilizada, acabou de ter o bebê, o casamento tá meio ruim, e aí entra a babá, que chega cheia de boas intenções (ou pelo menos parece), mas tá ali pra destruir a família e roubar o marido dela. O jeito que o filme constrói o suspense é muito bom, te deixa com aquela sensação de o que vai dar agora?. É intenso, envolvente, e você fica torcendo pra verdade aparecer logo. Um clássico do suspense, sem dúvidas"
    },

    {
      titulo: "O Exorcista",
      imagem: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/0814/live/dcce6970-a56c-11ee-b9a7-c91b9dfa91e5.png.webp",
      informacoes: "Informações sobre o Filme 4.",
      opinioes: "Opiniões sobre o Filme 4."
    },

    {
      titulo: "Poltergeist - O Fenômeno",
      imagem: "https://veja.abril.com.br/wp-content/uploads/2022/10/heather-orourke.jpg?quality=70&strip=info&w=720&crop=1",
      informacoes: "Informações sobre o Filme ",
      opinioes: "Opiniões sobre o Filme "
    },

    {
      titulo: "O Iluminado",
      imagem: "https://www.planocritico.com/wp-content/uploads/2018/10/o_iluminado_1980_plano_critico.jpg",
      informacoes: "Informações sobre o Filme ",
      opinioes: "Opiniões sobre o Filme "
    },

    {
      titulo: "Garota Interrompida",
      imagem: "https://www.planocritico.com/wp-content/uploads/2015/10/Garota-Interompida.jpg",
      informacoes: "Informações sobre o Filme ",
      opinioes: "Opiniões sobre o Filme "
    },



    {
      titulo: "Parasita",
      imagem: "https://s2-techtudo.glbimg.com/kOiOirXGxSmbQY4R_wLSm2jCI3s=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/F/V/9Ey2LXQoiWrWDGTzAj8A/54.png",
      informacoes: "Informações sobre o Filme ",
      opinioes: "Opiniões sobre o Filme "
    },

    {
      titulo: "Blue Jasmine",
      imagem: "https://veja.abril.com.br/wp-content/uploads/2017/01/bluejasmine_mat3.jpg?crop=1&resize=1212,909",
      informacoes: "Informações sobre o Filme ",
      opinioes: "Opiniões sobre o Filme "
    }
  ];

  return (
    <div className="filmes">
      <h1>Filmes bons segundo minha opinião</h1>
      {filmes.map((filme, index) => (
        <div className="filme" key={index}>
          <img src={filme.imagem} alt={filme.titulo} className="imagem-filme" />
          <div className="texto-filme">
            <h2>{filme.titulo}</h2>
            <p>{filme.informacoes}</p>
            <p><strong>Opiniões:</strong> {filme.opinioes}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Filmes;


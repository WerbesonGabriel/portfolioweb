import React from 'react';

const Portfolio = () => {
  const projetos = [
    {
      name: 'Lista to do',
      description: 'uma lista simples.',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20230606125727/gfg.png',
      link: 'https://github.com/WerbesonGabriel/lista-to-do.git',
    },
    {
      name: 'Jogo da velha',
      description: 'um jogo da velha simples usando react.',
      image: 'https://cdn-icons-png.flaticon.com/512/9752/9752309.png',
      link: 'https://github.com/WerbesonGabriel/jogo-da-velha.git',
    },
    {
      name: 'Pokedex',
      description: 'Uma pokedex feita em react com 150 pokemons',
      image: 'https://reactjsexample.com/content/images/2023/04/Code-2023-24-16-18.jpg',
      link: 'https://github.com/WerbesonGabriel/pokedex.git',
    },
  ];

  return (
    <div className="portfolio">
      <h2>Meus Projetos</h2>
      <div className="projects-list">
        {projetos.map((projeto, index) => (
          <div key={index} className="project-item">
            <img src={projeto.image} alt={projeto.name} />
            <h3>{projeto.name}</h3>
            <p>{projeto.description}</p>
            <a href={projeto.link} target="_blank" rel="noopener noreferrer">
              Ver no GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;


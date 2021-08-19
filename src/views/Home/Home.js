import './Home.css';

const Home = () => {
  return (
    <div className="Home">
      <p>
        Bem vindo ao Pokemon da Griaule. Escolha o que deseja fazer no menu.
      </p>
      <p>
        Listar: Lista todos os pokemons em páginas de 20 em 20.
      </p>
      <p>
        Escolher: Seleciona os pokémons desejados usando drag and drop.
      </p>
      <img src="https://thumbs.gfycat.com/BlackOffbeatBufeo-size_restricted.gif" alt="pikachu"/>
    </div>
  );
}

export default Home;

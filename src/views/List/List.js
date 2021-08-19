import './List.css';
import { service } from '../../services/index'
import { Component } from 'react'
import PokemonCard from '../../components/PokemonCard/PokemonCard'

class List extends Component {
  constructor(props) {
    super(props)

    this.limit = 20
    this.offset = 0
    this.state = {
      pokemons: []
    }

    this.updateList()
  }

  updateList() {
    service.list(this.offset, this.limit).then(res => {
      const newPokemons = res.data.results
      this.setState({ pokemons: newPokemons }, 
        window.scrollTo({top: 0})
      )
    })
  }

  next() {
    // There are 1118 pokemons, so 1100 is max offset
    this.offset = Math.min(this.offset + this.limit, 1100)
    this.updateList()
  }

  prev() {
    // 0 is min offset
    this.offset = Math.max(this.offset - this.limit, 0)
    this.updateList()
  }
  
  render() {
    return (
      <div className="Main">
        <p>
          Listagem dos pokemons - {this.offset} a {this.offset + this.limit}
        </p>
        
        <div className="CardsWrapper">
          {this.state.pokemons.map((pokemon, ind) => {
            return <PokemonCard key={this.offset + ind} url={pokemon.url} name={pokemon.name} />
          })}
        </div>

        <div className="Footer">
          <div className="Clickable" onClick={() => this.prev()}>Anterior</div>
          <div className="Clickable" onClick={() => this.next()}>Próximo</div>
        </div>
      </div>
    );
  }
}

export default List;

import './PokemonCard.css';
import { Component } from 'react'
import { service } from '../../services/index'

class PokemonCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemon: {
        name: props.name,
        height: '0',
        weight: '0',
        types: [{type: { name: 'Carregando...'}}],
        abilities: [{ability: { name: 'Carregando...'}}],
        sprites: {
          front_default: 'https://i.gifer.com/Yg6z.gif'
        }
      },
    }
  }

  componentDidMount() {
    console.log(this.props.url)
    service.pokemon(this.props.url).then(res => {
      setTimeout(() => {
        this.setState({ pokemon: res.data })
      }, 500)
    })
  }

  render() {
    return (
      <div className="CardWrapper">
        <div className="SpriteWrapper">
          <img src={this.state.pokemon.sprites.front_default} alt={this.state.pokemon.name}/>
        </div>
        <div className="NameWrapper">
          {this.state.pokemon.name.toUpperCase()}
        </div>
        <div className="InfoWrapper">
          <div className="Info">
            <b>Altura e Peso:</b> {this.state.pokemon.height*10}cm e {this.state.pokemon.weight/10}kg
          </div>
          <div className="Info">
            <b>Tipo:</b> {this.state.pokemon.types.map((elem, ind) => {
              return ind === 0 ? elem.type.name : ', ' + elem.type.name
            })}
          </div>
          <div className="Info">
            <b>Habilidades:</b> {this.state.pokemon.abilities.map((elem, ind) => {
              return ind === 0 ? elem.ability.name : ', ' + elem.ability.name
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonCard;

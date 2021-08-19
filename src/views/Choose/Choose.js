import './Choose.css';
import React, { Component } from 'react'
import PokemonCard from '../../components/PokemonCard/PokemonCard'

class Choose extends Component {
  constructor(props) {
    super(props)
    this.dragRef = React.createRef()
    this.state = {
      message: 'Escolha seus pokemóns os movendo da esquerda para a direita',
      left: [
        <PokemonCard key={1} url='https://pokeapi.co/api/v2/pokemon/1/' name='Bulbasaur' />,
        <PokemonCard key={2} url='https://pokeapi.co/api/v2/pokemon/4/' name='Charmander' />,
        <PokemonCard key={3} url='https://pokeapi.co/api/v2/pokemon/7/' name='Squirtle' />
      ],
      dragging: null, 
      right: [],
    }
  }

  handleDragStart(index, isRight=false) {
    this.setState(state => {
      if (!isRight) {
        const left = state.left.filter((_, i) => i !== index)
        const dragging = state.left[index]
        return {
          ...state,
          left, 
          dragging
        }
      }

      const right = state.right.filter((_, i) => i !== index)
      const dragging = state.right[index]
      return {
        ...state,
        right, 
        dragging
      }
    })
  }

  handleDragging(e) {
    if (this.state.dragging) {
      const l = e.nativeEvent.clientX - (this.dragRef.current.offsetWidth / 2)
      const t = e.nativeEvent.clientY - (this.dragRef.current.offsetHeight / 2)
      this.dragRef.current.style.left = l + 'px'
      this.dragRef.current.style.top = t + 'px'
    }
  }

  handleDrop(evt) {
    const isRight = evt.nativeEvent.clientX / window.innerWidth > 0.5

    this.state.dragging && this.setState(state => {
      const left = [...state.left]
      const right = [...state.right]
      if (isRight) {
        right.push(state.dragging)
      } else {
        left.push(state.dragging)
      }
      const dragging = null
      
      const message = right.length === 0 ? 'Nenhum pokémon escolhido.' : 'Pokémon(s) escolhido(s): ' + right.map((item, ind) => {
        return item.props.name
      })

      return {
        left, 
        right,
        dragging,
        message
      }
    })
  }

  render() {
    return (
      <div className="Main" onMouseMove={(e) => this.handleDragging(e)}>
        <p>
          {this.state.message}
        </p>

        <div 
          className="FloatingDragDropWrapper" 
          ref={this.dragRef} 
          onMouseUp={(evt) => this.handleDrop(evt)}
        >
          {this.state.dragging}
        </div>

        <div className="ChooseArea">
          <div className="LeftArea">
            {this.state.left.map((pokemonCard, ind) => {
              return ( 
                <div 
                  key={pokemonCard.key} 
                  className="DragDropWrapper" 
                  onMouseDown={(e) => this.handleDragStart(ind)}
                >
                  {pokemonCard}
                </div>
              )
            })}
          </div>
          <div className="Separator"></div>
          <div className="RightArea">
            {this.state.right.map((pokemonCard, ind) => {
              return ( 
                <div 
                  key={pokemonCard.key} 
                  className="DragDropWrapper"
                  onMouseDown={(e) => this.handleDragStart(ind, true)}
                >
                  {pokemonCard}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Choose;

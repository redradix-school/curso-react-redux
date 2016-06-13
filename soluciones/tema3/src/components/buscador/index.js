import React, { Component } from 'react';
import Title from './title';
import Form from './form';
import CharacterList from './character_list';
import Summary from './summary';
import { characters, families, seasons } from '../../data/got';

// Filtra los personajes a partir de una "consulta"
function search(characters, filter){
  const nameRegEx = new RegExp(filter.name, 'i');
  return characters.filter(c => {
    return (
      //por nombre de personaje o actor (con expresion regular)
      (nameRegEx.test(c.name) || nameRegEx.test(c.actor))
      //por familia
      && (filter.family.trim() === '' || c.family === filter.family)
      //solo vivos
      && (!filter.aliveOnly || c.alive)
      //aparece en tempoadas
      && (filter.seasons.every(s => c.seasons.includes(s)))
    );
  });
}

class Buscador  extends Component {
  constructor(props){
    super(props);
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.state = {
      characters: characters,
      familyNames: families.sort(),
      allSeasons: seasons.sort(),
      filter: {
        name: '',
        family: '',
        aliveOnly: false,
        seasons: []
      }
    }
  }

  handleQueryChange(changes){
    const currentFilter = this.state.filter;
    const newFilter = Object.assign({}, currentFilter, changes);
    //TODO: actualizar el filtro en el state del componente
    this.setState({
      filter: newFilter
    });
  }

  render(){
    //los resultados siempre son una búsqueda con el filtro
    const results = search(this.state.characters, this.state.filter);
    return (
      <div className='search-container'>
        <div className='search-engine'>
          <Title text='Buscador Juego de Tronos' />
          <Form
            filter={ this.state.filter }
            families={ this.state.familyNames }
            allSeasons={ this.state.allSeasons }
            onQueryChange={ this.handleQueryChange } />
          <Summary total={ results.length } />
          <CharacterList items={ results } />
        </div>
      </div>
    )
  }
}

export default Buscador;

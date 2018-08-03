import React from 'react';
import { requestAllPokemon } from './actions/pokemon_action';
class PokemonIndex extends React.Component {
  componentDidMount() {
    this.proprs.requestAllPokemon
  };

  render() {
    const pokemonitems = this.props.pokemon.map(pokemon => (
      <li>Name: {pokemon.name} Image: {pokemon.image_url}</li>
    )
    return(
      <div>
        <ul className="pokemon-index">
          { pokemonitems }
        </ul>
      </div>
    );
  }








}
export default PokemonIndex;

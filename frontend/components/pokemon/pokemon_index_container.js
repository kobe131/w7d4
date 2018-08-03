import connect from 'react-redux';
import { requestAllPokemon } from './actions/pokemon_action';
import { selectAllPokemon } from './reducers/selectors.js';
import { pokemonIndex } from './pokemon_index.jsx';

const mapStateToProps = state => ({
  todos: allTodos(state),
  state
});

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: todo => dispatch(receiveTodo(todo))
});

export default connect(mapStateToProps,mapDispatchToProps)(PokemonIndex);

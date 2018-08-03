import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon } from './util/api_util';
import { receiveAllPokemon } from './actions/pokemon_action';
import { configureStore } from './store/store.js';
import { Provider } from 'react-redux';
import { requestAllPokemon } from './actions/pokemon_action';
import { selectAllPokemon } from './reducers/selectors.js';

const Root = ({ store }) => (
  <Provider store={store}>
    <div>Hello, world!</div>
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.x = 5;

  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.requestAllPokemon = requestAllPokemon;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);

  window.selectAllPokemon = selectAllPokemon;

});
export default Root;

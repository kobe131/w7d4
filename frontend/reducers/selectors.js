
export const selectAllPokemon = (state) => {
  return values(state.entities.pokemon);
};

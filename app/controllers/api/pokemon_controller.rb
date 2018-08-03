class Api::PokemonController < ApplicationController

  def index
    @pokemons = Pokemon.all
    render :index

  end

  def show
    @pokemon = Pokemon.find(params[:id])
    render :show
  end

  def pokemon_params
    params.require(:pokemon).permit(:image_url, :attack, :defense, :name, :poke_type, moves: [])
  end
end

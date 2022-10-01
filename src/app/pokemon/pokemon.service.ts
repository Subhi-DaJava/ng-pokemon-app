import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Injectable()

export class PokemonService { // créer un service, 3 méthodes 1. getPokemonList, 2.getPokemonById(id), 3.getPokemonTypeList

  getPokemonList(): Pokemon[] {
    return POKEMONS;
  }

  getPokemonById(pokemonId: number): Pokemon | undefined {
    return POKEMONS.find(pokemon => pokemon.id == pokemonId);
  } 
  getPokemonTypeList(): string[] {
    return [
      'Plante', 
      'Feu',
      'Eau', 
      'Insect',
      'Normal', 
      'Electrick',
      'Poison',
      'Fée',
      'Vol',
      'Combat',
      'Psy'
    ];
  }
}

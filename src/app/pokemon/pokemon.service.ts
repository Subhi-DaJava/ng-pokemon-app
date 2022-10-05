import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable()

export class PokemonService { // créer un service, 3 méthodes 1. getPokemonList, 2.getPokemonById(id), 3.getPokemonTypeList

  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<Pokemon[]> {
    //return POKEMONS;

    // retourner un flux
    return this.http.get<Pokemon[]>('api/pokemons').pipe( // plus d'infos
      tap((pokemonList) => console.table(pokemonList)),
      catchError((error) => {
        console.log(error);
        return of([]); // retourne un tableau vide pour ne pas cracher l'app
      })
    );
  }

  getPokemonById(pokemonId: number): Observable<Pokemon|undefined> {
    //return POKEMONS.find(pokemon => pokemon.id == pokemonId);
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((pokemon) => console.table(pokemon)),
      catchError((error) => {
        console.log(error);
        return of(undefined); // retourne un undefind en cas d'aucun pokémon pour ne pas cracher l'app
      })
    );
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

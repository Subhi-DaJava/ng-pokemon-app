import { HttpClient, HttpHeaders } from '@angular/common/http';
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
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getPokemonById(pokemonId: number): Observable<Pokemon|undefined> {
    //return POKEMONS.find(pokemon => pokemon.id == pokemonId);
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
     // retourne un undefind en cas d'aucun pokémon pour ne pas cracher l'app
    );
  } 

  searchPokemonList(term: string): Observable<Pokemon[]> {
    if(term.length <= 1) {
      return of ([]);
    }

    return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  updatePokemon(pokemon: Pokemon): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' }) };

    return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
      tap((res) => this.log(res)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deletePokemonById(pokemonId: number): Observable<null> {
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
      tap((res) => this.log(res)),
      catchError((err) => this.handleError(err, null))
    );
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' }) };

      return this.http.post<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
        tap((res) => this.log(res)),
        catchError((err) => this.handleError(err, null))
      );
  }

  private log(response: any) { // log(Pokemon[]|Pokemon|undefined)
    console.table(response);
  }
  private handleError(error: Error, errorValue: any) { // []|undefind
    console.error(error); 
    return of(errorValue);
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

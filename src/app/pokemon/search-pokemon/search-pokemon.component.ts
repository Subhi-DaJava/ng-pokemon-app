import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
})
export class SearchPokemonComponent implements OnInit {
  // construre ce flux de donnée {.... "a".. "ab"..."abz"..."ab"..."abc".....}
  searchTerms = new Subject<string>(); // le flux de recherche de l'utilisateur, à la librairie
  // afficher {...pokemonList(a)....pokemonList(ab).......}
  pokemon$: Observable<Pokemon[]>; // au début est vide

  constructor(
    private router: Router,
    private pokemonService: PokemonService
    ) { }

  ngOnInit(): void {
    // this.pokemon$.subscribe(pokemons => this.pokemons = pokemons); === (click)="goToDetail(pokemon)"
    this.pokemon$ = this.searchTerms.pipe(
      //{.... "a"."ab"..."abz"."ab"...."abc".....}, chaque point représente 100 milliseconde
      debounceTime(300), // un delais
      // {......"ab"...."ab"...."abc"......}
      distinctUntilChanged(), // déliminer les requêtes, obtenir un nouveau flux
      // {......"ab"......."abc"......}
      switchMap((term) => this.pokemonService.searchPokemonList(term))
      // {.......pokemonLis<"ab">.....pokemonList<"abc">......}
      // concatMap / mergeMap / SwitchMap
    );
  }

  search(term: string) {
    this.searchTerms.next(term); // {.... "a".. "ab"..."abz"..."ab"..."abc".....}s
  }

  goToDetail(pokemon: Pokemon) {
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }
}

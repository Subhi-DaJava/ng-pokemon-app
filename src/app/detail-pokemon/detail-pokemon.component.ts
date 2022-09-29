import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import{ POKEMONS } from '../mock-pokemon-list'; // importer les Pokémons
import { Pokemon } from '../pokemon'; // importer modèle pokémon
@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit {
  
  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() { // accès au router qui permer d'accéder à l'id dans la route, dans la Url 
    this.pokemonList = POKEMONS;
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
   if(pokemonId) {
    this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
   }
   
  }

  goToPokemonList() {
    this.router.navigate(['/pokemons']);
   }
}

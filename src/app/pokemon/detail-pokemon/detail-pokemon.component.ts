import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Pokemon } from '../pokemon'; // importer modèle pokémon
import { PokemonService } from '../pokemon.service';
@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit {
  
  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService) { }

  ngOnInit() { // accès au router qui permer d'accéder à l'id dans la route, dans la Url 
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');

   if(pokemonId) {
    this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
   }
   
  }
  goToPokemonList() {
    this.router.navigate(['/pokemons']);
   }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  template: `
  <h2 class="center">Editer {{ pokemon?.name }}</h2> <!--? rien afficher-->
  <p *ngIf="pokemon" class="center"> <!-- if pokemon exite-->
    <img [src]="pokemon.picture">
  </p>
  <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form> <!--  @Input() pokemon: Pokemon; -->
  `,
  styles: [
  ]
})

export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon|undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id'); // recupère l'idendifiant depuis l'Url
    if(pokemonId) {
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    } else {
      this.pokemon = undefined;
    }
  }

}

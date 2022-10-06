import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-form', // c'est une balise HTML personalisée
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
  // Pokemon est déjà bindé avec la directive NgModele, mis à jour ce pokemon
  @Input() pokemon: Pokemon; // (appliqué pour tout l'appli)Lorqus on utilise app.pokemon.form, il faut passer une propriété d'entrer est Pokemon

  types: string[]; // propriété

  isAddForm: boolean;

  constructor(
    private pokemonService: PokemonService,
    private router: Router) { }

  ngOnInit() { // récupérer la liste de Pokémons
    // pokemonTypeList
    this.types = this.pokemonService.getPokemonTypeList();
    this.isAddForm = this.router.url.includes('add');
  }

  hasType(type: string): boolean {
    return this.pokemon.types.includes(type); 
  }
  selectType($event: Event, type: string) { // cocher ou décocher les cases, ajouter ou enlever
    const isChecked: boolean = ($event.target as HTMLInputElement).checked; // vient de DOM
    
    if(isChecked) {
      // ajouter les types
      this.pokemon.types.push(type);
    }
    else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1); // retirer le type
    }
  }
  // deux cas d'erreur, un - trois types
  isTypesValid(type: string): boolean {
    // Si user selectionne une seule case, if faut l'empêcher de pouvoir désélectionner cette case, sinon il pourrait choisir ou remseigner aucun un type pour un pokémon, aumoin un type
    if(this.pokemon.types.length == 1 && this.hasType(type)) {
      return false; // si le pokemon a un seul type, sur lequel on travaille, on bloque cette checkbox  
    }
    // Si user selecionne déjà trois cases, il faut l'empêcher des les cases, lui laiser des possibilités de pouvir désélectionner une des cases déjà cochées
    if(this.pokemon.types.length > 2 && !this.hasType(type)) {
      return false;
    } 

    return true;
  }

  onSubmit() {
    if(this.isAddForm) {
      this.pokemonService.addPokemon(this.pokemon).
      subscribe((pokemon: Pokemon) => this.router.navigate(['/pokemon', pokemon.id]));
    }
    else {
      this.pokemonService.updatePokemon(this.pokemon)
      .subscribe(() => this.router.navigate(['/pokemon', this.pokemon.id])
      // .subscribe(() => this.router.navigate(['/pokemon', this.pokemon.id]), (error) => snackbar error);
      );
      //console.log('Submit form ! ');
      //this.router.navigate(['/pokemon', this.pokemon.id]); // rediriger sur la page de pokemon qui vient de modifiers
    }
  }
}

import { Component, OnInit } from '@angular/core'; // importer l'élement Component from @angular/core

import { POKEMONS } from './mock-pokemon-list'; 
import { Pokemon } from './pokemon';
@Component({ // construire un comosant web avec Angular, deux options: selector et template, une vue + une classe
  selector: 'app-root', // donner un nom à notre composant afin d'identifier par la suite, insérer la balise html <app-root>, élément personnalisé, propre balise personnalisé
  // Définier le code html associé au composant web, avec bactic ``, afficher le title, afficher la list de Pokémons
  templateUrl: `app.component.html` 
  
})
export class AppComponent implements OnInit{ //initialisation à nos composants 
  // export : exporter ce composant pour le rend disponible ailleur dans l'application
  //title = 'application-pokemon-app'; // pousser cette valeur dans la template
  pokemonList: Pokemon[] = POKEMONS; //Un tableau de Pokémons, un type de Pokemon(typage)
  pokemonSelected: Pokemon|undefined; // propriété pokemon est un type Pokémon, undefinded, méthode renvoie Pokemon ou undefinded
  
  ngOnInit() {
    console.table(this.pokemonList) // this reference out of the scope 
    throw new Error('Method not implemented.');
  } 

  selectPokemon(pokemonId: string) { //Contrat d'interface => event DOM
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId); // la méthode de JavaScript pout trouver un prédicat
    if(pokemon) {
      console.log(`Vous avez demandé le pokémon: ${pokemon.name}.`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`Vous avez demandé un pokémon qui n'existe pas.`);
      this.pokemonSelected = pokemon;
    }
    // syntax bactique (ES6) dans une chaîne de charactères où ajouter une variable équivalant de la syntax au-dessous
    //console.log('Vous avez cliquer sur le pokémon' + pokemonName);
  }
}
 
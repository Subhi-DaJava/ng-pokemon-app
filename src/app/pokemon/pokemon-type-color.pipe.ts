import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ // un pipe, non composant ni directive
  name: 'pokemonTypeColor'
})
export class PokemonTypeColorPipe implements PipeTransform {

  //transform(value: unknown, ...args: unknown[]): unknown { // prendre en entrée une valeur qui va correspondre à la valeur sur laquelle on applique le pipe et qui renvoie la donnée transformée
   // return null;
  //}

  transform(type: string): string { // recevoir un type de pokemon, Feu, Eau, puis le transformer en une coleur 
  
    let color: string;
  
    switch (type) {
      case 'Feu':
        color = 'red lighten-1';
        break;
      case 'Eau':
        color = 'blue lighten-1';
        break;
      case 'Plante':
        color = 'green lighten-1';
        break;
      case 'Insecte':
        color = 'brown lighten-1';
        break;
      case 'Normal':
        color = 'grey lighten-3';
        break;
      case 'Vol':
        color = 'blue lighten-3';
        break;
      case 'Poison':
        color = 'deep-purple accent-1';
        break;
      case 'Fée':
        color = 'pink lighten-4';
        break;
      case 'Psy':
        color = 'deep-purple darken-2';
        break;
      case 'Electrik':
        color = 'lime accent-1';
        break;
      case 'Combat':
        color = 'deep-orange';
        break;
      default:
        color = 'grey';
        break;
    }
  
    return 'chip ' + color; // retourner une classe chip un petit rond de coleur => combiner la classe et la couleur, une petite bull de couleur 
  
  }

}

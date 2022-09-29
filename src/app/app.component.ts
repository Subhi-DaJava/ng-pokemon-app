import { Component } from '@angular/core'; // importer l'élement Component from @angular/core

@Component({ // construire un comosant web avec Angular, deux options: selector et template, une vue + une classe
  selector: 'app-root', // donner un nom à notre composant afin d'identifier par la suite, insérer la balise html <app-root>, élément personnalisé, propre balise personnalisé
  // Définier le code html associé au composant web, avec bactic ``, afficher le title, afficher la list de Pokémons
  templateUrl: `app.component.html` 
  
})
export class AppComponent { }
 
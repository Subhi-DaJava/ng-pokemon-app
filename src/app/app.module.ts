import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // fournir les éléments essentiels pour le fonctionnement de l'app, par exemple, le directive egi

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonModule } from './pokemon/pokemon.module';

@NgModule({ // déclarer le module auprès de Angular
  declarations: [ // une liste des tous les composants 
    AppComponent, 
    PageNotFoundComponent 
  ],
  imports: [
    BrowserModule, // importer d'autres modules 
    PokemonModule,
    AppRoutingModule
    
  ],
  providers: [], // injection dépendance d'angular
  bootstrap: [AppComponent] // une option, composant racine, lancer dès le démarrage de l'app
})
export class AppModule { }

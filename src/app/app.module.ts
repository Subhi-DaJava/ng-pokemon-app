import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // fournir les éléments essentiels pour le fonctionnement de l'app, par exemple, le directive egi

import { AppComponent } from './app.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({ // déclarer le module auprès de Angular
  declarations: [ // une liste des tous les composants 
    AppComponent, 
    BorderCardDirective, PokemonTypeColorPipe, ListPokemonComponent, DetailPokemonComponent, PageNotFoundComponent 
  ],
  imports: [
    BrowserModule, // importer d'autres modules 
    AppRoutingModule
  ],
  providers: [], // injection dépendance d'angular
  bootstrap: [AppComponent] // une option, composant racine, lancer dès le démarrage de l'app
})
export class AppModule { }

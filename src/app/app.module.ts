import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // fournir les éléments essentiels pour le fonctionnement de l'app, par exemple, le directive egi

import { AppComponent } from './app.component';
import { BorderCardDirective } from './border-card.directive';

@NgModule({ // déclarer le module auprès de Angular
  declarations: [ // une liste des tous les composants 
    AppComponent, 
    BorderCardDirective 
  ],
  imports: [
    BrowserModule // importer d'autres modules 
  ],
  providers: [], // injection dépendance d'angular
  bootstrap: [AppComponent] // une option, composant racine, lancer dès le démarrage de l'app
})
export class AppModule { }

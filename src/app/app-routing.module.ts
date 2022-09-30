import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [ // une constant, déclarer trois routes, une route par défaut, une URL vide localhost:4200
    { path: '', redirectTo: 'pokemons', pathMatch: 'full' }, // au démarrage afficher la liste de Pokémonss
    { path: '**', component: PageNotFoundComponent } // Intercepter toutes les routes de problème
]; 
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
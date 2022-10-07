import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { LoaderComponent } from './loader/loader.component';
import { AuthGuard } from '../auth.guard';
// mettre les routes plus spécifiques en haut, les routes globales en bas
const pokemonRoutes: Routes = [ // une constant, déclarer trois routes, une route par défaut, une URL vide localhost:4200
    { path: 'edit/pokemon/:id', component:EditPokemonComponent, canActivate: [AuthGuard] }, // ajouter une route, un chemin pour éditer un pokémon
    { path: 'pokemon/add', component: AddPokemonComponent }, // la route pokemon/add redirige vers AddPokemonComponent, vers le template <app-pokemon-form> dans AddPokemonComponent
    { path:'pokemons', component: ListPokemonComponent },
    { path: 'pokemon/:id', component: DetailPokemonComponent }
]; 

@NgModule({
  declarations: [
    ListPokemonComponent, 
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent,
    AddPokemonComponent,
    SearchPokemonComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule, // inject le FormsModule au niveau du module Pokémons
    RouterModule.forChild(pokemonRoutes)
  ],
  providers: [PokemonService] // service que pour pokemon module
})
export class PokemonModule { }

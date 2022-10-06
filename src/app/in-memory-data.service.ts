import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'; // Ajouter une interface (appelée: in-memory-db-service ), qui nous demande d’implémenter une méthode pour simuler notre base de données 
import { POKEMONS } from './pokemon/mock-pokemon-list';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const pokemons = POKEMONS; // reassigner l'instance puis la retourner
      return { pokemons };
  }
}

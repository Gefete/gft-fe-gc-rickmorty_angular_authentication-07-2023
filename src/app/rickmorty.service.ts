import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickmortyService {
  elemento: any = [];

  private charactersSubject = new BehaviorSubject<any>(null);
  characters = this.charactersSubject.asObservable();
  
  constructor( private http:HttpClient) {

  }
  
  // Crea numeros aleatorios para buscar caracteres en la API
  setRandomized(){
    for (let i = 0; i < 5; i++) {
      this.elemento!.push(Math.floor(Math.random() * 825) + 1);
    }
  }

  retornar(){
    
    return this.http.get("https://rickandmortyapi.com/api/character/"+this.elemento![0]+","+
    this.elemento![1]+","+this.elemento![2]+","+this.elemento![3]+","+this.elemento![4]).pipe(map((response): any => response));
  }

  getItem(itemID:string){
    return this.http.get("https://rickandmortyapi.com/api/character/"+itemID).pipe(map((response): any => response));
  }

}

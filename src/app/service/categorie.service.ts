import { Injectable } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { Console } from 'console';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private _categories: Categorie[];

  constructor() {
    this._categories = [
      new Categorie(0, "Indéfini"),
      new Categorie(1, "PC"),
      new Categorie(2, "Imprimante"),
      new Categorie(3, "Tablette")
    ];
  }

  // Getters

  public get categories(): Categorie[] {
    return this._categories;
  }

  // Methods

  public getCategorie(id: number): Categorie {
    return  this._categories.find(
      cat => cat.idCat === id
    )!;
  }
}

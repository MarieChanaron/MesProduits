import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { CategorieService } from './categorie.service';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private _produits: Produit[];

  constructor(private categorieService: CategorieService) {
    this._produits = [
      new Produit(1, "PC Asus", 3000.60, new Date("01/14/2011"), categorieService.categories[1]),
      new Produit(2, "Imprimante Epson", 450, new Date("12/17/2010"), categorieService.categories[2]),
      new Produit(3, "Tablette Samsung", 900.123, new Date("02/20/2020"), categorieService.categories[3])
    ];
  }

  public get produits(): Produit[] {
    return this._produits;
  }

  public getProduit(id: number): Produit {
    const produit: Produit = this.produits.find(
      el => el.idProduit === id
    )!;
    return produit;
  }

  public addProduit(produit: Produit): void {
    this.produits.push(produit);
  }

  public deleteProduit(produit: Produit): void {
    const index: number = this.produits.indexOf(produit, 0);
    if (index > -1) this.produits.splice(index, 1);
  }

  public updateProduit(produit: Produit): void {
    const id: number = produit.idProduit!;
    const prod: Produit = this.getProduit(id);
    const index: number = this.produits.indexOf(prod, 0);
    this.produits[index] = produit;
  }

}

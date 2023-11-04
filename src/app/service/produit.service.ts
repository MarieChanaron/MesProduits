import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produits: Produit[];

  constructor() {
    this.produits = [
      {
        idProduit: 1,
        nomProduit: "PC Asus",
        prixProduit: 3000.600,
        dateCreation: new Date("01/14/2011")
      },
      {
        idProduit: 2,
        nomProduit: "Imprimante Epson",
        prixProduit: 450,
        dateCreation: new Date("12/17/2010")
      },
      {
        idProduit: 3,
        nomProduit: "Tablette Samsung",
        prixProduit: 900.123,
        dateCreation: new Date("02/20/2020")
      }
    ];
  }

  getProduits(): Produit[] {
    return this.produits;
  }

  getProduit(id: number) {
    const produit = this.produits.find(
      el => el.idProduit === id
    )!;
    return produit;
  }

  addProduit(produit: Produit): void {
    this.produits.push(produit);
  }

  deleteProduit(produit: Produit): void {
    const index = this.produits.indexOf(produit, 0);
    if (index > -1) this.produits.splice(index, 1);
  }

  updateProduit(produit: Produit): void {
    const id: number = produit.idProduit!;
    this.produits[id] = produit;
  }

}

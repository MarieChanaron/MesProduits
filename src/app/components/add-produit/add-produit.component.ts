import { Component, OnInit } from '@angular/core';
import { Produit } from '../../model/produit.model';
import { ProduitService } from 'src/app/service/produit.service';
import { CategorieService } from 'src/app/service/categorie.service';
import { Categorie } from 'src/app/model/categorie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html'
})
export class AddProduitComponent implements OnInit {

  private _newProduit: Produit;
  private _message!: string;
  private _categories: Categorie[];
  private _updatedCatId: number;

  constructor(
    private produitService: ProduitService,
    private categorieService: CategorieService, 
    private router: Router) {
      this._categories = this.categorieService.categories;
      this._newProduit = new Produit(this.generateId(), "", 0, new Date(), this._categories[0]);
      this._updatedCatId = 0;
  }

  ngOnInit(): void {
  }

  // Getters

  public get newProduit(): Produit {
    return this._newProduit;
  }

  public get message(): string {
    return this._message;
  }

  public get categories(): Categorie[] {
    return this._categories;
  }

  public get updatedCatId(): number {
    return this._updatedCatId;
  }

  // Setters

  public set updatedCatId(id: number) {
    this._updatedCatId = Number(id);
  }

  // Methods

  public addProduit(): Function {
    const categorie: Categorie = this.categorieService.getCategorie(this._updatedCatId);
    this._newProduit.categorie = categorie;
    this.produitService.addProduit(this._newProduit);
    this._message = "Le produit " + this._newProduit.nomProduit + " a été ajouté avec succès !";
    const timeout: NodeJS.Timeout = setTimeout( () => {
      this.router.navigate(["produits"]);
    }, 1000);
    const clearTimeout: Function = () => clearTimeout(timeout);
    return clearTimeout;
  }

  private generateId(): number {
    let idMax = 0;
    for (let p of this.produitService.produits) {
      const id = p.idProduit;
      if (id > idMax) idMax = id;
    }
    return idMax + 1;
  }

}

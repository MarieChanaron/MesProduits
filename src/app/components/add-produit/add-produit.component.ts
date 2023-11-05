import { Component, OnInit } from '@angular/core';
import { Produit } from '../../model/produit.model';
import { ProduitService } from 'src/app/service/produit.service';
import { CategorieService } from 'src/app/service/categorie.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html'
})
export class AddProduitComponent implements OnInit {

  newProduit: Produit;
  message: string = "";

  constructor(
    private produitService: ProduitService,
    private categorieService: CategorieService) {
    this.newProduit = new Produit(this.generateId(), "", 0, new Date(), categorieService.categories[0]);
  }

  ngOnInit(): void {
  }

  public addProduit(): void {
    this.produitService.addProduit(this.newProduit);
    this.message = "Le produit " + this.newProduit.nomProduit + " a été ajouté avec succès !";
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

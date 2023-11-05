import { Component, OnInit } from '@angular/core';
import { Produit } from '../../model/produit.model';
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html'
})
export class ProduitsComponent implements OnInit {

  produits?: Produit[];

  constructor(private service: ProduitService) { // Injection des dépendances
  }

  ngOnInit(): void {
    this.produits = this.service.getProduits();
  }

  deleteProduit(produit: Produit): void {
    const confirmation = confirm("Êtes-vous sûr ?")
    if (confirmation) this.service.deleteProduit(produit);
  }

  trierProduits(): void {
    this.produits! = this.produits!.sort((n1, n2) => {
      if (n1.idProduit! > n2.idProduit!) {
        return 1;
      } else if (n1.idProduit! > n2.idProduit!) {
        return -1;
      } else {
        return 0;
      }
    });
  }
}

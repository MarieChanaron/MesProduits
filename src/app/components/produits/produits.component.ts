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

  deleteProduit(produit: Produit) {
    const confirmation = confirm("Êtes-vous sûr ?")
    if (confirmation) this.service.deleteProduit(produit);
  }

}

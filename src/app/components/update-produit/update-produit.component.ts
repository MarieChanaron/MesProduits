import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/model/produit.model';
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: [
  ]
})
export class UpdateProduitComponent implements OnInit {

  currentProduit!: Produit;

  constructor(
    private service: ProduitService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id: string = this.route.snapshot.params['id'];
    this.currentProduit = this.service.getProduit(Number(id))!;
  }

  updateProduit(produit: Produit): void {
    this.service.updateProduit(produit);
  }
}

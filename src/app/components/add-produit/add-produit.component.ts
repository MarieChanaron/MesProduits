import { Component, OnInit } from '@angular/core';
import { Produit } from '../../model/produit.model';
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  newProduit = new Produit();
  message?: string;

  constructor(private service: ProduitService) {}

  ngOnInit(): void {
  }

  addProduit() {
    this.service.addProduit(this.newProduit);
    this.message = "Le produit " + this.newProduit.nomProduit + " a été ajouté avec succès !";
  }

}

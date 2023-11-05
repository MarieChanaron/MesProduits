import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  formattedDate!: string;

  constructor(
    private service: ProduitService,
    private route: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    const id: string = this.route.snapshot.params['id'];
    this.currentProduit = this.service.getProduit(Number(id))!;
    this.formattedDate = this.datePipe.transform(this.currentProduit.dateCreation, 'yyyy-MM-dd')!;
  }

  public updateProduit(produit: Produit): void {
    this.service.updateProduit(produit);
    this.router.navigate(["produits"]);
  }
}

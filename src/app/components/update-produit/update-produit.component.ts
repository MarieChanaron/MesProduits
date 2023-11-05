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

  private _currentProduit!: Produit;
  private _formattedDate!: string;

  constructor(
    private service: ProduitService,
    private route: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    const id: string = this.route.snapshot.params['id'];
    this._currentProduit = this.service.getProduit(Number(id))!;
    this._formattedDate = this.datePipe.transform(this._currentProduit.dateCreation, 'yyyy-MM-dd')!;
  }

  // Getters

  public get currentProduit(): Produit {
    return this._currentProduit;
  }

  public get formattedDate(): string {
    return this._formattedDate;
  }

  // Setters

  public set formattedDate(date: string) {
    this._formattedDate = date;
  }

  // Methods

  public updateProduit(produit: Produit): void {
    this.service.updateProduit(produit);
    this.router.navigate(["produits"]);
  }
}

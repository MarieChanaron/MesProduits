import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/model/categorie.model';
import { Produit } from 'src/app/model/produit.model';
import { CategorieService } from 'src/app/service/categorie.service';
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: [
  ]
})
export class UpdateProduitComponent implements OnInit {

  private _currentProduit: Produit;
  private _formattedDate: string;
  private _updatedCategoryId: number;
  private _categories: Categorie[];

  constructor(
    private service: ProduitService,
    private route: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe,
    private categoryService: CategorieService
  ) {
    const id: string = this.route.snapshot.params['id'];
    this._currentProduit = this.service.getProduit(Number(id))!;
    this._formattedDate = this.datePipe.transform(this._currentProduit.dateCreation, 'yyyy-MM-dd')!;
    this._updatedCategoryId = this._currentProduit.categorie.idCat;
    this._categories = this.categoryService.categories;
  }

  ngOnInit(): void {
  }

  // Getters

  public get currentProduit(): Produit {
    return this._currentProduit;
  }

  public get formattedDate(): string {
    return this._formattedDate;
  }

  public get updatedCategoryId(): number {
    return this._updatedCategoryId;
  }

  public get categories(): Categorie[] {
    return this._categories;
  }

  // Setters

  public set formattedDate(date: string) {
    this._formattedDate = date;
  }

  public set updatedCategoryId(id: number) {
    this._updatedCategoryId = Number(id);
  }

  // Methods

  public updateProduit(produit: Produit): void {
    const category: Categorie = this.categoryService.getCategorie(this._updatedCategoryId);
    produit.categorie = category;
    this.service.updateProduit(produit);
    this.router.navigate(["produits"]);
  }
}

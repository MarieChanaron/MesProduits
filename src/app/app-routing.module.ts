import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitsComponent } from './components/produits/produits.component';
import { AddProduitComponent } from './components/add-produit/add-produit.component';
import { UpdateProduitComponent } from './components/update-produit/update-produit.component';

const routes: Routes = [
  {path: "", redirectTo: "produits", pathMatch: "full"},
  {path: "produits", component: ProduitsComponent},
  {path: "add-produit", component: AddProduitComponent}, 
  {path: "update-produit/:id", component: UpdateProduitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

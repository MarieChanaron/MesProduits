import { Categorie } from "./categorie.model";

export class Produit {

    private _idProduit!: number;
    private _nomProduit!: string;
    private _prixProduit!: number;
    private _dateCreation!: Date;
    private _categorie! : Categorie;

    constructor(id: number, nom: string, prix: number, date: Date, categorie: Categorie) {
        this._idProduit = id;
        this._nomProduit = nom;
        this._prixProduit = prix;
        this._dateCreation = date;
        this._categorie = categorie;
    }

    public get idProduit(): number {
        return this._idProduit;
    }

    public get nomProduit(): string {
        return this._nomProduit;
    }

    public get prixProduit(): number {
        return this._prixProduit;
    }

    public get dateCreation(): Date {
        return this._dateCreation;
    }
 
    public get categorie(): Categorie {
        return this._categorie;
    }

    public set idProduit(id: number) {
        this._idProduit = id;
    }

    public set nomProduit(nom: string) {
        this._nomProduit = nom;
    }

    public set prixProduit(prix: number) {
        this._prixProduit = prix;
    }

    public set dateCreation(date: Date) {
        this._dateCreation = date;
    }

    public set categorie(categorie: Categorie) {
        this._categorie = categorie;
    }
}
export class Categorie {

    private _idCat!: number; // ou idCat?: number;
    private _nomCat!: string;

    constructor(id: number, nom: string) {
        this._idCat = id;
        this._nomCat = nom;
    }

    public get idCat(): number {
        return this._idCat;
    }

    public get nomCat(): string {
        return this._nomCat;
    }

    public set idCat(id: number) {
        this._idCat = id;
    }

    public set nomCat(nom: string) {
        this._nomCat = nom;
    }

}
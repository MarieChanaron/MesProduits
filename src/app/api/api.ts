import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

const httpOptions = {
    headers: new HttpHeaders({'Content-type: ': 'application/json'})
};

@Injectable({
    providedIn: 'root'
  })
export class Api {

    public BASE_URL: string = "http://localhost:8080/produits/api";

    constructor(private httpClient: HttpClient) {
    }

    // Methods

    // Returns the http object that is a singleton
    public get http(): HttpClient {
        return this.httpClient;
    }

}
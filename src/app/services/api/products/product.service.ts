import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductRepresentation} from "../model/product-representation";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string = 'https://fakestoreapi.com/';
  constructor(
    private http: HttpClient
  ) { }

  getAllProductsWithLimit(limit: number = 5){
    // const productUrl: string = this.baseUrl + 'products?limit=' + 5;
    const productUrl: string = `${this.baseUrl}products?limit=${limit}`;
    return this.http.get<Array<ProductRepresentation>>(productUrl)
  }

  createProduct(product: ProductRepresentation){
    const productUrl: string = `${this.baseUrl}products`;
    return this.http.post<ProductRepresentation>(productUrl, product);
  }
}

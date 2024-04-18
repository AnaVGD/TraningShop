import { HttpClient } from "@angular/common/http";
import { Injectable, inject, signal } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { tap } from "rxjs";
import { Product } from "../shared/models/product.interface";

@Injectable({ providedIn: 'root' })
export class ProductsService {
  public products = signal<Product[]>([]);

  private readonly _http = inject(HttpClient);
  private readonly _endpoint = environment.apiURL;

  constructor() {
    this.getProducts();
  }

  public getProducts() {
    this._http.get<Product[]>(`${this._endpoint}/products/?sort=des`)
    .pipe(tap((data: Product[]) => this.products.set(data)))
    .subscribe();
  }

  public getProductById(id: number) {
    return this._http.get<Product>(`${this._endpoint}/products/${id}`);
  }
}
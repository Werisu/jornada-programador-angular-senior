import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, ProductSearch } from './models/product-search.model';
import { Observable, map, finalize, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductSearchService {
  public loading = false;
  constructor(private http: HttpClient) { }

  searchByTerm(term: string): Observable<Product[]> {
    this.loading = true;
    return this.http.get<ProductSearch>(`https://swapi.dev/api/people/?search=${term}`).pipe(
      map((response: ProductSearch) => response.results),
      finalize(() => this.loading = false)
    )
  }
}

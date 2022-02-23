import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Product } from './product';
import { catchError, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // private apiURL = "http://localhost:9191/api/v1";
  private apiURL = "https://fakestoreapi.com";

  // https://fakestoreapi.com
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
  
  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiURL + '/products/');
  }

  create(product: any): Observable<any> {
    return this.httpClient.post(this.apiURL + '/products/', product);
  }  
     
  find(id:number): Observable<Product> {
    return this.httpClient.get<Product>(this.apiURL + '/products/' + id);
  }
     
  update(id:number, product:any): Observable<Product> {
    return this.httpClient.put<Product>(this.apiURL + '/products/' + id, JSON.stringify(product), this.httpOptions);    
  }
     
  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/products/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }

}


import { Injectable } from '@angular/core';
// @ts-ignore
import {Supply} from "../../interface/wedding-interfaces";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SuppliesService {
  private baseUrl = 'http://localhost:8080/wedding/supplies';
  private suppliesCalculateUrl = 'http://localhost:8080/wedding/supplies/calculate';

  constructor(private http: HttpClient) { }


  getSupplies(): Observable<Supply[]> {
    return this.http.get<Supply[]>(this.baseUrl);
  }

  getSupply(id : String) : Observable<Supply> {
    return this.http.get<Supply>(this.baseUrl+"/"+id);
  }

  createSupply(supply : Supply): Observable<Supply> {
    return this.http.post<Supply>(this.baseUrl, supply);
  }

  updateSupply(id : String, updatedSupply: Supply){
    return this.http.put<Supply>(this.baseUrl+"/"+id, updatedSupply);
  }

  removeSupply(id : String) {
    return this.http.delete<Supply>(this.baseUrl+"/"+id);
  }

  getSuppliesCalculate(id : string) {
    return this.http.get(this.suppliesCalculateUrl+"/"+id)
  }
}

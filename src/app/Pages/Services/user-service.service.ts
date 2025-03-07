import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private apiUrl = 'https://localhost:4200/api/invoice';

  constructor(private http: HttpClient) {}

  // getData(): Observable<any> {
  //   return this.http.get(this.apiUrl);
  // }
  
  postPurchaseData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

}

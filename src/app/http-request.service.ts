import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  
  constructor(private http : HttpClient) {}

  httpheader = new HttpHeaders().set('Access-Control-Allow-Origin', "*")

  get(url : string) {
    return this.http.get(url, {headers: this.httpheader })
  }
}

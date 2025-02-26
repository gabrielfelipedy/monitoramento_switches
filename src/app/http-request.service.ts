import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PortList } from '../../interfaces/PortList';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  
  constructor(private http : HttpClient) {}

  httpheader = new HttpHeaders().set('Access-Control-Allow-Origin', "*")


  /**
 * @param {string} url  A URL pra onde será feita a requisição
 * @returns Uma Promisse encapsulando o resultado da requisição
 */
  get(url : string) {
    return this.http.get<PortList>(url, {headers: this.httpheader }); //retorna a resposta da forma de um Subject (ou Observer). Works
  }
}
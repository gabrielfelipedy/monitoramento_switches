import { Injectable } from '@angular/core';
import { HttpRequestService } from './http-request.service';
import { ApiEndpoints } from '../../constants/api_endpoints';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiObservableService {

  
  private subjects: { [key: string]: BehaviorSubject<any> } = {};
  public observerData: { [key: string]: Observable<any> } = {};


  constructor(private http: HttpRequestService) {
    this.fetchAll()
    this.intervalFetch()
  }
 
  fillSubjects()
  {
    for(let keyEndpoint in ApiEndpoints)
    {
      this.subjects[keyEndpoint as keyof typeof this.subjects] = new BehaviorSubject<any>(null);
      this.observerData[keyEndpoint as keyof typeof this.observerData] = this.subjects[keyEndpoint as keyof typeof this.subjects].asObservable()
    }
  }


  intervalFetch()
  {
    setInterval(() => {
      this.fetchAll();
    }, 30000) //30 segundos
  }

  fetchAll()
  {
    for(let keyEndpoint in ApiEndpoints)
    {
      // console.log(`Key: ${keyEndpoint} value: ${ApiEndpoints[keyEndpoint as keyof typeof ApiEndpoints]}`)
      this.http.get(ApiEndpoints[keyEndpoint as keyof typeof ApiEndpoints]).subscribe(data => {

        console.log(`data de ${keyEndpoint}:`)
        console.log(data)
        this.subjects[keyEndpoint as keyof typeof this.subjects].next(data)
      })
    }
  }
}
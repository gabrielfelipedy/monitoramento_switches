import { Injectable } from '@angular/core';
import { HttpRequestService } from './http-request.service';
import { ApiEndpoints } from '../../constants/api_endpoints';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiObservableService {

  private subjects: Record<string, BehaviorSubject<any>> = {};
  public observerData: Record<string, Observable<any>> = {};


  constructor(private http: HttpRequestService) {
    this.fillSubjects()
    this.fetchAll()
    this.intervalFetch()
  }
 
  
  fillSubjects()
  {
    for(let keyEndpoint in ApiEndpoints)
    {
      this.subjects[keyEndpoint] = new BehaviorSubject<any>(null);
      this.observerData[keyEndpoint] = this.subjects[keyEndpoint].asObservable()
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
      this.http.get(ApiEndpoints[keyEndpoint]).subscribe(data => {
        
        this.subjects[keyEndpoint].next(data)
      })
    }
  }
}
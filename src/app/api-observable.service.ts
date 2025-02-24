import { Injectable } from '@angular/core';
import { HttpRequestService } from './http-request.service';
import { Constants } from '../../constants';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiObservableService {

  private CoreLaranjaldataSubject = new BehaviorSubject<any>(null);
  private Acesso1LaranjaldataSubject = new BehaviorSubject<any>(null);
  private Acesso2LaranjaldataSubject = new BehaviorSubject<any>(null);
  private Acesso3LaranjaldataSubject = new BehaviorSubject<any>(null);
  

  public observerData = {
    "core_laranjal": this.CoreLaranjaldataSubject.asObservable(),
    "acesso1_laranjal": this.Acesso1LaranjaldataSubject.asObservable(),
    "acesso2_laranjal": this.Acesso2LaranjaldataSubject.asObservable(),
    "acesso3_laranjal": this.Acesso3LaranjaldataSubject.asObservable()
  }

  constructor(private http: HttpRequestService) {
    this.fetchAll()
    this.intervalFetch()
  }

  intervalFetch()
  {
    setInterval(() => {
      this.fetchAll();
    }, 30000) //30 segundos
  }

  fetchAll()
  {
    this.http.get(Constants.CORE_LARANJAL).subscribe(data => {
      this.CoreLaranjaldataSubject.next(data)
    })

    this.http.get(Constants.ACESSO1_LARANJAL).subscribe(data => {
      this.Acesso1LaranjaldataSubject.next(data)
    })

    this.http.get(Constants.ACESSO2_LARANJAL).subscribe(data => {
      this.Acesso2LaranjaldataSubject.next(data)
    })

    this.http.get(Constants.ACESSO3_LARANJAL).subscribe(data => {
      this.Acesso3LaranjaldataSubject.next(data)
    })
  }
}
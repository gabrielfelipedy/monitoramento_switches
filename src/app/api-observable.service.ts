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
  
  private CoreOiapoquedataSubject = new BehaviorSubject<any>(null);
  private Acesso1OiapoquedataSubject = new BehaviorSubject<any>(null);
  private Acesso2OiapoquedataSubject = new BehaviorSubject<any>(null);
  private Acesso3OiapoquedataSubject = new BehaviorSubject<any>(null);

  public observerData = {
    "core_laranjal": this.CoreLaranjaldataSubject.asObservable(),
    "acesso1_laranjal": this.Acesso1LaranjaldataSubject.asObservable(),
    "acesso2_laranjal": this.Acesso2LaranjaldataSubject.asObservable(),
    "acesso3_laranjal": this.Acesso3LaranjaldataSubject.asObservable(),

    "core_oiapoque": this.CoreOiapoquedataSubject.asObservable(),
    "acesso1_oiapoque": this.Acesso1OiapoquedataSubject.asObservable(),
    "acesso2_oiapoque": this.Acesso2OiapoquedataSubject.asObservable(),
    "acesso3_oiapoque": this.Acesso3OiapoquedataSubject.asObservable()
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

    this.http.get(Constants.CORE_OIAPOQUE).subscribe(data => {
      this.CoreOiapoquedataSubject.next(data)
    })

    this.http.get(Constants.ACESSO1_OIAPOQUE).subscribe(data => {
      this.Acesso1OiapoquedataSubject.next(data)
    })

    this.http.get(Constants.ACESSO2_OIAPOQUE).subscribe(data => {
      this.Acesso2OiapoquedataSubject.next(data)
    })

    this.http.get(Constants.ACESSO3_OIAPOQUE).subscribe(data => {
      this.Acesso3OiapoquedataSubject.next(data)
    })
  }
}
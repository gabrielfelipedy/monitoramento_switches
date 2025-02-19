import { Injectable } from '@angular/core';
import { HttpRequestService } from './http-request.service';
import { Constants } from '../../constants';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiObservableService {

  private CoreLaranjaldataSubject = new BehaviorSubject<any>(null);
  public CoreLaranjaldata$ = this.CoreLaranjaldataSubject.asObservable();

  private Acesso1LaranjaldataSubject = new BehaviorSubject<any>(null);
  public Acesso1Laranjaldata$ = this.Acesso1LaranjaldataSubject.asObservable();

  private Acesso2LaranjaldataSubject = new BehaviorSubject<any>(null);
  public Acesso2Laranjaldata$ = this.Acesso2LaranjaldataSubject.asObservable();

  private Acesso3LaranjaldataSubject = new BehaviorSubject<any>(null);
  public Acesso3Laranjaldata$ = this.Acesso3LaranjaldataSubject.asObservable();

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
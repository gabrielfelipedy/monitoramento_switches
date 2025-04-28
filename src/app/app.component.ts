import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpRequestService } from './http-request.service';
import { ApiObservableService } from './api-observable.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'monitoramento_switches';

  constructor(private httpService: HttpRequestService, public api_observable: ApiObservableService) {}

}
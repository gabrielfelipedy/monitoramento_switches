import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpRequestService } from './http-request.service';
import { ApiObservableService } from './api-observable.service';
import { Constants } from '../../constants';
import { PortList } from '../../interfaces/PortList';
import { Port } from '../../interfaces/Port';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { LaranjalSubsecaoComponent } from './laranjal-subsecao/laranjal-subsecao.component';
import { OiapoqueSubssecaoComponent } from './oiapoque-subssecao/oiapoque-subssecao.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, CommonModule, LaranjalSubsecaoComponent, OiapoqueSubssecaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'monitoramento_switches';

  constructor(private httpService: HttpRequestService, public api_observable: ApiObservableService) {}

}
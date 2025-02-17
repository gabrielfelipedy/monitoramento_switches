import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpRequestService } from './http-request.service';
import { ApiObservableService } from './api-observable.service';
import { Constants } from '../../constants';
import { PortList } from '../../interfaces/PortList';
import { Port } from '../../interfaces/Port';
import { ArrayPortElement } from '../../interfaces/ArrayPortElement';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Acesso1LaranjalComponent } from './acesso1-laranjal/acesso1-laranjal.component';
import { CoreLaranjalComponent } from './core-laranjal/core-laranjal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, CommonModule, Acesso1LaranjalComponent, CoreLaranjalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'monitoramento_switches';
  
  ports_core_laranjal: Array<ArrayPortElement> = new Array<ArrayPortElement>()

  constructor(private httpService: HttpRequestService, private api_observable: ApiObservableService) {}

}

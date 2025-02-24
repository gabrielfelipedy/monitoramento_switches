import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { PortList } from '../../../interfaces/PortList';
import { ApiObservableService } from '../api-observable.service';
import { CommonModule, NgFor } from '@angular/common';
import { Switch } from '../../../classes/Switch';
import { SwitchProcessorService } from '../switch-processor.service';

@Component({
  selector: 'app-acesso3-laranjal',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './acesso3-laranjal.component.html',
  styleUrl: './acesso3-laranjal.component.scss',
})
export class Acesso3LaranjalComponent {
  switch_acesso3 = new Switch('acesso1_laranjal');

  private subscription!: Subscription;

  constructor(private api_observable: ApiObservableService, private switch_processor: SwitchProcessorService) {}

  
  ngOnInit() {
    this.subscription = this.api_observable.Acesso3Laranjaldata$.subscribe(
      (data: PortList) => {
        this.switch_processor.processAcessPorts(this.switch_acesso3, data?.result);
        console.log(this.switch_acesso3.acess_ports);
        console.log(this.switch_acesso3.uplink_ports);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

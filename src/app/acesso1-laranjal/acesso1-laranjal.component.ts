import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiObservableService } from '../api-observable.service';
import { PortList } from '../../../interfaces/PortList';
import { CommonModule, NgFor } from '@angular/common';
import { Switch } from '../../../classes/Switch';
import { SwitchProcessorService } from '../switch-processor.service';

@Component({
  selector: 'app-acesso1-laranjal',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './acesso1-laranjal.component.html',
  styleUrl: './acesso1-laranjal.component.scss',
})
export class Acesso1LaranjalComponent {
  switch_acesso1 = new Switch('acesso1_laranjal');

  private subscription!: Subscription;

  constructor(private api_observable: ApiObservableService, private switch_processor: SwitchProcessorService) {}

  //TODO
  //Quebrar esse metódo em funções mais específicas, deve-se separar adiconar uma porta de atualizá-la

  ngOnInit() {
    this.subscription = this.api_observable.Acesso1Laranjaldata$.subscribe(
      (data: PortList) => {
        this.switch_processor.processAcessPorts(this.switch_acesso1, data?.result);
        console.log('dados processados acesso1 laranjal:');
        console.log(this.switch_acesso1.acess_ports);
        console.log(this.switch_acesso1.uplink_ports);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
import { Component, Input } from '@angular/core';
import { Switch } from '../../../classes/Switch';
import { OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiObservableService } from '../api-observable.service';
import { SwitchProcessorService } from '../switch-processor.service';
import { PortList } from '../../../interfaces/PortList';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-acess-switch',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './acess-switch.component.html',
  styleUrl: './acess-switch.component.scss',
})
export class AcessSwitchComponent {
  @Input() switch_name!: string;

  switch = new Switch(this.switch_name);

  private subscription!: Subscription;

  constructor(
    private api_observable: ApiObservableService,
    private switch_processor: SwitchProcessorService
  ) {}

  //TODO
  //Quebrar esse metódo em funções mais específicas, deve-se separar adiconar uma porta de atualizá-la

  ngOnInit() {
    this.subscription = this.api_observable.observerData[
      this.switch_name as keyof typeof this.api_observable.observerData
    ].subscribe((data: PortList) => {
      this.switch_processor.processAcessPorts(this.switch, data?.result);
      console.log(`dados processados: ${this.switch_name}`);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
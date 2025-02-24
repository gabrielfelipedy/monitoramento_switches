import { CommonModule, NgFor } from '@angular/common';
import { OnInit, OnDestroy } from '@angular/core';
import { Component } from '@angular/core';
import { ApiObservableService } from '../api-observable.service';
import { PortList } from '../../../interfaces/PortList';
import { Subscription } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { Switch } from '../../../classes/Switch';
import { SwitchProcessorService } from '../switch-processor.service';

@Component({
  selector: 'app-core-laranjal',
  standalone: true,
  imports: [NgFor, CommonModule, MatTableModule],
  templateUrl: './core-laranjal.component.html',
  styleUrl: './core-laranjal.component.scss',
})
export class CoreLaranjalComponent {
  displayedColumns: string[] = ['name', 'inputvalue', 'outputvalue'];

  switch_core = new Switch('core_laranjal');

  private subscription!: Subscription;

  constructor(private api_observable: ApiObservableService, private switch_processor: SwitchProcessorService) {}


  ngOnInit() {
    this.subscription = this.api_observable.CoreLaranjaldata$.subscribe(
      (data: PortList) => {
        this.switch_processor.processUplinkPorts(this.switch_core, data?.result);
        console.log('dados processados core laranjal:');
        console.log(this.switch_core.uplink_ports);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
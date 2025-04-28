import { CommonModule, NgFor } from '@angular/common';
import { OnInit, OnDestroy } from '@angular/core';
import { Component, Input } from '@angular/core';
import { ApiObservableService } from '../api-observable.service';
import { PortList } from '../../../interfaces/PortList';
import { Subscription } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { Switch } from '../../../classes/Switch';
import { SwitchProcessorService } from '../switch-processor.service';
import { displayedColumns } from '../../../constants/api_endpoints';

@Component({
  selector: 'app-switch-6900-48',
  standalone: true,
  imports: [NgFor, CommonModule, MatTableModule],
  templateUrl: './switch-6900-48.component.html',
  styleUrl: './switch-6900-48.component.scss',
})
export class Switch690048Component {
  @Input() switch_name!: string;

  displayedColumns: string[] = displayedColumns;

  switch_core = new Switch(this.switch_name);

  private subscription!: Subscription;

  constructor(
    private api_observable: ApiObservableService,
    private switch_processor: SwitchProcessorService
  ) {}

  ngOnInit() {
    this.subscription = this.api_observable.observerData[
      this.switch_name
    ]?.subscribe((data: PortList) => {
      this.switch_processor.processUplinkPorts(this.switch_core, data?.result);

      console.log(`dados processados: ${this.switch_name}`);
      console.log(this.switch_core)
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

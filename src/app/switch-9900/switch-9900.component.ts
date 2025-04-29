import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Switch } from '../../../classes/Switch';
import { Subscription } from 'rxjs';
import { ApiObservableService } from '../api-observable.service';
import { SwitchProcessorService } from '../switch-processor.service';
import { PortList } from '../../../interfaces/PortList';
import { displayedColumns } from '../../../constants/api_endpoints';
import { NgFor, CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-switch-9900',
  standalone: true,
  imports: [NgFor, CommonModule, MatTableModule],
  templateUrl: './switch-9900.component.html',
  styleUrl: './switch-9900.component.scss',
})
export class Switch9900Component {
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
    ]?.subscribe((data: PortList) => {   //change portlist to just array ports
      this.switch_processor.processUplinkPorts(this.switch_core, data?.result);

      console.log(`dados processados: ${this.switch_name}`);
      console.log(this.switch_core)
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

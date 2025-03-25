import { Component } from '@angular/core';
import { ApiObservableService } from '../api-observable.service';
import { displayedColumns } from '../../../constants/api_endpoints';
import { Input } from '@angular/core';
import { SwitchProcessorService } from '../switch-processor.service';
import { Switch } from '../../../classes/Switch';
import { Subscription } from 'rxjs';
import { PortList } from '../../../interfaces/PortList';
import { CommonModule, NgFor } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-switch-6900-24',
  standalone: true,
  imports: [NgFor, CommonModule, MatTableModule],
  templateUrl: './switch-6900-24.component.html',
  styleUrl: './switch-6900-24.component.scss'
})
export class Switch690024Component {
  @Input() switch_name!: string;
  
    displayedColumns: string[] = displayedColumns;
  
    switch = new Switch(this.switch_name);
  
    private subscription!: Subscription;
  
    constructor(
      private api_observable: ApiObservableService,
      private switch_processor: SwitchProcessorService
    ) {}
  
    ngOnInit() {
      this.subscription = this.api_observable.observerData[
        this.switch_name
      ]?.subscribe((data: PortList) => {
        // this.switch_processor.processUplinkPorts(this.switch, data?.result);
  
        console.log(`dados processados: ${this.switch_name}`);
      });
    }
  
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
}
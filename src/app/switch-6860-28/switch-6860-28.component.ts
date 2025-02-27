import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { displayedColumns } from '../../../constants/api_endpoints';
import { ApiObservableService } from '../api-observable.service';
import { SwitchProcessorService } from '../switch-processor.service';
import { Switch } from '../../../classes/Switch';
import { PortList } from '../../../interfaces/PortList';
import { CommonModule, NgFor } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-switch-6860-28',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './switch-6860-28.component.html',
  styleUrl: './switch-6860-28.component.scss'
})
export class Switch686028Component {
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

import { CommonModule, NgFor } from '@angular/common';
import { OnInit, OnDestroy } from '@angular/core';
import { Component } from '@angular/core';
import { ArrayPortElement } from '../../../interfaces/ArrayPortElement';
import { ApiObservableService } from '../api-observable.service';
import { Port } from '../../../interfaces/Port';
import { PortList } from '../../../interfaces/PortList';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-core-laranjal',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './core-laranjal.component.html',
  styleUrl: './core-laranjal.component.scss'
})
export class CoreLaranjalComponent {

  ports_core_laranjal: Array<ArrayPortElement> = new Array<ArrayPortElement>();
  private subscription!: Subscription;

  constructor(private api_observable: ApiObservableService) {}

  processData(data: Array<Port>)
  {
    let new_ports_core_laranjal = []

    for(let i = 0; i < data?.length / 2; i++)
    {
      let newPort: ArrayPortElement = {
        itemid: `${i}`,
        inputvalue: data[i].lastvalue,
        outputvalue: data[i+2].lastvalue,
        name: data[i].name,
        active: data[i].lastvalue !== '0.00 KB/s' || data[i+2].lastvalue !== '0.00 KB/s'
      }
      
      new_ports_core_laranjal.push(newPort)
    }

    console.log("dados processados:")
    return new_ports_core_laranjal
  }

  ngOnInit()
  {
    this.subscription = this.api_observable.CoreLaranjaldata$.subscribe((data: PortList) => {
      this.ports_core_laranjal = this.processData(data?.result)
      console.log(this.ports_core_laranjal)
    })
  }

  ngOnDestroy()
  {
    this.subscription.unsubscribe()
  }
}

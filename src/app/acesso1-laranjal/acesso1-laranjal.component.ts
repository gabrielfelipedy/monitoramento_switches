import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiObservableService } from '../api-observable.service';
import { Port } from '../../../interfaces/Port';
import { PortList } from '../../../interfaces/PortList';
import { ArrayPortElement } from '../../../interfaces/ArrayPortElement';
import { AcessPort } from '../../../interfaces/AcessPort';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-acesso1-laranjal',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './acesso1-laranjal.component.html',
  styleUrl: './acesso1-laranjal.component.scss'
})
export class Acesso1LaranjalComponent {

  ports_acesso1_laranjal: Array<AcessPort> = new Array<AcessPort>();
  ports_uplink_acesso1_laranjal: Array<ArrayPortElement> = new Array<ArrayPortElement>();

  private subscription!: Subscription;

  constructor(private api_observable: ApiObservableService) { }

  private isActive(time: string): boolean
  {
    const [hours, minutes, seconds] = time.split(':').map(Number)
    return hours < 168
  }

  private processData(data: Array<Port>)
  {
    if(!data) return

    data.sort((a: Port, b:Port) => {
      return parseInt(a.itemid) - parseInt(b.itemid)
    })

    console.log(data)
    let new_ports_acesso1_laranjal = new Array<AcessPort>()
    let new_ports_uplink_acesso1_laranjal = new Array<ArrayPortElement>()

    let temp = new Array<Port>()

    data?.forEach((port: Port) => {

      if(port.name.includes("Ultima mudança - Alcatel-Lucent OS6360 GNI"))
      {
        let newPort: AcessPort = {
          itemid: port.itemid,
          lastvalue: port.lastvalue,
          name: port.name,
          active: this.isActive(port.lastvalue)
        }

        new_ports_acesso1_laranjal.push(newPort)
       

        new_ports_acesso1_laranjal = new_ports_acesso1_laranjal.slice(0, 24)
      }
      else if(port.name.includes("UPLINK 1"))
      {
        temp.push(port)
      }
      
    })

    console.log(temp)

    //strategy

    for(let i = 0; i < temp.length / 2; i++)
    {
      let newPort: ArrayPortElement = {
        itemid: temp[i].itemid,
        inputvalue: temp[i].lastvalue,
        outputvalue: temp[i+2].lastvalue,
        name: temp[i].name,
        active: temp[i].lastvalue !== '0.00 KB/s' || temp[i+2].lastvalue !== '0.00 KB/s'
      }

      new_ports_uplink_acesso1_laranjal.push(newPort)
    }


    console.log("dados processados acesso1 laranjal:")
    this.ports_acesso1_laranjal = new_ports_acesso1_laranjal
    this.ports_uplink_acesso1_laranjal = new_ports_uplink_acesso1_laranjal
  }

  ngOnInit()
  {
    this.subscription = this.api_observable.Acesso1Laranjaldata$.subscribe((data: PortList) => {
      this.processData(data?.result)
      console.log(this.ports_acesso1_laranjal)
      console.log(this.ports_uplink_acesso1_laranjal)
    })
  }

  ngOnDestroy()
  {
    this.subscription.unsubscribe()
  }
}

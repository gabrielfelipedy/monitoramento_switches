import { Component } from '@angular/core';
import { AcessPort } from '../../../interfaces/AcessPort';
import { Subscription } from 'rxjs';
import { Port } from '../../../interfaces/Port';
import { PortList } from '../../../interfaces/PortList';
import { ArrayPortElement } from '../../../interfaces/ArrayPortElement';
import { ApiObservableService } from '../api-observable.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-acesso3-laranjal',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './acesso3-laranjal.component.html',
  styleUrl: './acesso3-laranjal.component.scss',
})
export class Acesso3LaranjalComponent {
  ports_acesso: Array<AcessPort> = new Array<AcessPort>();
  ports_uplink: Array<ArrayPortElement> = new Array<ArrayPortElement>();

  private subscription!: Subscription;

  constructor(private api_observable: ApiObservableService) {}

  private isActive(time: string): boolean {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    return hours < 168;
  }

  private processData(data: Array<Port>) {
    if (!data) return;

    data.sort((a: Port, b: Port) => {
      return parseInt(a.itemid) - parseInt(b.itemid);
    });

    console.log(data);
    let new_ports_acesso = new Array<AcessPort>();
    let new_ports_uplink = new Array<ArrayPortElement>();

    let temp = new Array<Port>();

    data?.forEach((port: Port) => {
      if (port.name.includes('Ultima mudança - Alcatel-Lucent OS6360 GNI')) {
        let newPort: AcessPort = {
          itemid: port.itemid,
          lastvalue: port.lastvalue,
          name: port.name,
          active: this.isActive(port.lastvalue),
        };

        new_ports_acesso.push(newPort);

        new_ports_acesso = new_ports_acesso.slice(0, 24);
      } else if (port.name.includes('UPLINK 1')) {
        temp.push(port);
      }
    });

    // console.log(temp)

    //strategy

    for (let i = 0; i < temp.length / 2; i++) {
      let newPort: ArrayPortElement = {
        itemid: temp[i].itemid,
        inputvalue: temp[i].lastvalue,
        outputvalue: temp[i + 2].lastvalue,
        name: temp[i].name,
        active:
          temp[i].lastvalue !== '0.00 KB/s' ||
          temp[i + 2].lastvalue !== '0.00 KB/s',
      };

      new_ports_uplink.push(newPort);
    }

    console.log('dados processados acesso3 laranjal:');
    this.ports_acesso = new_ports_acesso;
    this.ports_uplink = new_ports_uplink;
  }

  ngOnInit() {
    this.subscription = this.api_observable.Acesso3Laranjaldata$.subscribe(
      (data: PortList) => {
        this.processData(data?.result);
        console.log(this.ports_acesso);
        console.log(this.ports_uplink);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

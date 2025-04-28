import { Observable } from 'rxjs';
import { AcessPort } from './AcessPort';
import { UplinkPort } from './UplinkPort';

export class Switch {
  description: string;
  acess_ports: Array<AcessPort>;
  uplink_ports: Array<UplinkPort>;

  constructor(description: string) {
    this.description = description;
    this.acess_ports = new Array<AcessPort>();
    this.uplink_ports = new Array<UplinkPort>();
  }

  clearAcessPorts()
  {
    this.acess_ports = new Array<AcessPort>()
  }

  clearUplinkPorts()
  {
    this.uplink_ports = new Array<UplinkPort>()
  }

  addAcessPort(port: AcessPort)
  {
    this.acess_ports.push(port)
  }

  addUpLinkPort(port: UplinkPort)
  {
    this.uplink_ports.push(port)
  }
}

import { Observable } from 'rxjs';
import { PortAcesso } from './PortAcesso';
import { PortUplink } from './PortUplink';

export class Switch {
  description: string;
  acess_ports: Array<PortAcesso>;
  uplink_ports: Array<PortUplink>;

  constructor(description: string) {
    this.description = description;
    this.acess_ports = new Array<PortAcesso>();
    this.uplink_ports = new Array<PortUplink>();
  }

  clearAcessPorts()
  {
    this.acess_ports = []
  }

  clearUplinkPorts()
  {
    this.uplink_ports = []
  }

  addAcessPort(port: PortAcesso)
  {
    this.acess_ports.push(port)
  }

  addUpLinkPort(port: PortUplink)
  {
    this.uplink_ports.push(port)
  }
}

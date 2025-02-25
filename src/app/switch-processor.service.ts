import { Injectable } from '@angular/core';
import { Port } from '../../interfaces/Port';
import { UplinkPort } from '../../classes/UplinkPort';
import { AcessPort } from '../../classes/AcessPort';
import { Switch } from '../../classes/Switch';

@Injectable({
  providedIn: 'root',
})
export class SwitchProcessorService {

  processUplinkPorts(sw: Switch, data: Array<Port>)
  {
    for (let i = 0; i < data?.length / 2; i++) {
      let newPort = new UplinkPort(
        data[i].itemid, //numport
        data[i].name.slice(16, 32), //name
        data[i].lastvalue, //inputvalue
        data[i + 2].lastvalue //outputvalue
      );

      sw.addUpLinkPort(newPort);
    }
  }

  processAcessPorts(sw: Switch, data: Array<Port>)
  {
    if (!data) return;

    data.sort((a: Port, b: Port) => {
      return parseInt(a.itemid) - parseInt(b.itemid);
    });

    sw.clearAcessPorts();
    sw.clearUplinkPorts();

    let temp = new Array<Port>();

    data?.forEach((port: Port) => {
      let port_splitted = port.name.split('/');
      let portname = port_splitted[0];
      let numport = Number(port_splitted[2]);

      if (
        portname.includes('Ultima mudança - Alcatel-Lucent OS6360 GNI') &&
        numport <= 24
      ) {

        let newPort = new AcessPort(port.itemid, port.name, port.lastvalue);

        sw.addAcessPort(newPort);
      } else if (port.name.includes('UPLINK 1')) {
        temp.push(port);
      }
    });
    
    this.processUplinkPorts(sw, temp)

  }

  constructor() {}
}

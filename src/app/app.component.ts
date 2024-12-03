import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpRequestService } from './http-request.service';
import { Constants } from '../../constants';
import { PortList } from '../../interfaces/PortList';
import { Port } from '../../interfaces/Port';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'monitoramento_switches';
  private apiURL = Constants.API_URL

  private httpService = inject(HttpRequestService)

  getHome()
  {
    const PortsXNI = new Array<Port>()

    this.httpService.get(this.apiURL).subscribe({
      next: (data: PortList) => {
        

        data.result.forEach((port: Port) => {
          if(port.name.substring(31, 34) === 'XNI') {
            
            PortsXNI.push(port)
          }
        })

        PortsXNI.sort((a: Port, b: Port) => {
          return parseInt(a.itemid) < parseInt(b.itemid) ? -1 : parseInt(a.itemid) > parseInt(b.itemid) ? 1 : 0
        })

        console.log(PortsXNI)
      },
      error: (err) => {
        console.error(err)
      }
    })
  }

  ngOnInit()
  {
    this.getHome()
  }
}

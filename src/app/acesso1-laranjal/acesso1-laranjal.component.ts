import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiObservableService } from '../api-observable.service';
import { Port } from '../../../interfaces/Port';
import { PortList } from '../../../interfaces/PortList';

@Component({
  selector: 'app-acesso1-laranjal',
  standalone: true,
  imports: [],
  templateUrl: './acesso1-laranjal.component.html',
  styleUrl: './acesso1-laranjal.component.scss'
})
export class Acesso1LaranjalComponent {

  ports: Array<Port> = new Array<Port>()
  private subscription!: Subscription;

  constructor(private api_observable: ApiObservableService)
  { }

  handleDataUpdate(newData: Array<Port>)
  {
    console.log("New update")
    this.ports = newData
    this.processData(this.ports)
  }

  processData(data: Array<Port>)
  {
    console.log(data)
  }

  ngOnInit()
  {
    this.subscription = this.api_observable.Acesso1Laranjaldata$.subscribe((data: PortList) => {
      this.ports = data?.result
      this.handleDataUpdate(this.ports)
    })
  }

  ngOnDestroy()
  {
    this.subscription.unsubscribe()
  }
}

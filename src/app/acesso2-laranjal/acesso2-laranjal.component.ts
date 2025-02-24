import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiObservableService } from '../api-observable.service';
import { OnInit, OnDestroy } from '@angular/core';
import { PortList } from '../../../interfaces/PortList';
import { NgFor, CommonModule } from '@angular/common';
import { Switch } from '../../../classes/Switch';
import { SwitchProcessorService } from '../switch-processor.service';

@Component({
  selector: 'app-acesso2-laranjal',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './acesso2-laranjal.component.html',
  styleUrl: './acesso2-laranjal.component.scss'
})
export class Acesso2LaranjalComponent {

  switch_acesso2 = new Switch('acesso1_laranjal');
  
    private subscription!: Subscription;
  
    constructor(private api_observable: ApiObservableService, private switch_processor: SwitchProcessorService) {}
  
    //TODO
    //Quebrar esse metódo em funções mais específicas, deve-se separar adiconar uma porta de atualizá-la
  
    ngOnInit() {
      this.subscription = this.api_observable.Acesso2Laranjaldata$.subscribe(
        (data: PortList) => {
          this.switch_processor.processAcessPorts(this.switch_acesso2, data?.result);
          console.log('dados processados acesso1 laranjal:');
          console.log(this.switch_acesso2.acess_ports);
          console.log(this.switch_acesso2.uplink_ports);
        }
      );
    }

  ngOnDestroy()
  {
    this.subscription.unsubscribe()
  }
}

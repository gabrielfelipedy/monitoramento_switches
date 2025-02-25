import { Component } from '@angular/core';
import { AcessSwitchComponent } from '../acess-switch/acess-switch.component';
import { CoreSwitch9900Component } from '../core-switch-9900/core-switch-9900.component';

@Component({
  selector: 'app-macapa-subsecao',
  standalone: true,
  imports: [AcessSwitchComponent, CoreSwitch9900Component],
  templateUrl: './macapa-subsecao.component.html',
  styleUrl: './macapa-subsecao.component.scss'
})
export class MacapaSubsecaoComponent {

}

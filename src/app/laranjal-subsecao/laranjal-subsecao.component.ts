import { Component } from '@angular/core';
import { AcessSwitchComponent } from '../acess-switch/acess-switch.component';
import { CoreSwitch6900Component } from '../core-switch-6900/core-switch-6900.component';

@Component({
  selector: 'app-laranjal-subsecao',
  standalone: true,
  imports: [AcessSwitchComponent, CoreSwitch6900Component],
  templateUrl: './laranjal-subsecao.component.html',
  styleUrl: './laranjal-subsecao.component.scss'
})
export class LaranjalSubsecaoComponent {

}

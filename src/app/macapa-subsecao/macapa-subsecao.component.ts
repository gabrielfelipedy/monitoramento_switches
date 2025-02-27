import { Component } from '@angular/core';
import { AcessSwitch636024Component } from '../acess-switch-6360-24/acess-switch-6360-24.component';
import { CoreSwitch9900Component } from '../core-switch-9900/core-switch-9900.component';

@Component({
  selector: 'app-macapa-subsecao',
  standalone: true,
  imports: [AcessSwitch636024Component, CoreSwitch9900Component],
  templateUrl: './macapa-subsecao.component.html',
  styleUrl: './macapa-subsecao.component.scss'
})
export class MacapaSubsecaoComponent {

}

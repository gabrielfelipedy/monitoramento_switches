import { Component } from '@angular/core';
import { Switch636024Component } from '../switch-6360-24/switch-6360-24.component';
import { Switch9900Component } from '../switch-9900/switch-9900.component';
import { Switch690024Component } from '../switch-6900-24/switch-6900-24.component';
import { Switch686028Component } from '../switch-6860-28/switch-6860-28.component';

@Component({
  selector: 'app-macapa-subsecao',
  standalone: true,
  imports: [Switch636024Component, Switch9900Component, Switch690024Component, Switch686028Component],
  templateUrl: './macapa-subsecao.component.html',
  styleUrl: './macapa-subsecao.component.scss'
})
export class MacapaSubsecaoComponent {

}

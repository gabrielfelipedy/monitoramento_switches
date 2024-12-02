import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpRequestService } from './http-request.service';
import { Constants } from '../../constants';

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
    this.httpService.get(this.apiURL).subscribe({
      next: (data) => {
        console.log(data)
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

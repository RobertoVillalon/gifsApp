import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidemenuComponent } from "../../components/sidemenu/sidemenu.component";
import { GifService } from '../../services/gifs.service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, SidemenuComponent],
  templateUrl: './dashboard.component.html',
})

export default class DashboardComponent {
  gifService = inject(GifService)

 }
 
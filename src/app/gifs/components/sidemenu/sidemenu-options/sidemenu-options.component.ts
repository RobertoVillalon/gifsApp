import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuOption {
  label: string,
  subLabel: string,
  route: string,
  icon: string
}

@Component({
  selector: 'gifs-sidemenu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidemenu-options.component.html',
})

export class SidemenuOptionsComponent { 

  historyKeys = input.required<string[]>();

  menuOptions: MenuOption[] = [
    {icon: 'fa-solid fa-chart-line', label: 'Trending', subLabel: 'Gifs Populares', route: '/dashboard/trending'},
    {icon: 'fa-solid fa-magnifying-glass', label: 'Buscador', subLabel: 'Buscar Gifs', route: '/dashboard/search'}
  ]
}

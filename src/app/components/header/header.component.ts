import { Component, OnInit } from '@angular/core';
import { HeaderTabs } from 'src/app/models/header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public tabs: Array<HeaderTabs> = [
    {
      text: '',
      routerLink: '',
      fragment: '',
      id: '',
      button: false,
    },
  ];
  constructor() {
    this.tabs = [
      {
        text: 'Inicio',
        routerLink: '/home',
        fragment: 'hero',
        id: '001',
        button: false,
      },
      {
        text: 'Tecnologias',
        routerLink: '/home',
        fragment: 'technologies',
        id: '002',
        button: false,
      },
      {
        text: 'Beneficios',
        routerLink: '/home',
        fragment: 'benefits',
        id: '003',
        button: false,
      },
      {
        text: 'Requerimientos',
        routerLink: '/home',
        fragment: 'requiriments',
        id: '004',
        button: false,
      },
      {
        text: 'Login',
        routerLink: '/login',
        fragment: '',
        id: '005',
        button: true,
      },
    ];
  }

  ngOnInit(): void {}

  trackById(index: number, item: HeaderTabs): string {
    return item.id;
  }
}

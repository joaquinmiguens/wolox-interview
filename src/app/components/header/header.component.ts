import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { HeaderTabs } from 'src/app/models/header.model';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private isToken: string;
  public isSticky: boolean;
  public tabs: Array<HeaderTabs> = [
    {
      text: '',
      routerLink: '',
      fragment: '',
      id: '',
      button: false,
      active: false,
    },
  ];
  constructor(@Inject(DOCUMENT) document) {
    this.isToken = JSON.parse(localStorage.getItem('userToken'));
    this.tabs = [
      {
        text: 'Inicio',
        routerLink: '/home',
        fragment: 'hero',
        id: '001',
        button: false,
        active: true,
      },
      {
        text: 'Tecnologias',
        routerLink: '/home',
        fragment: 'technologies',
        id: '002',
        button: false,
        active: false,
      },
      {
        text: 'Beneficios',
        routerLink: '/home',
        fragment: 'benefits',
        id: '003',
        button: false,
        active: false,
      },
      {
        text: 'Requerimientos',
        routerLink: '/home',
        fragment: 'requiriments',
        id: '004',
        button: false,
        active: false,
      },
      {
        text: this.isToken !== '' ? 'Listado' : 'Login',
        routerLink: this.isToken !== '' ? '/tech-list' : '/login',
        fragment: '',
        id: '005',
        button: true,
        active: false,
      },
    ];
  }

  ngOnInit(): void {}

  trackById(index: number, item: HeaderTabs): string {
    return item.id;
  }
  activeTab(id: string): void {
    this.tabs.map((tab: HeaderTabs) => {
      if (tab.active) {
        tab.active = false;
      }
      if (tab.id === id) {
        tab.active = true;
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(e: Event): void {
    if (window.scrollY > 0) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }
}

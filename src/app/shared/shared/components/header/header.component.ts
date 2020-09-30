import {
  Component,
  HostListener,
  Inject,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { HeaderTabs } from 'src/app/models/header.model';
import { DOCUMENT } from '@angular/common';

import {
  faArrowRight,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/service/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public isSticky: boolean;
  public mobile: boolean;
  public isMenuOpen: boolean;
  public arrowIcon: IconDefinition = faArrowRight;
  public authSubscription: Subscription;
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
  constructor(
    private readonly authService: AuthService,
    @Inject(DOCUMENT) document
  ) {
    this.mobile = false;
    this.isMenuOpen = false;
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
    ];
  }

  ngOnInit(): void {
    if (window.innerWidth <= 900) {
      this.mobile = true;
    }
    this.authSubscription = this.authService.logged.subscribe(($response) => {
      this.changeButtonText($response);
    });
  }
  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

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
  toggleMenu() {
    if (this.mobile) {
      if (this.isMenuOpen) {
        this.isMenuOpen = false;
      } else {
        this.isMenuOpen = true;
      }
    }
  }
  changeButtonText(state: boolean) {
    const buttonTab: HeaderTabs = {
      text: state ? 'Listado' : 'Login',
      routerLink: state ? '/tech-list' : '/login',
      fragment: '',
      id: '005',
      button: true,
      active: false,
    };
    this.tabs.length !== 5
      ? this.tabs.push(buttonTab)
      : this.tabs.splice(4, 1, buttonTab);
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

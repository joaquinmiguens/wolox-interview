import { Component, OnInit } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Benefit } from '../../models/benefit.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public twitterIcon = faTwitter;
  public assets: string;
  public benefits: Array<Benefit> = [
    {
      image: '',
      title: '',
      id: '',
    },
  ];
  constructor() {
    this.assets = '../../../assets';
    this.benefits = [
      {
        image: `${this.assets}/Ic_Hour.svg`,
        title: 'Flexibilidad Horaria',
        id: '001',
      },
      {
        image: `${this.assets}/Ic_HomeOffice.svg`,
        title: 'Home Office',
        id: '002',
      },
      {
        image: `${this.assets}/Ic_Workshops.svg`,
        title: 'Capacitaciones y Workshops',
        id: '003',
      },
      {
        image: `${this.assets}/Ic_DrinkSnacks.svg`,
        title: 'Snacks, frutas y bebidas gratis',
        id: '004',
      },
      {
        image: `${this.assets}/Ic_laptop.svg`,
        title: 'Semana Remota',
        id: '005',
      },
      {
        image: `${this.assets}/Ic_brain.svg`,
        title: 'Trabajar en ultimas tecnologias',
        id: '006',
      },
    ];
  }

  ngOnInit(): void {}

  navigateToTwitter() {
    window.location.href = 'https://twitter.com/Wolox';
  }
  trackById(index: number, item: Benefit): string {
    return item.id;
  }
}

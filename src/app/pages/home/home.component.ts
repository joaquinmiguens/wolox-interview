import { Component, OnInit } from '@angular/core';
import { Benefit } from '../../models/benefit.model';
import { Requiriment } from '../../models/requiriment.model';

import {
  faArrowRight,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public twitterIcon: IconDefinition = faTwitter;
  public arrowIcon: IconDefinition = faArrowRight;
  public assets: string;
  public benefits: Array<Benefit> = [
    {
      image: '',
      title: '',
      id: '',
    },
  ];
  public requiriments: Array<Requiriment> = [
    {
      image: '',
      text: '',
      id: '',
    },
  ];
  constructor() {
    this.assets = '../../../assets';
    this.requiriments = [
      {
        image: `${this.assets}/Ic_Bullet_1.svg`,
        text:
          'Estudiantes avanzados o recibidos de carrearas del rubro informatico, sistemas o electronicos.',
        id: '007',
      },
      {
        image: `${this.assets}/Ic_Bullet_2.svg`,
        text: 'Ingles intermedio ó avanzado.',
        id: '008',
      },
      {
        image: `${this.assets}/Ic_Bullet_3.svg`,
        text: 'Conocimiento en metodologas agiles (deseable).',
        id: '009',
      },
    ];
    this.benefits = [
      {
        image: `${this.assets}/Ic_Hour.svg`,
        title: 'Flexibilidad Horaria.',
        id: '001',
      },
      {
        image: `${this.assets}/Ic_HomeOffice.svg`,
        title: 'Home Office.',
        id: '002',
      },
      {
        image: `${this.assets}/Ic_Workshops.svg`,
        title: 'Capacitaciones y Workshops.',
        id: '003',
      },
      {
        image: `${this.assets}/Ic_DrinkSnacks.svg`,
        title: 'Snacks, frutas y bebidas gratis.',
        id: '004',
      },
      {
        image: `${this.assets}/Ic_laptop.svg`,
        title: 'Semana Remota.',
        id: '005',
      },
      {
        image: `${this.assets}/Ic_brain.svg`,
        title: 'Trabajar en ultimas tecnologias.',
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

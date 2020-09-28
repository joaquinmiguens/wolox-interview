import { Component, OnInit } from '@angular/core';
import {
  faArrowRight,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public arrowIcon: IconDefinition = faArrowRight;
  constructor() {}

  ngOnInit(): void {}
  navigateToWolox() {
    window.location.href = 'https://www.wolox.com.ar/';
  }
}

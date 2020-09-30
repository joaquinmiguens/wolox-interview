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
export class FooterComponent {
  public arrowIcon: IconDefinition = faArrowRight;
  navigateToWolox() {
    window.location.href = 'https://www.wolox.com.ar/';
  }
}

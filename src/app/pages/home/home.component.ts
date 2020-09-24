import { Component, OnInit } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public twitterIcon = faTwitter;
  constructor() {}

  ngOnInit(): void {}

  navigateToTwitter() {
    window.location.href = 'https://twitter.com/Wolox';
  }
}

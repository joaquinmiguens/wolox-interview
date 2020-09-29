import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'wolox-interview';
  showFooter: boolean = false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    AOS.init();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showFooter =
          this.activatedRoute.firstChild.snapshot.data.showFooter !== false;
      }
    });
  }
}

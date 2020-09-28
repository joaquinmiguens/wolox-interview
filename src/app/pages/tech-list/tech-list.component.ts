import { Component, OnInit, OnDestroy } from '@angular/core';

import {
  faSearch,
  faChevronDown,
  IconDefinition,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import { TechListService } from 'src/app/service/tech-list.service';
import { Subscription } from 'rxjs';
import { Candidate } from '../../models/candidate.model';
import { TechListModule } from './tech-list.module';

export interface Order {
  text: string;
  icon: IconDefinition;
}

@Component({
  selector: 'app-tech-list',
  templateUrl: './tech-list.component.html',
  styleUrls: ['./tech-list.component.scss'],
})
export class TechListComponent implements OnInit, OnDestroy {
  public searchIcon: IconDefinition = faSearch;
  public downIcon: IconDefinition = faChevronDown;
  public upIcon: IconDefinition = faChevronUp;
  public subscription: Subscription;
  public candidates: Array<Candidate>;
  public searchText: string;
  public order: Order;
  public mobile: boolean;
  constructor(private techList: TechListService) {
    this.searchText = '';
    this.order = {
      text: 'Ascendente',
      icon: this.downIcon,
    };
    if (window.innerWidth >= 500) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }
  }

  ngOnInit(): void {
    this.subscription = this.techList
      .getCandidates()
      .subscribe(($candidates: Array<Candidate>) => {
        this.candidates = $candidates;
      });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  onKey(text: string) {
    this.searchText = text;
  }
  trackByAuthor(index: number, item: Candidate): string {
    return item.author;
  }
  toggleOrder() {
    if (this.order.text === 'Ascendente') {
      this.order = {
        text: 'Descendente',
        icon: this.upIcon,
      };
    } else {
      this.order = {
        text: 'Ascendente',
        icon: this.downIcon,
      };
    }
  }
}

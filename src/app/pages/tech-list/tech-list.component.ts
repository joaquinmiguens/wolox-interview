import { Component, OnInit, OnDestroy } from '@angular/core';

import { faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { TechListService } from 'src/app/service/tech-list.service';
import { Subscription } from 'rxjs';
import { Candidate } from '../../models/candidate.model';

@Component({
  selector: 'app-tech-list',
  templateUrl: './tech-list.component.html',
  styleUrls: ['./tech-list.component.scss'],
})
export class TechListComponent implements OnInit, OnDestroy {
  public searchIcon: IconDefinition = faSearch;
  public subscription: Subscription;
  public candidates: Array<Candidate>;
  public searchText: string;
  constructor(private techList: TechListService) {
    this.searchText = '';
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
}

import { Component, OnInit, Input } from '@angular/core';
import { Candidate } from 'src/app/models/candidate.model';
import {
  faExternalLinkAlt,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() candidate: Candidate;
  public bookMarkIcon: IconDefinition = faBookmark;
  public linkIcon: IconDefinition = faExternalLinkAlt;
  constructor() {}

  ngOnInit(): void {}
}

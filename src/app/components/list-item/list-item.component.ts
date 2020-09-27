import { Component, OnInit, Input } from '@angular/core';
import { Candidate } from 'src/app/models/candidate.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() candidate: Candidate;
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-thoughts-list',
  templateUrl: './thoughts-list.component.html',
  styleUrls: ['./thoughts-list.component.css']
})
export class ThoughtsListComponent implements OnInit {

  thoughtsList: Thought[] = [];

  constructor(private service: ThoughtService) { }

  ngOnInit(): void {
    this.service.list().subscribe((thoughtsList) => {
      this.thoughtsList = thoughtsList;
    });
  }

}

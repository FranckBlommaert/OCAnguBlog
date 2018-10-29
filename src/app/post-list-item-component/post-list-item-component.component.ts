import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() PostTitle: string;
  @Input() PostContent: string;
  @Input() PostLoveIts: number;
  @Input() PostCreated_at: Date;

  constructor() { }

  ngOnInit() {
  }

  onBtn_like() {
    this.PostLoveIts++;
  }
  onBtn_Dislike() {
    this.PostLoveIts--;
  }

}

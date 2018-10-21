import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  @Input() title: string;
  
  @Input() content: string;

  loveIts: number = 0;
  created_at: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  onAddLove() {
    this.loveIts++;
  }

  onRemoveLove() {
    this.loveIts--;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';

  posts = [

    { 
      nom: '1 er post',
      detail: 'le contenu'
    },

    { 
      nom: '2eme post',
      detail: 'le dfdsqfdsqfdscontenu'
    }

  ];


}

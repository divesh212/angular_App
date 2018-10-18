import { Component } from '@angular/core';
import { ArticlesService } from './services/articles/articles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'conduict';

  constructor(private articleService: ArticlesService) {

  }

  onTagSelection(value) {
    console.log(value)
    this.articleService.getFeedByTag(value)
  }
}
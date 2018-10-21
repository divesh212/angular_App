import { Component } from '@angular/core';
import { ArticlesService } from './services/articles/articles.service';
import { TagsService } from './services/tag/tags.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'conduict';

  constructor(private articleService: ArticlesService, private tagService: TagsService) {

  }

  onTagSelection(value) {
    console.log(value)
    this.tagService.setTagName(value)
    this.articleService.getFeedByTag(value)
  }
}
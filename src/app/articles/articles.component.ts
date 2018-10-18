import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(private articleService: ArticlesService) { }

  ngOnInit() {
  }

  getGlobalFeeds(){
    this.articleService.setGlobalFeed();
  }

}

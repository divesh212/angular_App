import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles/articles.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: any;
  constructor(private articleService: ArticlesService) { }

  ngOnInit() {
    this.articleService.getFeed().subscribe((a: {articles: any, articlesCount: any}) => {
      this.articles = a.articles;
    })
  }


}

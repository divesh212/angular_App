import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles/articles.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  comment : string
  articleData: any;

  constructor(private route: ActivatedRoute, private articleService: ArticlesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        let slug = params['params'].slug;
        this.articleService.getArticleDetails(slug).subscribe((data : any) => {
        this.articleData = data.article;
        })
      }
    )
  }

  postComment(comment){
    this.comment = comment
    console.log(comment)
  }

}

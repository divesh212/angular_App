import { Component, OnInit, Input } from '@angular/core';
import { ArticlesService } from '../../../services/articles/articles.service';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {

  @Input() article : any
  articles : any 
  totalArticle : number
  constructor(private articleService : ArticlesService) {

   }

  ngOnInit() {}

  switchFav(isFav,article:any) {
    if(isFav="fav") {
      this.articleService.favouriteArticle(article.slug).subscribe((data : any) => {
        this.article = data.article
      })
    }else if(isFav="unfav") {
      this.articleService.unFavouriteArticle(article.slug).subscribe((data : any) => {
        this.article = data.article
      })
    }
  }
}
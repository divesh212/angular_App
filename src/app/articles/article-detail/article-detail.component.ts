import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles/articles.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  isUserLoggedIn : boolean
  articleData: any
  allComments : any
  slug: string

  constructor(private route: ActivatedRoute, private articleService: ArticlesService,
              private userServie: UserService) { }

  ngOnInit() {
    this.isUserLoggedIn = localStorage.getItem('token')?true:false
    this.route.paramMap.subscribe(
      params => {
        this.slug = params['params'].slug
        this.articleService.getArticleDetails(this.slug).subscribe((data : any) => {
        this.articleData = data.article;
        })
      }
    )
    this.articleService.getComments(this.slug).subscribe((data: {comments : any}) => {
      this.allComments = data.comments
      console.log("Comments: "+JSON.stringify(data.comments));
    })
  }

  postComment(comment){
    this.articleService.postComments(comment,this.slug).subscribe((response:{comment:any}) => {
      console.log(response)
      this.allComments.unshift(response.comment)
    })
  }

}
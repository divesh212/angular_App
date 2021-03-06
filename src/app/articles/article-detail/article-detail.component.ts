import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  currentUser: string

  constructor(private route: ActivatedRoute, private articleService: ArticlesService,
              private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.isUserLoggedIn = localStorage.getItem('token')?true:false
    
    this.route.paramMap.subscribe(
      params => {
        this.slug = params['params'].slug
        this.articleService.getArticleDetails(this.slug)
        .subscribe(
          (data : any) => {
        this.articleData = data.article;
        },error => {
          this.router.navigate(['/']);
        })
      }
    )

    this.userService.getCurrentUser().subscribe((user:{user: any}) => {
      this.currentUser = user.user.username

    })
    this.getAllComments()
  }

  getAllComments(){
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

  deleteComment(id:number) {
    this.articleService.deleteComment(this.slug,id).subscribe((data) => this.getAllComments())
  }
  
  deleteArticle(){
    this.articleService.deleteArticle(this.slug).subscribe((data) => {
      console.log(data);
      this.router.navigate([`/profile/${this.articleData.author.username}`])
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles/articles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private articleService: ArticlesService) { }

  ngOnInit() {
    if(localStorage.getItem('token')!=null){
      this.articleService.setUserFeed()
    }else{
      this.articleService.setGlobalFeed()
    }
  }

}

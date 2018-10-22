import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles/articles.service';
import { TagsService } from '../services/tag/tags.service'
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  tagName : string
  loadedTagBtn : boolean
  localStorageObj : Object

  constructor(private articleService: ArticlesService, private tagService: TagsService) { }

  ngOnInit() {
    this.tagService.getTagName().subscribe((tagName) => {
      this.tagName = tagName;
    })
    this.localStorageObj = localStorage
  }

  getTagName() {
    this.loadedTagBtn = true;
    return this.tagService.getTagName()
  }
  
   getFeed(feedSource){
    feedSource=='user'? this.articleService.setUserFeed() : this.articleService.setGlobalFeed();
    this.tagService.setTagName(null);
   }

}

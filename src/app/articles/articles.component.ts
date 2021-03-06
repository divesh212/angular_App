import { Component, OnInit, Input } from '@angular/core';
import { ArticlesService } from '../services/articles/articles.service';
import { TagsService } from '../services/tag/tags.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  tagName: string
  loadedTagBtn: boolean
  localStorageObj: Object
  @Input() parent: string


  constructor(private articleService: ArticlesService, private tagService: TagsService,
    private route: ActivatedRoute) { }

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

  getFeed(feedSource) {
    if (feedSource === 'user') {
      this.articleService.setUserFeed()
    } else if (feedSource === 'global') {
      this.articleService.setGlobalFeed()
    } else if (feedSource === 'myFeed') {
      this.route.paramMap.subscribe(
        params => {
          this.articleService.setMyArticles(params['params'].username)
        })
    } else if (feedSource === 'favourite') {
      this.articleService.setFavouriteFeed(this.route.snapshot.paramMap.get('username'))
    }
    this.tagService.setTagName(null);
  }

}

import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './services/articles/articles.service';
import { TagsService } from './services/tag/tags.service';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'conduict';

  constructor(private articleService: ArticlesService, private tagService: TagsService,
    private userService: UserService) { }

  ngOnInit() {
    if (localStorage.getItem('token') != null) {
      this.userService.getCurrentUser().subscribe((user: { user: any }) => {
        console.log(user.user.username);
        this.userService.setUsername(user.user.username);
      }
      )
    }
  }

  onTagSelection(value) {
    console.log(value)
    this.tagService.setTagName(value)
    this.articleService.getFeedByTag(value)
  }

}
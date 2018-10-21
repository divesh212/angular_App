import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TagsService } from '../services/tag/tags.service';
import { ArticlesService } from '../services/articles/articles.service'
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags : any
  @Output() isTagSelected = new EventEmitter<string>();
  constructor(private tagService : TagsService, private articleService : ArticlesService) { }

  ngOnInit() {
    this.tagService.getGlobalTags().subscribe((data : {tags:string}) => {
      this.tags=data.tags
    });
  }

  onTagSelection(value) {
    this.tagService.setTagName(value)
    this.articleService.getFeedByTag(value)
  }

  tagSelected(tag){
    this.isTagSelected.emit(tag)
  }
}
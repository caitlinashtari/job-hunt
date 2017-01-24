import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Story } from '../story.model';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.css'],
  providers: [StoryService]
})
export class StoryDetailComponent implements OnInit {
  storyId: number;
  storyToDisplay: Story;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private storyService: StoryService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.storyId = parseInt(urlParametersArray['id']);
    });
    this.storyToDisplay = this.storyService.getStoryById(this.storyId);
  }

  nextStory1(){
    this.route.params.forEach((urlParametersArray) => {
      this.storyId = parseInt(urlParametersArray['id']);
    });
    var story = this.storyService.getStoryById(this.storyId);
    this.storyToDisplay = this.storyService.getStoryById(story.nextStory1);
  }

}

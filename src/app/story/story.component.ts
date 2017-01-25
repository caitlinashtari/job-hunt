import { Component, OnInit } from '@angular/core';
import { Story } from '../story.model';
import { Router } from '@angular/router';
import { StoryService } from '../story.service';
import { USERS } from '../mock-users';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
  providers: [StoryService]
})
export class StoryComponent implements OnInit {
  constructor(private router: Router, private storyService: StoryService){}

  storys: Story[];
  user = USERS[1];

  goToStoryDetail(clickedStory: Story){
    this.router.navigate(['storys', clickedStory.id]);
  };

  ngOnInit() {
    this.storys = this.storyService.getStorys();
  }

}

import { Injectable } from '@angular/core';
import { Story } from './story.model';
import { STORYS } from './mock-storys';

@Injectable()
export class StoryService {

  constructor() { }

  getStorys() {
    return STORYS;
  }

  getStoryById(storyId: number) {
    for(var i = 0; i <= STORYS.length -1; i++) {
      if (STORYS[i].id === storyId) {
        return STORYS[i];
      }
    }
  }
}

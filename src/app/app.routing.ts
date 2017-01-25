import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { StoryComponent } from './story/story.component';
import { StoryDetailComponent } from './story-detail/story-detail.component';
import { CodeSchoolComponent } from './code-school/code-school.component';


const appRoutes: Routes = [
{
    path: '',
    component: StartComponent
},
{
  path: 'story',
  component: StoryComponent
},
{
  path: 'storys/:id',
  component: StoryDetailComponent
},
{
  path: "code-school",
  component: CodeSchoolComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

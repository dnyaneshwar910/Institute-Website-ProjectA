import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { EventsComponent } from './components/events/events.component';
import { TeamComponent } from './components/team/team.component';

const routes: Routes = [
  { path: '', component: HeroSectionComponent }, // Default route
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'events', component: EventsComponent },
  { path: 'team', component: TeamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

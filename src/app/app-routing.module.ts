import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/portfolio/about/about.component';
import { ContactComponent } from 'src/portfolio/contact/contact.component';
import { EducationComponent } from 'src/portfolio/education/education.component';
import { ExperienceComponent } from 'src/portfolio/experience/experience.component';
import { ProjectsComponent } from 'src/portfolio/projects/projects.component';
import { SkillsComponent } from 'src/portfolio/skills/skills.component';
import { AnimationComponent } from './animation/animation.component';

const routes: Routes = [
  { path: '', component: AnimationComponent, pathMatch: 'full' },
  {
    path: 'about',
    component: AboutComponent,
  },
  { path: 'experience', component: ExperienceComponent },
  {
    path:'projects', component:ProjectsComponent
  },
  {
    path:'skills', component:SkillsComponent
  },
  {
    path:'education',component:EducationComponent
  },
  {
  path:'contact',component:ContactComponent
  },
  {
    path:'animation',component:AnimationComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

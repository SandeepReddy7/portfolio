import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';

const appRoute: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'project',
    component: ProjectsComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: '',
    component: HomeComponent,
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoute, { useHash: true}),
  ],
  declarations: []
})
export class AppRoutingModule { }

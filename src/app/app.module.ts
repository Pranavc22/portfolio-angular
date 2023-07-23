import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { EducationComponent } from './education/education.component';
import { WorkExComponent } from './work-ex/work-ex.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { ResponsiveDirective } from '../directives/responsive.directive';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    EducationComponent,
    WorkExComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    ResponsiveDirective,
    ErrorComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot([
      {path: '', component: HeaderComponent},
      {path: 'header', component: HeaderComponent},
      {path: 'about-me', component: AboutMeComponent},
      {path: 'education', component: EducationComponent},
      {path: 'work-ex', component: WorkExComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: 'skills', component: SkillsComponent},
      {path: 'contact', component: ContactComponent},
      {path: '**', component: ErrorComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

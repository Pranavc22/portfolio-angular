import { Component } from '@angular/core';
import { Experience } from '../models/work-ex.model';

@Component({
  selector: 'app-work-ex',
  templateUrl: './work-ex.component.html',
  styleUrls: ['./work-ex.component.css']
})
export class WorkExComponent {
  experiences: Experience [] = [
    {
      organisation: "Biz2Credit",
      role: "Associate Data Science Engineer",
      timePeriod: "July '23 - Present",
      description: "Funnily enough, the organiation has given me training on development using the MEAN stack. You learn something new everyday, I guess. I will later be working on statistical machine learning models."
    },
    {
      organisation: "Spastha Technologies",
      role: "Software Developer Intern",
      timePeriod: "May '22 - July '22",
      description: "I spear-headed the development of the mobile application for Spashta Technologies' B2B offerings. The application was made using Flutter and Firebase and could be launched on any mobile device.",
    }
  ];
}

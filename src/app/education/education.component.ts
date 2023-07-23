import { Component } from '@angular/core';
import { Education } from '../models/education.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationList: Education[] = [
    {
      institute: "Netaji Subhas University of Technology, Delhi, India", 
      subject: "B.Tech - Computer Science and Engineering",
      duration: "2019-2023",
      score: "7.9 GPA"
    },
    {
      institute: "Indian School Al Wadi Al Kabir, Muscat, Oman", 
      subject: "Senior-Secondary School - Science",
      duration: "2017-2019",
      score: "94%"
    },
    {
      institute: "New Era Senior Secondary School, Vadodara, Gujarat, India", 
      subject: "Secondary School",
      duration: "2015-2017",
      score: "N.A."
    },
    {
      institute: "Our Own English High School, Sharjah, UAE", 
      subject: "Primary and Middle School",
      duration: "2007-2015",
      score: "N.A."
    }
  ];
}

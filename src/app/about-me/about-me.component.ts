import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  para1: string = "You already know my name, now let's see what I do for fun. :)";
  para2: string = "I like creating things. That could be machine learning models or multi-platform applications. Apart from the technical stuff, I like reading and writing. I have recently read Sita by Amish. I usually read fiction novels. I like playing a ton of games, especially passionate about racing and table tennis.";
  personalData: string[][] = [
    ['Name', 'Pranav Chaudhary'],
    ['DOB', '22-10-2001'],
    ['Working at', 'Biz2Credit'],
    ['Working as', 'Associate Data Science Engineer'],
    ['Interested in', 'Data Science, Software Development, Reading, Table Tennis, Racing, etc.']
  ];
}

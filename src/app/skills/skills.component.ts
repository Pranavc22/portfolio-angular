import { Component } from '@angular/core';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills : Skill [] = [
    {
      name: "Artificial Intelligence - Python, R",
      level: "Advanced",
      rating: 80,
    },
    {
      name: "App Development - Dart, Flutter, Firebase",
      level: "Advanced",
      rating: 70,
    },
    {
      name: "Web Development - MongoDB, ExpressJS, NodeJS, Angular CLI",
      level: "Intermediate",
      rating: 50,
    },
    {
      name: "Web Development - HTML, CSS, JavaScript, TypeScript, PHP, XML",
      level: "Beginner",
      rating: 50,
    },
    {
      name: "Programming - C++",
      level: "Advanced",
      rating: 80,
    },
    {
      name: "Graphic Design - Canva, Figma",
      level: "Intermediate",
      rating: 60,
    }
  ];
}

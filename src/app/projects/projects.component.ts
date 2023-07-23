import { Component } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      name: "Task Offloading and Scheduling in Fog Computing",
      type: "B.Tech. Project - Final Year",
      techStack: "Java, Python, iFogSim",
      duration: "4 months",
      description: "The primary objective of this project was to create a thesis and to provide a comparitive study about existing task offloading and scheduling algorithms, an optimised algorithmic setup, testing and comparison of the setups to existing algorithms in a fog environment simulation. As the Team Lead, I contributed in the making of one of the three algorithmic setups along with the testing simulation environment.",
      link: ""
    },
    {
      name: "DMDNet for Bind Face Restoration",
      type: "College Curriculum Project",
      techStack: "Python, Google Colab",
      duration: "1 month",
      description: "We used an existing model called as Dual Memory Dictionary (DMD) as a neural network in order to create person-specific and generic face restorations to images that had been exposed to blind noise. Different experiments were also run on the model including tweaking the activation function, regularisation technique, adaptive dictionary reading process and normalisation parameters in order to obtain better results and explore the model more.",
      link: ""
    },
    {
      name: "Suspicious Activity Detection in Classrooms using Deep Learning",
      type: "B.Tech. Project - Final Year",
      techStack: "Python, Google Colab, VGG Image Annotator (VIA)",
      duration: "4 months",
      description: "In this project, we tweaked an existing model known as Mask-RCNN and annotation techniques in order to obtain better results. We created our own video dataset and annotated it using the VIA tool. The tweaked model was then run on this model and optimised results were obtained. As the Team Lead, I contributed in implementing the model, making and annotating the dataset.",
      link: ""
    },
    {
      name: "Design of Energy Efficient IoT-based Smart Street Light System",
      type: "College Curriculum Project",
      techStack: "Arduino",
      duration: "1 month",
      description: "We created two Arduino-based hardware setups for the automation of street light systems in India. One of the setups was powered completely through solar energy and was hence Carbon-neutral. Check out the paper on Springer!",
      link: "https://link.springer.com/chapter/10.1007/978-3-031-28180-8_17"
    },
    {
      name: "Vehicle Accident Detection System",
      type: "College Curriculum Project",
      techStack: "Python, EdgeImpulse",
      duration: "1 month",
      description: "I created an ML model on the Edge Impulse platform in order to track live car data and simulated accidents in order to generate such data via a tracking device where the model was runnning live. The model accurately classified the motions of the device as Stationery, Normal Drive, Rapid Movement and Crashes. This system was deployed and can be used live on any mobile device.",
      link: ""
    },
    {
      name: "Stock Market Price Prediction",
      type: "College Curriculum Project",
      techStack: "PowerBI, R",
      duration: "1 month",
      description: "I created a dashboard on Power BI for the forecasting of stock market prices using Power BI's forecasting model. I then created two more models based on ARIMA in R and deployed the scripts on Power BI for comparison. The stock market data was pulled from Yahoo Finance. The dashboard allowed the users to select any stock and any time period for which the stock market values could be pulled and forecasted.",
      link: ""
    },
    {
      name: "Spastha App",
      type: "Internsip Project",
      techStack: "Flutter, Firebase",
      duration: "2 months",
      description: "I spear-headed the development of an application for Spashta Technologies which would enable their B2B offering on mobile devies. This was a full-stack project and includes RESTful-API Communication, User Authentication and Authorisation, Firebase Storage and Local Secure Storage Communication along with Flutter's Front-End. Check it out on GitHub!",
      link: "https://github.com/Pranavc22/Spashta-BaseApp"
    }
  ];

}

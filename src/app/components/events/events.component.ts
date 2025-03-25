import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  standalone: false,
  
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  events = [
    {
      title: 'Web Development Workshop',
      date: 'February 15, 2025',
      description: 'A hands-on workshop focusing on modern web development technologies like Angular, React, and Vue.js.',
      image: 'https://cdn.pixabay.com/photo/2019/06/17/19/48/source-4280758_640.jpg'
    },
    {
      title: 'Data Science Webinar',
      date: 'February 20, 2025',
      description: 'Join us for a webinar on the basics of data science and its applications in the industry.',
      image: "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_640.jpg"
    },
    {
      title: 'Career Fair',
      date: 'March 5, 2025',
      description: 'A career fair where you can connect with top industry recruiters and explore internship and job opportunities.',
      image: 'https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_640.jpg'
    }
  ];
}

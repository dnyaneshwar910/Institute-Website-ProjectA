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
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/7/435666805/XC/OA/VN/81927943/whatsapp-image-2024-07-17-at-7-13-53-am.jpeg'
    },
    {
      title: 'Data Science Webinar',
      date: 'February 20, 2025',
      description: 'Join us for a webinar on the basics of data science and its applications in the industry.',
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/08/data-science-webinars-and-workshops.webp"
    },
    {
      title: 'Career Fair',
      date: 'March 5, 2025',
      description: 'A career fair where you can connect with top industry recruiters and explore internship and job opportunities.',
      image: 'https://careers.umbc.edu/wp-content/uploads/sites/221/2014/09/Career_Fair_Fall14-0694crop.jpg'
    }
  ];
}

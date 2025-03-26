import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  standalone: false,
  
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  teamMembers = [
    {
      name: 'sagar sharma',
      role: 'CEO & Founder',
      bio: 'John is the visionary behind the company, guiding us with his innovative thinking.',
      image: 'https://cdn.pixabay.com/photo/2024/08/30/14/02/ai-generated-9009342_640.jpg'
    },
    {
      name: 'Sonu sutar',
      role: 'CTO',
      bio: 'Jane leads the technical team and ensures our technology stays cutting-edge.',
      image: 'https://cdn.pixabay.com/photo/2024/05/29/08/03/ai-generated-8795643_640.jpg'
    },
    {
      name: 'Nayan Patel',
      role: 'Lead Designer',
      bio: 'Michael is the creative force behind our user-friendly and engaging designs.',
      image: 'https://cdn.pixabay.com/photo/2024/11/10/12/33/businessman-9187789_640.jpg'
    },
    {
      name: 'Prajwal Thorat',
      role: 'Lead Designer',
      bio: 'Michael is the creative force behind our user-friendly and engaging designs.',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/048/764/549/small/confident-middleaged-male-school-teacher-middle-eastern-descent-smiling-in-classroom-ideal-for-educational-professional-and-cultural-diversity-themes-photo.jpg'
    },
    {
      name: 'Disha Tribhuvan',
      role: 'Lead Designer',
      bio: 'Michael is the creative force behind our user-friendly and engaging designs.',
      image: 'https://static.vecteezy.com/system/resources/previews/040/691/150/non_2x/ai-generated-woman-standing-in-classroom-with-arms-crossed-generative-ai-photo.jpg'
    },
    {
      name: 'Suraj Bhokare',
      role: 'Lead Designer',
      bio: 'Michael is the creative force behind our user-friendly and engaging designs.',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/049/462/160/small/confident-african-american-public-school-teacher-smiling-in-colorful-classroom-setting-photo.jpeg'
    }
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: false,
  
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  posts = [
    {
      image: 'https://ischoolconnect.com/blog/wp-content/uploads/2023/11/2-9-770x513.png',
      title: 'Top 5 Tips for Academic Success',
      shortDescription: 'Discover practical strategies to improve your academic performance and achieve your educational goals.'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2017/08/06/22/01/books-2596809_640.jpg',
      title: 'The Future of Online Education',
      shortDescription: 'Explore how technology is reshaping the way we learn and what the future holds for online education.'
    },
    {
      image: 'https://ik.imagekit.io/upgrad1/abroad-images/imageCompo/images/7_Tips_To_Stay_Motivated_During_Exams_1400_1400_px_VTP6EE.png?tr=f-jpg,pr-true',
      title: 'How to Stay Motivated During Exams',
      shortDescription: 'Learn the best strategies to keep your motivation high and stay focused during exam time.'
    }
  ];
}

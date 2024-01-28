import { Component , OnInit } from '@angular/core'; // importing onInit

// with import of Posts now we able to access mock-post.ts in post component file

import { Posts } from 'src/app/mock-post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit { // when we use onInit we need to use implemnts Onint 
  posts = Posts // assigning the values from posts to new  variable called post 


  //ngOninit is a angular life cycle method 
  ngOnInit(): void{
    console.log(this.posts)
  }

}

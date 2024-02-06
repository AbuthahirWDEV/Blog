import { Component, Input, OnInit } from '@angular/core'; // importing onInit

// with import of Posts now we able to access mock-post.ts in post component file

// import { Posts } from 'src/app/mock-post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  // when we use onInit we need to use implemnts Onint
  posts: any; // assigning the values from posts to new  variable called post

  // receving value from parent home
  @Input() colClass: any;

  constructor(private postService: PostService) {}

  //ngOninit is a angular life cycle method
  ngOnInit(): void {
    this.postService.getPosts().subscribe((retrivedData) => {
      this.posts = retrivedData;
    });
  }

  deletePost(post: any) {
    // we need to pass the id
    this.postService.deletePost(post.id).subscribe(() => {
      this.posts = this.posts.filter(
        // need to understand this logic
        (p: any) => p.id != post.id
      );
    });
  }
}

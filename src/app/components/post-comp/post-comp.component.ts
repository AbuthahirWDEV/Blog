import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-comp',
  templateUrl: './post-comp.component.html',
  styleUrls: ['./post-comp.component.scss']
})
export class PostCompComponent implements OnInit {
  // now we need to accept the input comming from posts comp which is cardPost 
  // receving value from parent posts.ts
  @Input() cardPost : any
  
  constructor(private postService : PostService){}
  ngOnInit(): void {
    
  }

  onDelete(){
    // we need to pass the id 
    this.postService.deletePost(this.cardPost.id).subscribe()
  }
}

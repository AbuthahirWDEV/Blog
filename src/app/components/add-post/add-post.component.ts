import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  title : any
  content : any

  constructor(private postService : PostService){}
  ngOnInit(): void {
    
  }

  onSubmit(){
    const new_post = {
      title   : this.title,
      content : this.content
    }

    this.postService.createPost(new_post).subscribe()
    this.title = "",
    this.content = ""
  }
}

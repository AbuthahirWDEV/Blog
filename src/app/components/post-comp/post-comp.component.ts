import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-comp',
  templateUrl: './post-comp.component.html',
  styleUrls: ['./post-comp.component.scss'],
})
export class PostCompComponent implements OnInit {
  // now we need to accept the input comming from posts comp which is cardPost
  // receving value from parent posts.ts
  @Input() cardPost: any;

  @Output() onDeletePost: EventEmitter<any> = new EventEmitter();

  constructor(private postService: PostService) {}
  ngOnInit(): void {}

  onDelete() {
    this.onDeletePost.emit();
  }
}

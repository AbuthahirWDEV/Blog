import { Component , OnInit} from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  post: any;
  id: any;
  title: any;
  content: any;

  constructor(private postservice: PostService, private route: ActivatedRoute , private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.postservice.getEditPost(params['id']).subscribe((post) => {
        this.id = post.id;
        this.title = post.title;
        this.content = post.content;
      });
    });
  }

  onSubmit() {
    const update_post = {
      id: this.id,
      title: this.title,
      content: this.content
    };
    this.postservice.editPost(update_post).subscribe(() => {
      this.router.navigate(['/blog']);
    });
  }

}

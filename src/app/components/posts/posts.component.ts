import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private post: PostService) { }

  name:string = "Samuel Ogu";

  posts: any = [];

  ngOnInit() {
    this.getPost();
  }

  getPost() {
    this.post.get().subscribe(data => {
      this.posts = data;
    })
  }

}

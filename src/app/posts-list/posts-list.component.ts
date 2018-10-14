import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';
import { Post } from '../post.interface';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts: Post[];
  isLoading: boolean;

  constructor(private apiCallService: ApiCallService) { }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.isLoading = true;
    this.apiCallService.getPosts().subscribe(result => {
      this.posts = result;
      this.isLoading = false;
    }, error => {
      console.error(error);
      this.isLoading = false;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';
import { Post } from '../post.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  newPost: Partial<Post> = {};

  constructor(private apiCallService: ApiCallService) { }

  ngOnInit() {
  }

  createNewPost() {
    this.apiCallService.createPost(this.newPost).subscribe(result => {
      console.log(result);
    }, error => {
      console.error(error);
    });
  }

}

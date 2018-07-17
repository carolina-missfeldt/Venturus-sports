import { Component, OnInit } from '@angular/core';
import { UserService } from '../../resources/services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { PhotoService } from '../../resources/services/photo.service';
import { PostService } from '../../resources/services/post.service';
import { AlbumService } from '../../resources/services/album.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private userService: UserService,
     private photoService: PhotoService,
     private postService: PostService,
     private albumService: AlbumService
    ) { }

  ngOnInit() {
    this.userList();
    this.photosList();
    this.postsList();
    this.albumsList();
  }

  public userList() {
    this.userService.listUsers()
    .subscribe(
      success => {
        console.log(success);
      },
      (err: HttpErrorResponse) => {
        console.log(err.statusText);
      }
    );
  }

  public photosList() {
    this.photoService.listPhotos()
    .subscribe(
      success => {
        console.log(success);
      },
      (err: HttpErrorResponse) => {
        console.log(err.statusText);
      }
    );
  }

  public postsList() {
    this.postService.listPosts()
    .subscribe(
      success => {
        console.log(success);
      },
      (err: HttpErrorResponse) => {
        console.log(err.statusText);
      }
    );
  }

  public albumsList() {
    this.albumService.listAlbums()
    .subscribe(
      success => {
        console.log(success);
      },
      (err: HttpErrorResponse) => {
        console.log(err.statusText);
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../../resources/services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../../resources/class/bean/user';
import { PostService } from '../../resources/services/post.service';
import { Post } from '../../resources/class/bean/post';
import { AlbumService } from '../../resources/services/album.service';
import { Album } from '../../resources/class/bean/album';
import { PhotoService } from '../../resources/services/photo.service';
import { Photo } from '../../resources/class/bean/photo';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public usersList: Array<User> = [];
  public albumList: Array<Album> = [];
  public photos: number;
  public search: string;

  constructor(
    private userService: UserService,
    private postService: PostService,
    private albumService: AlbumService,
    private photoService: PhotoService,
  ) { }

  ngOnInit() {
    this.userList();
  }

  public userList() {
    this.userService.listUsers()
    .subscribe(
      success => {
        this.usersList = success;
        this.postsList(this.usersList);
        this.albumsList(this.usersList);
        this.fillProperties(this.usersList);
      },
      (err: HttpErrorResponse) => {
        console.log(err.statusText);
      }
    );
  }

  public deleteUser(user: User) {
    this.usersList.splice(this.usersList.indexOf(user), 1);
  }

  private postsList(users: Array<User>) {
    this.postService.listPosts()
    .subscribe(
      success => {
        let userPostsList: Array<Post> = [];
        userPostsList = success;
          users.forEach( user => {
            userPostsList.forEach(post => {
              if (user.id === post.userId) {
                user.posts.push(post);
              }
            });
          });
          return this.usersList;
      },
      (err: HttpErrorResponse) => {
        console.log(err.statusText);
      }
    );
  }

  public albumsList(users: Array<User>) {
    this.albumService.listAlbums()
    .subscribe(
      success => {
        this.albumList = success;
        this.photosList(this.albumList);
        users.forEach( user => {
          this.albumList.forEach(album => {
            if (user.id === album.userId) {
              user.album.push(album);
            }
          });
        });
        return this.usersList;
      },
      (err: HttpErrorResponse) => {
        console.log(err.statusText);
      }
    );
  }

  public photosList(albums: Array<Album>) {
    this.photoService.listPhotos()
    .subscribe(
      success => {
        let photoList: Array<Photo>;
        photoList = success;
        albums.forEach( album => {
          photoList.forEach(photo => {
            if (album.id === photo.albumId) {
              album.photos.push(photo);
              this.photos = album.photos.length;
            }
          });
        });
        return this.albumList;

      },
      (err: HttpErrorResponse) => {
        console.log(err.statusText);
      }
    );
  }

  private fillProperties(users: Array<User>) {
    const possiblerideInGroup = ['Always', 'Sometimes', 'Never'];
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    users.forEach( user => {
      const randomString = Math.floor(Math.random() * possiblerideInGroup.length);
      const randomDay = Math.floor(Math.random() * daysOfWeek.length);
      user.rideInGroup = possiblerideInGroup[randomString];
      user.dayOfTheWeek = daysOfWeek[randomDay];
    });
    return this.usersList;
  }

}

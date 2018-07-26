import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { User } from '../class/bean/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public listUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
    .pipe(
      map(res => res.map((user: User) => new User().set(user)))
    );
  }

  // public deleteUser(id?: number): Observable<Response> {
  //   return this.http.delete<Response>(`https://jsonplaceholder.typicode.com/users/${id}`);
  //   // requisição delete não funciona
  // }
}

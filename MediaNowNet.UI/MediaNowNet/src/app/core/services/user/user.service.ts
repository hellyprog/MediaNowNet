import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  status: boolean;

  constructor(private http: HttpClient) { }

  login() {
    return true;
  }

  logout() {
    return false;
  }

  isLoggedIn() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  // isLoggedIn(): Observable<boolean> {
  //   return of(localStorage.isLoggedIn);
  // }
}

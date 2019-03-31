import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = '../assets/data.json';
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.url);
  }

  getUser(name) {
    return this.http.get(this.url + name);
  }

  addUser() {
    return this.http.post(this.url,
      {
      'name':  'Customer004',
      'email':  'customer004@email.com',
      })
      .subscribe(data  => {
      console.log('POST Request is successful ', data);
      },
      error  => {

      console.log('Error', error);

      }

    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/table-models';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  private url = 'https://randomuser.me/api/?results=100&seed=1&inc=gender,name,email,location,phone,picture';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<{ results: User[] }> {
    return this.http.get<{ results: User[] }>(this.url);
  }

}


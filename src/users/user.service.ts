import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl='http://localhost:3000/user'

  constructor(private http: HttpClient) { 
  }

  getUsers() : Observable<IUser[]>{
    return this.http.get<IUser[]>(this.baseUrl);
  }

  editUser(user: any) : Observable<any>{
    return this.http.patch<any>(this.baseUrl, user)
  }

  deleteUser(id : any) : Observable<any>{
    return this.http.delete(this.baseUrl, { params: {'id':id} })
  }

  addUser(user: any) : Observable<any>{
    return this.http.post<any>(this.baseUrl,user)
  }

}

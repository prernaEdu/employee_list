import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
   baseUrl='http://localhost:3000/login'

  login(authPara : any) {
    return this.http.post<any>(this.baseUrl, authPara )
}
}

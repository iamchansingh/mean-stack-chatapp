import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
const BASEURL='https://localhost:3000/api/chatApp'

@Injectable()
export class AuthService {

  constructor(private http:HttpClient) { }
  registerUser(body):Observable <any>{
    return this.http.post(`${BASEURL}/register`,body)
  }

}

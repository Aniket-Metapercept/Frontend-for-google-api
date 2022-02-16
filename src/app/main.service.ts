import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http : HttpClient) { }

  log=false
  getLoginByGoogle():Observable<any>{
    return this.http.get<any>('http://localhost:3000/auth/google/')
  }



  logout():Observable<any>{
    return this.http.get<any>('http://localhost:3000/auth/logout')
  }

}

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleCalenderService {

  constructor(private http : HttpClient) { }

  addEventInCalender(data:any):Observable<any>{
    return this.http.post<any>('http://localhost:3000/auth/addevents2',data)
  }

  getData():Observable<any>{
    return this.http.get('http://localhost:3000/auth/getsEvents/'+localStorage.getItem('token'))
  }
}

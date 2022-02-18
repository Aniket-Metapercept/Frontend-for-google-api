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

  getEventById(id:any):Observable<any>{
    return this.http.get<any>(`http://localhost:3000/auth/geteventbyid/${id}`)
  }

  update(id:any,data:any):Observable<any>{
    return this.http.put<any>(`http://localhost:3000/auth/update/${id}`,data)
  }

  delete(id:any):Observable<any>{
    return this.http.delete<any>(`http://localhost:3000/auth/delete/${id}`)
  }

}

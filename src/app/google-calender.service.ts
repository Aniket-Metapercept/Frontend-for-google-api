import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleCalenderService {

  constructor(private http : HttpClient) { }

  addEventInCalender(data:any):Observable<any>{
    return this.http.post<any>('http://localhost:3000/calender/createEvents',data,{headers: {'refresh_token':"Bearer "+localStorage.getItem('token')}})
  }

  getData():Observable<any>{
    return this.http.get('http://localhost:3000/calender/getsEvents/',{headers: {'refresh_token':"Bearer "+localStorage.getItem('token')}})
  }

  getEventById(id:any):Observable<any>{
    return this.http.get<any>(`http://localhost:3000/calender/geteventbyid/${id}`,{headers: {'refresh_token':"Bearer "+localStorage.getItem('token')}})
  }

  update(id:any,data:any):Observable<any>{
    return this.http.put<any>(`http://localhost:3000/calender/update/${id}`,data,{headers: {'refresh_token':"Bearer "+localStorage.getItem('token')}})
  }

  delete(id:any):Observable<any>{
    return this.http.delete<any>(`http://localhost:3000/calender/delete/${id}`,{headers: {'refresh_token':"Bearer "+localStorage.getItem('token')}})
  }

}

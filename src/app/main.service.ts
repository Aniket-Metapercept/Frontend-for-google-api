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

  addProfessionalDetails(data:any):Observable<any>{
    return this.http.post<any>('http://localhost:3000/employee/professionalDetails/',data)
  }

  getProfessionalDetails(id:any):Observable<any>{
    return this.http.get<any>('http://localhost:3000/employee/professionalDetails/'+id)
  }

  deleteProfessionalDetails(id:any):Observable<any>{
    return this.http.delete<any>('http://localhost:3000/employee/professionalDetails/'+id)
  }

  applyforleave(data:any):Observable<any>{
    return this.http.post<any>('http://localhost:3000/employee/leave/',data)
  }
  getAllLeaveApplication():Observable<any>{
    return this.http.get<any>('http://localhost:3000/employee/leave/')
  }
  approveLeave(data:any,id:any):Observable<any>{
    return this.http.put<any>('http://localhost:3000/employee/leave/'+id,data)
  }

}

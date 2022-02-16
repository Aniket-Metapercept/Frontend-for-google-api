import { Router } from '@angular/router';
import { MainService } from './../main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:MainService,private route:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')){
      console.log("weihgouhgoeuhgweljgheuofgheakawhjyfoepgew4rhgu")
      this.route.navigate(['/home'])
    }
  }


  data : any

  githubLogin(){
    console.log("doen")
    window.open("http://localhost:3000/auth/github", "_self");
  }


  googleLogin(){


      window.open("http://localhost:3000/auth/google", "_self");



    // this.service.getLoginByGoogle().subscribe(data=>{
    //   console.log(data)
    // })
    // window.open('http://localhost:3000/auth/google/','_self')
  }
  // logout(){
  //   // this.service.logout().subscribe(data=>{
  //   //   console.log(data)
  //   // })
  //   window.open('http://localhost:3000/auth/logout/','_self')
  // }
}

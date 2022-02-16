import { Component, OnInit } from '@angular/core';

import { MainService } from '../main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public service: MainService) { }

  ngOnInit(): void {
  }
  logout(){
    // this.service.logout().subscribe(data=>{
    //   console.log(data)
    // })
    localStorage.clear()
    this.service.log = false
    window.open('http://localhost:3000/auth/logout/','_self')
  }
}

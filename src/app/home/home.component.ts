import { GoogleCalenderService } from './../google-calender.service';
import { MainService } from './../main.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data !:any
  formValue !: FormGroup
  show!:Boolean
  msg:any

  constructor(private service: MainService, private fb: FormBuilder, private googleService : GoogleCalenderService ) { }


  onSubmit(){
    let data = this.formValue.value
    data.token = localStorage.getItem('token')
    this.googleService.addEventInCalender(data).subscribe(data=>{
      console.log(data)

      if(data){
        this.show = true
        this.msg = "Data added To Calender"
      } else {
        this.show = true
        this.msg = "Data not added To Calender"
      }
    })

  };


  ngOnInit(): void {

    this.formValue = this.fb.group({
      summary: new FormControl('',[Validators.required]),
      location: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      from: new FormControl('',[Validators.required]),
      to: new FormControl('',[Validators.required]),

    })

    fetch("http://localhost:3000/auth/login/success", {
        method: "GET",
        credentials: "include",

      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          this.data = resObject.user;
          console.log(this.data)
          localStorage.setItem('user',this.data.displayName)
          localStorage.setItem('token',this.data.token)
          console.log(this.data.token)
          this.service.log = true
        })
        .catch((err) => {
          console.log(err);
        });
    };

  };



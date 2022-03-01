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
  formValue2 !: FormGroup
  show!:Boolean
  msg:any

  constructor(private service: MainService, private fb: FormBuilder, private googleService : GoogleCalenderService ) { }


  onSubmit(){
    let data = this.formValue.value
    data.token = localStorage.getItem('token')
    this.googleService.addEventInCalender(data).subscribe(data=>{
      console.log(data)

      this.getAllEvent()
    })

  };

  eventData:any
  getAllEvent(){
    this.googleService.getData().subscribe(data=>{
      this.eventData = data
    })
  }

  onSubmit2(){
    console.log(this.formValue2.value)
    window.open('https://meet.google.com/'+this.formValue2.value.code,"_blank")
  }

  ngOnInit(): void {

    this.formValue = this.fb.group({
      summary: new FormControl('',[Validators.required]),
      location: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      from: new FormControl('',[Validators.required]),
      to: new FormControl('',[Validators.required]),

    })

    this.formValue2 = this.fb.group({
      code : new FormControl('',[Validators.required])
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
          localStorage.setItem('user',this.data.name)
          localStorage.setItem('token',this.data.token)
          localStorage.setItem('userId',this.data.sub)
          console.log(this.data.token)
          this.service.log = true
        })
        .catch((err) => {
          console.log(err);
        });
    };

  };



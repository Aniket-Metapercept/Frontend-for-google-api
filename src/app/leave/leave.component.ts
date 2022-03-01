import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MainService } from '../main.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {
  formValue !: FormGroup

  show!:Boolean
  msg:any

  constructor( private fb: FormBuilder,private mainService:MainService) { }

  ngOnInit(): void {
    this.formValue = this.fb.group({
      name: new FormControl('',[Validators.required]),
      leave_type: new FormControl('',[Validators.required]),
      start: new FormControl('',[Validators.required]),
      end: new FormControl('',[Validators.required]),
      manager: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      reason: new FormControl('',[Validators.required]),

    })

  }


  onSubmit(){
    let data = this.formValue.value
    data.userId = localStorage.getItem('userId')
    // console.log(data)
    this.mainService.applyforleave(data).subscribe(data=>{
      console.log(data)
    })
  };

  allData:any
  details(){
    this.mainService.getAllLeaveApplication().subscribe(data=>{
      console.log(data)
      this.allData = data
    })
  }

  approve(id:any){
    this.mainService.approveLeave({status:"approved"},id).subscribe(data=>{
      console.log(data)
      this.details()
    })
  }
}

import { MainService } from './../main.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employeed-detail-form',
  templateUrl: './employeed-detail-form.component.html',
  styleUrls: ['./employeed-detail-form.component.css']
})
export class EmployeedDetailFormComponent implements OnInit {
  formValue !: FormGroup

  show!:Boolean
  msg:any

  constructor( private fb: FormBuilder,private mainService:MainService) { }

  ngOnInit(): void {
    this.formValue = this.fb.group({
      date_of_joining: new FormControl('',[Validators.required]),
      designation: new FormControl('',[Validators.required]),
      department: new FormControl('',[Validators.required]),
      salary_breakup: new FormControl('',[Validators.required]),
      previous_job: new FormControl('',[Validators.required]),
      leave_balance: new FormControl('',[Validators.required]),
      reporting_manager: new FormControl('',[Validators.required]),
      apprasial_cycle: new FormControl('',[Validators.required]),
      insurance_details: new FormControl('',[Validators.required]),
      attendence: new FormControl('',[Validators.required]),

    })

  }


  onSubmit(){
    let data = this.formValue.value
    data.userId = localStorage.getItem('userId')
    this.mainService.addProfessionalDetails(data).subscribe(data=>{
      console.log(data)
    })
  };

  professionalDetails:any
  details(){
    this.mainService.getProfessionalDetails(localStorage.getItem('userId')).subscribe(data=>{
      console.log(data)
      this.professionalDetails = data
    })
  }


  ondelete(){
    this.mainService.deleteProfessionalDetails(localStorage.getItem('userId')).subscribe(data=>{
      console.log(data)
      this.professionalDetails = ""
    })
  }


}

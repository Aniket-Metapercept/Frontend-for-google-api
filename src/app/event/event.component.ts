import { GoogleCalenderService } from './../google-calender.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(private route: ActivatedRoute,private googleapi:GoogleCalenderService,private fb: FormBuilder,private r1:Router) { }
  formValue !: FormGroup
  id:any
  eventdata:any
  msg = null

  ngOnInit(): void {
    this.msg = null
    this.id = this.route.snapshot.paramMap.get('id');

    this.googleapi.getEventById(this.id).subscribe(data=>{
      console.log(data)
      this.eventdata = data

      console.log(this.eventdata.end.dateTime.slice(0,16))

      this.formValue = this.fb.group({
        summary: new FormControl(this.eventdata.summary,[Validators.required]),
        location: new FormControl(this.eventdata.location,[Validators.required]),
        description: new FormControl(this.eventdata.description,[Validators.required]),
        from: new FormControl(this.eventdata.start.dateTime.slice(0,16),[Validators.required]),
        to: new FormControl(this.eventdata.end.dateTime.slice(0,16),[Validators.required]),

      })


    })



  }


  onSubmit(){
    this.eventdata.summary = this.formValue.value.summary
    this.eventdata.location = this.formValue.value.location
    this.eventdata.description = this.formValue.value.description
    this.eventdata.start.dateTime = this.formValue.value.from
    this.eventdata.end.dateTime = this.formValue.value.to

      this.googleapi.update(this.id,this.eventdata).subscribe(data=>{
        console.log(data)
        this.msg = data
      })
  }

  ondelete(){
    this.googleapi.delete(this.id).subscribe(data=>{
      alert(data)
      this.r1.navigate(['/home'])
    })
  }
}

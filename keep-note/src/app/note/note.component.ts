import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from '../services/note.service';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  icon = "";

  constructor(private router : Router, private notes:NoteService) {
    switch(this.note.priority){
      case "Critical" :
        this.icon = "gpp_maybe"
        break ;
        case "High" :
        this.icon = "arrow_circle_up"
        break ;
        case "Medium" :
        this.icon = "remove_circle_outline"
        break ;
        case "Low" :
        this.icon = "arrow_circle_down"
        break ;
    }
   }
  @Input()
    note:any = {};
    
  ngOnInit(): void {
    
  }
  exp = false;
  expand(){
    console.log("executed")
      if(this.exp){
        this.exp = false;
      }
      else{
        this.exp=true;
      }
  }
  expand1(){
    this.exp=true ;
  }

  editform(){
    // alert("hello")
    this.router.navigate(["/note",this.note.id])
    // this.router.navigateByUrl("")
  }

  delete(id:number){
    this.notes.deleteNote(id).subscribe(data => {
      data
    })
    alert("Deleted successfully"+ id)
  }

}

import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
// import { notes } from '.././models/notes';
import { note } from '.././models/note';
import { NoteService } from '../services/note.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit, OnChanges {
  flag= false;

  openAddInterface(){
      if(this.flag){
        this.flag=false;
      }
      else{
        this.flag=true;
      }
  }
  

  constructor(private note : NoteService) { }
  ngOnChanges(changes: SimpleChanges): void {

  }
  

  notes:note[] = [] ;


  onSearchTextChanged(text:any){
    if(text === "" || text === null){
      this.note.getNotes().subscribe(data => this.notes = data);
    }
    else{
      this.notes = this.notes.filter(obj => obj.title.toLowerCase().startsWith(text) || obj.title.toUpperCase().startsWith(text) );
    }
  }
  ngOnInit(): void {
    this.note.getNotes().subscribe({
      next: (data:note[] )=>{ this.notes= data},
      error: data => alert("Network issue....Please try Again!!!!") 
    })
  }

  pushNote(obj:note){
    this.flag=false;
    console.log("noteview")
    console.log(obj);
    this.notes.push(obj);
  }
}

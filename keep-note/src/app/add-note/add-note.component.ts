import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { note } from '../models/note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  minDate:Date = new Date();

  constructor(private note : NoteService, private snackbar: MatSnackBar) { }
  
  noteObj:note = {
    id : 0 ,
    title: "",
    content: "",
    reminderDate: "",
    category: "",
    priority: ""
  }

 

  @Output()
  saveNote: EventEmitter<note> = new EventEmitter<note> ();

  addNote(form:any){    
    this.saveNote.emit(this.noteObj);

      this.note.addNote(this.noteObj).subscribe({
        next : data => alert("Note Added"),
        error : e => {alert("Network Error !! Please try again :(")}
      });
      this.snackbar.open("Note added successfully","success",{duration:2000})
      form.reset();

    
  }

  ngOnInit(): void {
    this.minDate.setDate(this.minDate.getDate());
  }

}

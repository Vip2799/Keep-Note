import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { note } from '../models/note';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../services/note.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {

  minDate: Date = new Date();

  noteObj: any ;

  constructor(private route: Router, private note: NoteService, private snackbar: MatSnackBar, private activeRoute: ActivatedRoute) { }

  



  // @Output()
  // editNote: EventEmitter<note> = new EventEmitter<note>();

  saveNote(form: any) {
    this.note.updateNote(this.noteObj).subscribe({
      error: e => { alert("Network Error !! Please try again :(") }
    });
    this.route.navigate(['note'])
    this.snackbar.open("Note updated successfully", "success", { duration: 2000 })
    // this.editNote.emit(this.noteObj);
  }

  ngOnInit(): void {
    // this.minDate.setDate(this.minDate.getDate());
    // let id = this.activeRoute.paramMap.subscribe((data)=> data.get("id"));
    // this.note.getNote(+id).subscribe((data => this.noteObj1 =data));

    this.activeRoute.paramMap.subscribe(data => {
      let id = data.get('id') ?? 0;
      this.note.getNote(+id).subscribe(data => {
        this.noteObj = data;
        
      });
        // this.noteObj.id,
        // this.noteObj.title,
        // this.noteObj.content,
        //  this.noteObj.reminderDate,
        //  this.noteObj.category,
        //  this.noteObj.priority
      
      
    });
    console.log("hello")
    console.log(this.noteObj)

  }
}

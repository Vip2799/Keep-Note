import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { note } from '../models/note';
import { url } from 'inspector';
@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpClient: HttpClient) { }
  URL: string = "http://localhost:3000/notes"
  getNotes() {
    return this.httpClient.get<note[]>(this.URL);
  }
  getNote(id: number) {
    return this.httpClient.get<note>(this.URL + "/" + id);
  }
  updateNote(obj: note) {
    return this.httpClient.put<note>(`${this.URL}/${obj.id}`, obj);
  }

  deleteNote(id: number) {
    return this.httpClient.delete(this.URL + "/" + id);
  }
  addNote(obj: note) {
    return this.httpClient.post<note>(this.URL, obj);
  }
}

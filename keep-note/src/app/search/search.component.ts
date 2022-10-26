import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText: String = "";
@Output()
  searchTextChanged:EventEmitter<String> = new EventEmitter();

  search(){
      this.searchTextChanged.emit(this.searchText);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

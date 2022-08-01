import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
@Input() title: string = '';
@Input() typeOfData: any[]= [];
@Output() selectedData = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  detectCategoryChanges(event:any) {
    this.selectedData.emit(event);
  }
}

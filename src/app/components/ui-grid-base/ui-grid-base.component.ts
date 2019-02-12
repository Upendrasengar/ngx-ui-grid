import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-ui-grid',
  templateUrl: './ui-grid-base.component.html',
  styleUrls: ['./ui-grid-base.component.css']
})
export class UiGridBaseComponent implements OnInit {
  @Input('gridOptions') options;
  constructor() { }

  ngOnInit() {
  }

}

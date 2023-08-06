import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  //styleUrls: ['./success.component.css']
})

export class SuccessComponent implements OnInit {
  @Input() item = ''; // decorate the property with @Input()

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-shortener-url',
  templateUrl: './shortener-url.component.html',
  styleUrls: ['./shortener-url.component.css']
})
export class ShortenerUrlComponent implements OnInit {
  shortenerForm : FormGroup;
  reg : RegExp = /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi;

  constructor() {
    this.shortenerForm = new FormGroup({
      'url': new FormControl("",[Validators.required, Validators.pattern(this.reg)])
    });
  }

  ngOnInit(): void {

  }

  submit() {
    console.log('hello');
  }
}

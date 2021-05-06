import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-shortener-url',
  templateUrl: './shortener-url.component.html',
  styleUrls: ['./shortener-url.component.css']
})
export class ShortenerUrlComponent implements OnInit {
  shortenerForm : FormGroup;

  constructor() {
    this.shortenerForm = new FormGroup({
      'url': new FormControl()
    });
  }

  ngOnInit(): void {

  }

  submit() {
    console.log('hello');
  }
}

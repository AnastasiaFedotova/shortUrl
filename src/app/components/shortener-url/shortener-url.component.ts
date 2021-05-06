import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LinksServiceService } from 'src/app/services/links-service.service';
import { Link } from './../../link';
@Component({
  selector: 'app-shortener-url',
  templateUrl: './shortener-url.component.html',
  styleUrls: ['./shortener-url.component.css'],
  providers: [LinksServiceService]
})
export class ShortenerUrlComponent implements OnInit {
  shortenerForm : FormGroup;
  shortLink : Link;
  reg : RegExp = /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi;

  constructor(private httpService: LinksServiceService) {
    this.shortenerForm = new FormGroup({
      'url': new FormControl("", [Validators.required, Validators.pattern(this.reg)])
    });
  }

  ngOnInit(): void {
  }

  submit() {
    const link = {
      url: this.shortenerForm.value.url
    };

    this.httpService.generateLink(link).subscribe(
      (data: Link) => {
        this.shortLink = data;
      },
      error => console.log(error)
    );
  }
}

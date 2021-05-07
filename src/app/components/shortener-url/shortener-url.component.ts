import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LinksServiceService } from 'src/app/services/links-service.service';
import { Link } from '../../interface/link';
@Component({
  selector: 'app-shortener-url',
  templateUrl: './shortener-url.component.html',
  styleUrls: ['./shortener-url.component.css'],
  providers: [LinksServiceService]
})
export class ShortenerUrlComponent implements OnInit {
  shortenerForm : FormGroup;
  shortLink : string;
  isValidHttpUrl;

  constructor(private httpService: LinksServiceService) {
    this.isValidHttpUrl = function(control: FormControl) : {[s:string]: boolean} {
      try {
        if (control.value) {
          new URL(control.value);
        }
        return null;
      } catch (_) {
        return {"isUrl": true};
      }
    }

    this.shortenerForm = new FormGroup({
      'url': new FormControl("", [Validators.required, this.isValidHttpUrl])
    });

    console.log(this.shortenerForm)
  }

  ngOnInit(): void {
  }

  submit() {
    const link = {
      url: this.shortenerForm.value.url
    };

    this.httpService.generateLink(link).subscribe(
      (data: Link) => {
        this.shortLink = data.url;
      },
      error => console.log(error)
    );
  }
}

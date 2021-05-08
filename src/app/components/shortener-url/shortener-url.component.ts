import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LinksServiceService } from 'src/app/services/links-service.service';
import { Links } from '../../interface/link';
@Component({
  selector: 'app-shortener-url',
  templateUrl: './shortener-url.component.html',
  styleUrls: ['./shortener-url.component.css'],
  providers: [LinksServiceService]
})
export class ShortenerUrlComponent implements OnInit {
  shortenerForm: FormGroup;
  shortLink: string;
  isValidHttpUrl;

  constructor(private httpService: LinksServiceService) {
    this.isValidHttpUrl = function (control: FormControl): { [s: string]: boolean } {
      try {
        if (control.value) {
          new URL(control.value);
        }
        return null;
      } catch (_) {
        return { "isUrl": true };
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
      original_url: this.shortenerForm.value.url,
      short_url: null,
      user_id: null,
      view_count: null
    };

    this.httpService.generateLink(link).subscribe(
      (data: Links) => {
        this.shortLink = data.short_url;
      },
      error => console.log(error)
    );
  }
}

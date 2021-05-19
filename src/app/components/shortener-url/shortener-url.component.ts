import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ShortLinks } from 'src/app/interface/shortLinks';
import { LinksServiceService } from 'src/app/services/links-service.service';

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

  constructor(private linksServiceService: LinksServiceService) {
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
  }

  ngOnInit(): void {
  }

  submit() {
    const link = {
      url: this.shortenerForm.value.url,
      userId: null
    };

    this.linksServiceService.generateLink(link).subscribe(
      (data: ShortLinks) => {
        this.shortLink = data.short_url;
      },
      error => console.log(error)
    );
  }
}

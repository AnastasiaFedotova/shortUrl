import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { updateLinks } from 'src/app/interface/links';
import { ShortLinks } from 'src/app/interface/shortLinks';
import { LinksServiceService } from 'src/app/services/links-service.service';

@Component({
  selector: 'app-link-form',
  templateUrl: './link-form.component.html',
  styleUrls: ['./link-form.component.css']
})
export class LinkFormComponent implements OnInit {
  @Input() link: ShortLinks;
  linkForm: FormGroup;
  isChange: boolean = false;
  errorMessage: string;
  constructor(private linksServiceService: LinksServiceService) {
    this.linkForm = new FormGroup({
      "link": new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(10)])
    })
  }

  startChangeLinks() {
    this.isChange = true;
  }

  changeLink(link) {
    const newLink: updateLinks = {
      shortUrl: link.short_url,
      customUrl: this.linkForm.value.link
    }

    this.linksServiceService.changeNameLink(newLink).subscribe((value) => {
      if (!value) {
        this.errorMessage = 'error';
        this.isChange = true;
      } else {
        link.short_url = value;
        this.isChange = false;
      }
    });
  }

  ngOnInit(): void { }
}

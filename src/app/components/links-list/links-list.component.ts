import { Component, OnInit } from '@angular/core';
import { ShortLinks } from 'src/app/interface/shortLinks';
import { UserSessionService } from 'src/app/services/user-session.service';

@Component({
  selector: 'app-links-list',
  templateUrl: './links-list.component.html',
  styleUrls: ['./links-list.component.css'],
  providers: [UserSessionService]
})
export class LinksListComponent implements OnInit {
  links: ShortLinks[]
  constructor(private httpService: UserSessionService) {
    this.httpService.readUserList().subscribe(
      (data) => {
        this.links = data;
      },
      (err) => {
        console.log(err);
      }
    )
  }

  ngOnInit(): void { }
}

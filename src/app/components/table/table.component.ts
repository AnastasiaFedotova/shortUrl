import { Component, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './../../store/state/app.state';
import { selectUsersLinksList } from 'src/app/store/selectors/usersLinkList.selectors';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() content: {}[] = [];
  @Input() header: string = '';
  @Input() subtitles: string[] = [];

  constructor() {
  }

  ngOnInit() {
  }
}

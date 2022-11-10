import { Component, OnInit } from '@angular/core';
import { SearchUserFacade } from '@nx-starter/car-admin/domain';

@Component({
  selector: 'car-admin-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss'],
})
export class SearchUserComponent implements OnInit {
  userList$ = this.searchUserFacade.userList$;

  constructor(private searchUserFacade: SearchUserFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.searchUserFacade.load();
  }
}

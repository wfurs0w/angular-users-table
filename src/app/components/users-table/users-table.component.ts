import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../../services/users-data.service';
import { Column, User } from '../../models/table-models';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {

  dataSource: User[] = [];
  originalDataSource: User[] = [];
  searchValue: string = '';

  columns = [
    { caption: 'Picture', dataField: 'pictureUrl', visible: true },
    { caption: 'Name', dataField: 'fullName', sort: true, visible: true },
    { caption: 'Gender', dataField: 'gender', visible: false },
    { caption: 'Phone', dataField: 'phone', visible: false },
    { caption: 'City', dataField: 'city', visible: false },
    { caption: 'Street', dataField: 'street', visible: false },
    { caption: 'Email', dataField: 'email', visible: false }
  ];

  constructor(private userService: UsersDataService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.originalDataSource = data.results.map((user: User) => {
        return {
          ...user,
          fullName: `${user.name.first} ${user.name.last}`,
          pictureUrl: user.picture.medium,
          city: user.location.city,
          street: `${user.location.street.name} ${user.location.street.number}`
        };
      });
      this.dataSource = this.originalDataSource;
      this.columns.forEach(column => {
        const value = localStorage.getItem(column.caption);
        if (value !== null) {
          column.visible = value === 'true';
        }
      });
    });
  }

  getVisibleColumns(): Column[] {
    return [
      this.columns.find(column => column.caption === 'Picture')!,
      this.columns.find(column => column.caption === 'Name')!,
      ...this.columns.filter(column => column.visible && column.caption !== 'Picture' && column.caption !== 'Name')
    ];
  }

  applyFilter(): void {
    const filterValue = this.searchValue.toLowerCase();
    this.dataSource = this.originalDataSource.filter(user =>
      Object.values(user).some((value) =>
        String(value).toLowerCase().includes(filterValue)
      )
    );
  }

  clearFilter(): void {
    this.searchValue = '';
    this.dataSource = this.originalDataSource;
  }
}

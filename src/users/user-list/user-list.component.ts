import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../models/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from '../emp-add-edit/emp-add-edit.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: IUser[] = [];
  displayedColumns = ['id', 'name', 'email', 'mobileNumber', 'action'];
  dataSource!: MatTableDataSource<IUser>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userService: UserService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  openAddEditEmpForm(type: 'add' | 'edit', user?: any) {
    const dialogRef = this.dialog.open(EmpAddEditComponent, {
      data: { type, user },
      width: '600px',  
      height: '500px' 
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) { 
        this.loadUsers();
      }
    });
  }
  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => {
      this.loadUsers();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

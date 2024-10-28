import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from '../users/emp-add-edit/emp-add-edit.component';
import { IUser } from '../users/models/user.interface';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'materialUI';

  displayedColumns: string[] = ['id', 'name', 'email', 'mobileNumber'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog: MatDialog) {}

  openAddEditEmpForm(type: 'add' | 'edit', user?: IUser) {
    const dialogRef = this._dialog.open(EmpAddEditComponent, {
      data: { type, user },
    });
  }
}

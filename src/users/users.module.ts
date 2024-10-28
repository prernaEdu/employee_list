import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UsersRoutingModule } from './users-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    UserListComponent,
    EmpAddEditComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }

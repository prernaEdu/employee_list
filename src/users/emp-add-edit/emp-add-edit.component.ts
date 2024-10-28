import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss'],
})
export class EmpAddEditComponent implements OnInit {
  empForm: FormGroup;
  type: 'add' | 'edit';

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private dialogRef: DialogRef<EmpAddEditComponent>,
    @Inject(DIALOG_DATA) public data: { type: 'add' | 'edit'; user?: any }
  ) {
    this.type = data.type;
    this.empForm = this.fb.group({
      name: data.user ? data.user.name : '',
      id: data.user ? data.user.id : '',
      mobileNumber: data.user ? data.user.mobileNumber : null,
      email: data.user ? data.user.email : '',
    });
  }

  ngOnInit() {}

  loadUsers() {
    this.userService.getUsers().subscribe((data) => {
    });
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      if (this.type === 'edit') {
        const payload = Object.assign({}, this.empForm.value, { id: this.data.user.id });
        this.userService.editUser(payload).subscribe(() => {
          this.closeModel();          
        });
      } else {
        this.userService.addUser(this.empForm.value).subscribe(() => {
          this.closeModel()
        });
      }
      this.loadUsers();
      this.closeModel();
    }
  }

  closeModel() {    
    this.dialogRef.close();
    this.loadUsers();
  }
}

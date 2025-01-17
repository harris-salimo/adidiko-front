import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faUserEdit, faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/pages/mpampiasa/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  faUserEdit = faUserEdit;
  faUserTimes = faUserTimes;
  userList: User[] = [];
  roles = [
    {
      key: 'ADMIN',
      name: 'Mpandrindra'
    },
    {
      key: 'SUPER_ADMIN',
      name: 'Mpandrindra fototra'
    }
  ];
  toEdit: any = {};
  toDelete: any = {};

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.getAllUsers().subscribe(response => {
      if (response.success) {
        this.userList = response.users;
      }
    });
  }

  onHandleEdit(district: any) {
    this.toEdit = district;
  }

  onEditSubmit(form: NgForm) {
    const id = form.value.id;
    const name = form.value.name;
    const email = form.value.email;
    const role = form.value.role;

    const reqObject = {
      id: id,
      name: name,
      email: email,
      role: role
    };
    this.service.updateUser(reqObject).subscribe();
  }

  onHandleDelete(district: any) {
    this.toDelete = district;
  }

  onDeleteConfirm() {
    // this.service.deleteUser(user).subscribe();
    console.log("Action: DELETE");
  }
}

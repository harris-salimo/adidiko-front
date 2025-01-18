import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faUserEdit, faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { MpampiasaService } from '../services';
import { Mpampiasa } from '../models';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-mpampiasa',
  imports: [NavbarComponent, SidebarComponent],
  templateUrl: './mpampiasa.component.html',
  styleUrls: ['./mpampiasa.component.css'],
})
export class MpampiasaComponent implements OnInit {
  faUserEdit = faUserEdit;
  faUserTimes = faUserTimes;
  userList: Mpampiasa[] = [];
  roles = [
    {
      key: 'ADMIN',
      name: 'Mpandrindra',
    },
    {
      key: 'SUPER_ADMIN',
      name: 'Mpandrindra fototra',
    },
  ];
  toEdit: any = {};
  toDelete: any = {};

  constructor(private service: MpampiasaService) {}

  ngOnInit(): void {
    this.service.getAllUsers().subscribe((response) => {
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
      role: role,
    };
    this.service.updateUser(reqObject).subscribe();
  }

  onHandleDelete(district: any) {
    this.toDelete = district;
  }

  onDeleteConfirm() {
    // this.service.deleteUser(user).subscribe();
    console.log('Action: DELETE');
  }
}

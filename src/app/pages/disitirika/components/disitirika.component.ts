import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Disitirika } from '../models';
import { DisitirikaService } from '../services';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-disitirika',
  imports: [NavbarComponent, SidebarComponent],
  templateUrl: './disitirika.component.html',
  styleUrls: ['./disitirika.component.css'],
})
export class DisitirikaComponent implements OnInit {
  faPlus = faPlus;
  faEdit = faEdit;
  faTrash = faTrash;
  toEdit: any = {};
  toDelete: any = {};
  districtList: Disitirika[] = [];

  constructor(private readonly service: DisitirikaService) {}

  ngOnInit(): void {
    this.fetchDistricts();
  }

  fetchDistricts() {
    this.service.getAllDistricts().subscribe((response) => {
      if (response.success) {
        this.districtList = response.districts;
      }
    });
  }

  onAddSubmit(form: NgForm) {
    document.getElementById('close-add')?.click();

    const name = form.value.name;

    const reqObject = {
      name: name,
    };

    this.service.createDistrict(reqObject).subscribe((response) => {
      if (response.success) {
        this.fetchDistricts();
        form.reset();
      }
    });
  }

  onHandleEdit(district: any) {
    this.toEdit = district;
  }

  onEditSubmit(form: NgForm) {
    document.getElementById('close-edit')?.click();

    const id = form.value.id;
    const name = form.value.name;

    const reqObject = {
      id: id,
      name: name,
    };

    this.service.updateDistrict(reqObject).subscribe((response) => {
      if (response.success) {
        this.fetchDistricts();
      }
    });
  }

  onHandleDelete(district: any) {
    this.toDelete = district;
  }

  removeDistrict(district: Disitirika) {
    document.getElementById('close-delete');

    this.service.deleteDistrict(district).subscribe((response) => {
      if (response.success) {
        this.fetchDistricts();
      }
    });
  }
}

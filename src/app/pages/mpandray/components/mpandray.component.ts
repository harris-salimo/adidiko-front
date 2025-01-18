import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {
  faCalendar,
  faEdit,
  faMoneyCheck,
  faTrash,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { Disitirika } from '../../disitirika/models';
import { Mpandray } from '../../mpandray/models';
import { AdidyService } from '../../adidy/services';
import { DisitirikaService } from '../../disitirika/services';
import { MpandrayService } from '../services';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-mpandray',
  imports: [NavbarComponent, SidebarComponent, FontAwesomeModule],
  templateUrl: './mpandray.component.html',
  styleUrls: ['./mpandray.component.css'],
})
export class MpandrayComponent implements OnInit {
  faUserPlus = faUserPlus;
  faMoney = faMoneyCheck;
  faCalendar = faCalendar;
  faEdit = faEdit;
  faTrash = faTrash;
  mpandrayList: Mpandray[] = [];
  districtsList: Disitirika[] = [];
  forMpandray: any = "Anaran'ny mpandray";
  toEdit: any = {};
  toDelete: any = {};

  constructor(
    private readonly mpandrayService: MpandrayService,
    private readonly adidyService: AdidyService,
    private readonly districtService: DisitirikaService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.fetchMpandray();
    this.fetchDistricts();
  }

  fetchMpandray() {
    this.mpandrayService.getAllMpandray().subscribe((response) => {
      if (response.success) {
        this.mpandrayList = response.mpandray;
      }
    });
  }

  fetchDistricts() {
    this.districtService.getAllDistricts().subscribe((response) => {
      if (response.success) {
        this.districtsList = response.districts;
      }
    });
  }

  onAddMpandraySubmit(form: NgForm) {
    document.getElementById('close-add-mpandray')?.click();

    const name = form.value.name;
    const gender = form.value.gender;
    const address = form.value.address;
    const district = form.value.district;
    const dateOfBirth = form.value.dateOfBirth;
    const phone = form.value.phone;
    const email = form.value.email;
    const facebook = form.value.facebook;

    const reqObject = {
      name: name,
      gender: gender,
      address: address,
      district: district,
      dateOfBirth: dateOfBirth,
      phone: phone,
      email: email,
      facebook: facebook,
    };

    this.mpandrayService
      .createMpandray(reqObject)
      .subscribe((response: any) => {
        if (response.success) {
          this.fetchMpandray();
          form.reset();
        }
      });
  }

  onHandleAddAdidy(mpandray: any) {
    this.forMpandray = mpandray;
  }

  onAddAdidySubmit(form: NgForm) {
    document.getElementById('close-add-adidy')?.click();

    const mpandray = form.value.mpandrayId;
    const beginAt = form.value.beginAt;
    const endAt = form.value.endAt;
    const total = form.value.total;

    const reqObj = {
      mpandray: mpandray,
      beginAt: beginAt,
      endAt: endAt,
      total: total,
    };

    this.adidyService.createAdidy(reqObj).subscribe((response: any) => {
      if (response.success) {
        this.router.navigate(['adidy']);
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
    const gender = form.value.gender;
    const address = form.value.address;
    const district = form.value.district;
    const dateOfBirth = form.value.dateOfBirth;
    const phone = form.value.phone;
    const email = form.value.email;
    const facebook = form.value.facebook;

    const reqObject = {
      id: id,
      name: name,
      gender: gender,
      address: address,
      district: district,
      dateOfBirth: dateOfBirth,
      phone: phone,
      email: email,
      facebook: facebook,
    };

    this.mpandrayService.updateMpandray(reqObject).subscribe((response) => {
      if (response.success) {
        this.fetchMpandray();
      }
    });
  }

  onHandleDelete(district: any) {
    this.toDelete = district;
  }

  removeMpandray(mpandray: Mpandray) {
    document.getElementById('close-delete')?.click();

    this.mpandrayService.deleteMpandray(mpandray).subscribe((response) => {
      if (response.success) {
        this.fetchMpandray();
      }
    });
  }
}

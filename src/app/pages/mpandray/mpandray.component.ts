import { formatNumber } from '@angular/common';
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
import { District } from 'src/app/pages/disitirika/district';
import { Mpandray } from 'src/app/pages/mpandray/mpandray';
import { AdidyService } from 'src/app/services/adidy.service';
import { DistrictService } from 'src/app/services/district.service';
import { MpandrayService } from 'src/app/services/mpandray.service';

@Component({
  selector: 'app-mpandray',
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
  districtsList: District[] = [];
  forMpandray: any = "Anaran'ny mpandray";
  toEdit: any = {};
  toDelete: any = {};

  constructor(
    private mpandrayService: MpandrayService,
    private adidyService: AdidyService,
    private districtService: DistrictService,
    private router: Router
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

    this.mpandrayService.createMpandray(reqObject).subscribe((response) => {
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

    this.adidyService.createAdidy(reqObj).subscribe((response) => {
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

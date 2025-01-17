import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faEdit, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Adidy } from 'src/app/pages/adidy/adidy';
import { Mpandray } from 'src/app/pages/mpandray/mpandray';
import { AdidyService } from 'src/app/services/adidy.service';
import { MpandrayService } from 'src/app/services/mpandray.service';

@Component({
  selector: 'app-adidy',
  templateUrl: './adidy.component.html',
  styleUrls: ['./adidy.component.css'],
})
export class AdidyComponent implements OnInit {
  faPlus = faPlus;
  faEdit = faEdit;
  faTrash = faTrashAlt;
  adidyList: Adidy[] = [];
  mpandrayList: Mpandray[] = [];
  toEdit: any = {};
  toDelete: any = {};

  constructor(
    private adidyService: AdidyService,
    private mpandrayService: MpandrayService
  ) {}

  ngOnInit(): void {
    this.fetchAdidy();
    this.fetchMpandray();
  }

  fetchAdidy() {
    this.adidyService.getAllAdidy().subscribe((response) => {
      if (response.success) {
        this.adidyList = response.adidy;
      }
    });
  }

  fetchMpandray() {
    this.mpandrayService.getAllMpandray().subscribe((response) => {
      if (response.success) {
        this.mpandrayList = response.mpandray;
      }
    });
  }

  onAddSubmit(form: NgForm) {
    document.getElementById('close-add')?.click();

    console.log(form.value);

    const mpandray = form.value.mpandray;
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
        this.adidyList = response.adidy;
      }
    });
  }

  onHandleEdit(adidy: any) {
    this.toEdit = adidy;
  }

  onEditSubmit(form: NgForm) {
    document.getElementById('close-edit')?.click();

    const id = form.value.id;
    const mpandray = form.value.mpandray;
    const beginAt = form.value.beginAt;
    const endAt = form.value.endAt;
    const total = form.value.total;

    const reqObj = {
      id: id,
      mpandray: mpandray,
      beginAt: beginAt,
      endAt: endAt,
      total: total,
    };

    this.adidyService.updateAdidy(reqObj).subscribe((response) => {
      if (response.success) {
        this.adidyList = response.adidy;
      }
    });
  }

  onHandleDelete(adidy: any) {
    this.toDelete = adidy;
  }

  removeAdidy(adidy: Adidy) {
    document.getElementById('close-delete')?.click();

    this.adidyService.deleteAdidy(adidy).subscribe((response) => {
      if (response.success) {
        this.adidyList = response.adidy;
      }
    });
  }
}

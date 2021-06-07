import {
  Component,
  OnInit,
  NgZone,
  OnDestroy,
  TemplateRef,
} from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import swal from "sweetalert2";
import { ToastrService } from "ngx-toastr";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_moonrisekingdom from "@amcharts/amcharts4/themes/moonrisekingdom";
import am4themes_spiritedaway from "@amcharts/amcharts4/themes/spiritedaway";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-incident-record",
  templateUrl: "./incident-record.component.html",
  styleUrls: ["./incident-record.component.scss"],
})
export class IncidentRecordComponent implements OnInit {
  //table
  entries: number = 3;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      project: "101",
      date: "6/1/2020",
      rating: "87",
      type: "Fire Incident",
      name: "Ahmad",
      period: "1",
      time: "09.00",
      status: "open"
    },
    {
      project: "102",
      date: "8/5/2020",
      rating: "79",
      type: "Flood",
      name: "Maimunah",
      period: "2",
      time: "10.00",
      status: "reopen"
    },
    {
      project: "103",
      date: "5/4/2020",
      rating: "56",
      type: "Public Liability",
      name: "Chong Hee",
      period: "3",
      time: "12.00",
      status: "pending"
    },
    {
      project: "104",
      date: "24/6/2020",
      rating: "34",
      type: "Submarine",
      name: "Thanabalan",
      period: "4",
      time: "17.00",
      status: "close"
    },
    {
      project: "105",
      date: "16/7/2020",
      rating: "76",
      type: "Fidelity Guarantee",
      name: "Joseph",
      period: "5",
      time: "13.00",
      status: "open"
    },
    {
      project: "106",
      date: "10/3/2020",
      rating: "23",
      type: "Link Incident to Relevant Risk Register",
      name: "Lee Tuck",
      period: "6",
      time: "8.00",
      status: "reopen"
    },
    {
      project: "107",
      date: "2/6/2020",
      rating: "58",
      type: "Fire Incident",
      name: "Zakaria",
      period: "3",
      time: "11.00",
      status: "pending"
    },
    {
      project: "108",
      date: "5/8/2020",
      rating: "35",
      type: "Flood",
      name: "Micheal",
      period: "1",
      time: "14.00",
      status: "close"
    },
    {
      project: "109",
      date: "3/1/2020",
      rating: "50",
      type: "Submarine",
      name: "Jesicca",
      period: "5",
      time: "9.30",
      status: "open"
    },
  ];
  SelectionType = SelectionType;

  //modal
  modalRef: BsModalRef;
  modalRef1: BsModalRef;

  // Chart
  private chart1: any;
  private chart2: any;
  private chart3: any;
  private chart4: any;

  //form
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;

  constructor(
    private zone: NgZone,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private _formBuilder: FormBuilder
  ) {
    this.temp = this.rows.map((prop, key) => {
      return {
        ...prop,
        id: key,
      };
    });
  }

  ngOnInit() {
    this.getCharts();
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart1) {
        console.log("Chart disposed");
        this.chart1.dispose();
      }
      if (this.chart2) {
        console.log("Chart disposed");
        this.chart2.dispose();
      }
      if (this.chart3) {
        console.log("Chart disposed");
        this.chart3.dispose();
      }
      if (this.chart4) {
        console.log("Chart disposed");
        this.chart4.dispose();
      }
    });
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      // this.getChartInsuranceRegister1();
      // this.getChartInsuranceRegister2();
    });
  }

  entriesChange($event) {
    this.entries = $event.target.date;
  }
  filterTable($event) {
    let val = $event.target.date;
    this.temp = this.rows.filter(function (d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: "modal-lg" });
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ["", Validators.required],
    });
    this.forthFormGroup = this._formBuilder.group({
      forthCtrl: ["", Validators.required],
    });
  }

  successSwal(task) {
    swal.fire({
      title: "Success",
      text: "Successfully " + task + "!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
    });
  }

  delete() {
    swal
      .fire({
        title: "Confirmation",
        text: "Are you sure want to delete this data?",
        type: "info",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-info",
        confirmButtonText: "Confirm",
        showCancelButton: true,
        cancelButtonClass: "btn btn-danger",
        cancelButtonText: "Cancel",
      })
      .then((result) => {
        if (result.value) {
          this.doneDelete();
        }
      });
  }

  doneDelete() {
    swal.fire({
      title: "Success",
      text: "The data has been deleted!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Close",
    });
  }

  successSwallStepper() {
    swal
      .fire({
        title: "Confirmation",
        text: "Are you sure want to save this data?",
        type: "info",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-info",
        confirmButtonText: "Confirm",
        showCancelButton: true,
        cancelButtonClass: "btn btn-danger",
        cancelButtonText: "Cancel",
      })
      .then((result) => {
        if (result.value) {
          this.donesuccessSwallStepper();
        }
      });
  }

  donesuccessSwallStepper() {
    swal.fire({
      title: "Success",
      text: "The data has been saved!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Close",
    });
    this.modalRef.hide();
  }
}

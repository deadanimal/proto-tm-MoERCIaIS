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
  selector: "app-business-registration",
  templateUrl: "./business-registration.component.html",
  styleUrls: ["./business-registration.component.scss"],
})
export class BusinessRegistrationComponent implements OnInit, OnDestroy {
  //table
  entries: number = 3;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      project: "101",
      date: "6/1/2020",
      var: "87%",
      likelihood: "45",
      impact: "24",
      kri: "Mean Time Between Failure",
    },
    {
      project: "102",
      date: "8/5/2020",
      var: "79%",
      likelihood: "57",
      impact: "67",
      kri: "Percent Difference in MTBF",
    },
    {
      project: "103",
      date: "5/4/2020",
      var: "56%",
      likelihood: "47",
      impact: "69",
      kri: "Mean Time to Repair ",
    },
    {
      project: "104",
      date: "24/6/2020",
      var: "34%",
      likelihood: "52",
      impact: "68",
      kri: "Percent Difference in MTTR",
    },
    {
      project: "105",
      date: "16/7/2020",
      var: "76%",
      likelihood: "46",
      impact: "79",
      kri: "System Availability",
    },
    {
      project: "106",
      date: "10/3/2020",
      var: "23%",
      likelihood: "53",
      impact: "31",
      kri: "System Availability During Trading Hours",
    },
    {
      project: "107",
      date: "2/6/2020",
      var: "58%",
      likelihood: "63",
      impact: "27",
      kri: "Network Availability",
    },
    {
      project: "108",
      date: "5/8/2020",
      var: "35%",
      likelihood: "73",
      impact: "84",
      kri: "IT Service Provider SLA Adherence",
    },
    {
      project: "109",
      date: "3/1/2020",
      var: "50%",
      likelihood: "14",
      impact: "25",
      kri: "Internal IT Team SLA Adherence",
    },
  ];
  SelectionType = SelectionType;

  //modal
  modalRef: BsModalRef;

  // Chart
  private chart1: any;
  private chart2: any;
  private chart3: any;

  //form
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

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
    });
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChartBusinessRisk1();
      this.getChartBusinessRisk2();
      this.getChartBusinessRisk3();
    });
  }

  getChartBusinessRisk1() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartdivbusinessrisk1", am4charts.PieChart);

    // Add data
    chart.data = [
      {
        country: "Cost Estimation",
        litres: 501.9,
      },
      {
        country: "Effort Estimation",
        litres: 301.9,
      },
      {
        country: "Product Integrate",
        litres: 201.1,
      },
      {
        country: "Risk of Inter-organizing Relationship",
        litres: 165.8,
      },
      {
        country: "Forecast Plan Risk",
        litres: 139.9,
      },
      {
        country: "Prerequisite Constraint",
        litres: 128.3,
      },
      {
        country: "Data Privacy Issue",
        litres: 99,
      },
      {
        country: "Mis-selling",
        litres: 87,
      },
      {
        country: "Outsourcing and Third-party Risk",
        litres: 71,
      },
      {
        country: "Theft & Fraud",
        litres: 77,
      },
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    chart.hiddenState.properties.radius = am4core.percent(0);

    this.chart1 = chart;
  }

  getChartBusinessRisk2() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartdivbusinessrisk2", am4charts.PieChart);

    // Add data
    chart.data = [
      {
        country: "Cost Estimation",
        litres: 501.9,
      },
      {
        country: "Effort Estimation",
        litres: 301.9,
      },
      {
        country: "Product Integrate",
        litres: 201.1,
      },
      {
        country: "Risk of Inter-organizing Relationship",
        litres: 165.8,
      },
      {
        country: "Forecast Plan Risk",
        litres: 139.9,
      },
      {
        country: "Prerequisite Constraint",
        litres: 128.3,
      },
      {
        country: "Data Privacy Issue",
        litres: 99,
      },
      {
        country: "Mis-selling",
        litres: 87,
      },
      {
        country: "Outsourcing and Third-party Risk",
        litres: 71,
      },
      {
        country: "Theft & Fraud",
        litres: 77,
      },
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    chart.hiddenState.properties.radius = am4core.percent(0);

    this.chart2 = chart;
  }

  getChartBusinessRisk3() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartdivbusinessrisk3", am4charts.PieChart);

    // Add data
    chart.data = [
      {
        country: "Cost Estimation",
        litres: 501.9,
      },
      {
        country: "Effort Estimation",
        litres: 301.9,
      },
      {
        country: "Product Integrate",
        litres: 201.1,
      },
      {
        country: "Risk of Inter-organizing Relationship",
        litres: 165.8,
      },
      {
        country: "Forecast Plan Risk",
        litres: 139.9,
      },
      {
        country: "Prerequisite Constraint",
        litres: 128.3,
      },
      {
        country: "Data Privacy Issue",
        litres: 99,
      },
      {
        country: "Mis-selling",
        litres: 87,
      },
      {
        country: "Outsourcing and Third-party Risk",
        litres: 71,
      },
      {
        country: "Theft & Fraud",
        litres: 77,
      },
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    chart.hiddenState.properties.radius = am4core.percent(0);

    this.chart3 = chart;
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

  successSwal(task) {
    swal.fire({
      title: "Success",
      text: "Successfully " + task + "!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
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
  }

  successSwallStepper() {
    swal
      .fire({
        title: "Confirmation",
        text: "Are you sure want to submit this data?",
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
      text: "The data has been submitted!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Close",
    });
    this.modalRef.hide();
  }
}

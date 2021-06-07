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
import * as am4plugins_timeline from "@amcharts/amcharts4/plugins/timeline";
import * as am4plugins_bullets from "@amcharts/amcharts4/plugins/bullets"; 

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-incident-investigation",
  templateUrl: "./incident-investigation.component.html",
  styleUrls: ["./incident-investigation.component.scss"],
})
export class IncidentInvestigationComponent implements OnInit, OnDestroy {
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
      status: "open",
      perkeso: "IE523"
    },
    {
      project: "102",
      date: "8/5/2020",
      rating: "79",
      type: "Flood",
      name: "Maimunah",
      period: "2",
      time: "10.00",
      status: "reopen",
      perkeso: "IE571"
    },
    {
      project: "103",
      date: "5/4/2020",
      rating: "56",
      type: "Public Liability",
      name: "Chong Hee",
      period: "3",
      time: "12.00",
      status: "pending",
      perkeso: "IE453"
    },
    {
      project: "104",
      date: "24/6/2020",
      rating: "34",
      type: "Submarine",
      name: "Thanabalan",
      period: "4",
      time: "17.00",
      status: "close",
      perkeso: "IE301"
    },
    {
      project: "105",
      date: "16/7/2020",
      rating: "76",
      type: "Fidelity Guarantee",
      name: "Joseph",
      period: "5",
      time: "13.00",
      status: "open",
      perkeso: "IE293"
    },
    {
      project: "106",
      date: "10/3/2020",
      rating: "23",
      type: "Link Incident to Relevant Risk Register",
      name: "Lee Tuck",
      period: "6",
      time: "8.00",
      status: "reopen",
      perkeso: "IE385"
    },
    {
      project: "107",
      date: "2/6/2020",
      rating: "58",
      type: "Fire Incident",
      name: "Zakaria",
      period: "3",
      time: "11.00",
      status: "pending",
      perkeso: "IE013"
    },
    {
      project: "108",
      date: "5/8/2020",
      rating: "35",
      type: "Flood",
      name: "Micheal",
      period: "1",
      time: "14.00",
      status: "close",
      perkeso: "IE813"
    },
    {
      project: "109",
      date: "3/1/2020",
      rating: "50",
      type: "Submarine",
      name: "Jesicca",
      period: "5",
      time: "9.30",
      status: "open",
      perkeso: "IE991"
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
  private chart5: any;

  //form
  // firstFormGroup: FormGroup;
  // secondFormGroup: FormGroup;
  // thirdFormGroup: FormGroup;
  // forthFormGroup: FormGroup;

  constructor(
    private zone: NgZone,
    private modalService: BsModalService,
    private toastr: ToastrService
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
      if (this.chart5) {
        console.log("Chart disposed");
        this.chart5.dispose();
      }
    });
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChartIncidentInvestigation1();
      this.getChartIncidentInvestigation2();
      this.getChartIncidentInvestigation3();
      this.getChartIncidentInvestigation4();
    });
  }

  getChartIncidentInvestigation1() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let container = am4core.create(
      "chartdivincidentinvestigation1",
      am4core.Container
    );
    container.width = am4core.percent(100);
    container.height = am4core.percent(100);
    container.layout = "horizontal";

    let chart = container.createChild(am4charts.PieChart);

    // Add data
    chart.data = [
      {
        country: "Asset",
        litres: 500,
        subData: [
          { name: "TM’s asset", value: 200 },
          { name: "Non TM’s asset", value: 150 },
        ],
      },
      {
        country: "People",
        litres: 300,
        subData: [
          { name: "Staff", value: 130 },
          { name: "Customers", value: 80 },
          { name: "Vendors", value: 50 },
          { name: "Contractors", value: 20 },
          { name: "Public", value: 30 },
        ],
      },
      {
        country: "Location",
        litres: 200,
        subData: [
          { name: "TM building", value: 110 },
          { name: "Technical", value: 60 },
          { name: "Non-technica", value: 30 },
        ],
      },
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.states.getKey(
      "active"
    ).properties.shiftRadius = 0;
    //pieSeries.labels.template.text = "{category}\n{value.percent.formatNumber('#.#')}%";

    pieSeries.slices.template.events.on("hit", function (event) {
      selectSlice(event.target.dataItem);
    });

    let chart2 = container.createChild(am4charts.PieChart);
    chart2.width = am4core.percent(30);
    chart2.radius = am4core.percent(80);

    // Add and configure Series
    let pieSeries2 = chart2.series.push(new am4charts.PieSeries());
    pieSeries2.dataFields.value = "value";
    pieSeries2.dataFields.category = "name";
    pieSeries2.slices.template.states.getKey(
      "active"
    ).properties.shiftRadius = 0;
    //pieSeries2.labels.template.radius = am4core.percent(50);
    //pieSeries2.labels.template.inside = true;
    //pieSeries2.labels.template.fill = am4core.color("#ffffff");
    pieSeries2.labels.template.disabled = true;
    pieSeries2.ticks.template.disabled = true;
    pieSeries2.alignLabels = false;
    pieSeries2.events.on("positionchanged", updateLines);

    let interfaceColors = new am4core.InterfaceColorSet();

    let line1 = container.createChild(am4core.Line);
    line1.strokeDasharray = "2,2";
    line1.strokeOpacity = 0.5;
    line1.stroke = interfaceColors.getFor("alternativeBackground");
    line1.isMeasured = false;

    let line2 = container.createChild(am4core.Line);
    line2.strokeDasharray = "2,2";
    line2.strokeOpacity = 0.5;
    line2.stroke = interfaceColors.getFor("alternativeBackground");
    line2.isMeasured = false;

    let selectedSlice;

    function selectSlice(dataItem) {
      selectedSlice = dataItem.slice;

      let fill = selectedSlice.fill;

      let count = dataItem.dataContext.subData.length;
      pieSeries2.colors.list = [];
      for (var i = 0; i < count; i++) {
        pieSeries2.colors.list.push(fill.brighten((i * 2) / count));
      }

      chart2.data = dataItem.dataContext.subData;
      pieSeries2.appear();

      let middleAngle = selectedSlice.middleAngle;
      let firstAngle = pieSeries.slices.getIndex(0).startAngle;
      let animation = pieSeries.animate(
        [
          { property: "startAngle", to: firstAngle - middleAngle },
          { property: "endAngle", to: firstAngle - middleAngle + 360 },
        ],
        600,
        am4core.ease.sinOut
      );
      animation.events.on("animationprogress", updateLines);

      selectedSlice.events.on("transformed", updateLines);

      //  var animation = chart2.animate({property:"dx", from:-container.pixelWidth / 2, to:0}, 2000, am4core.ease.elasticOut)
      //  animation.events.on("animationprogress", updateLines)
    }

    function updateLines() {
      if (selectedSlice) {
        let p11 = {
          x: selectedSlice.radius * am4core.math.cos(selectedSlice.startAngle),
          y: selectedSlice.radius * am4core.math.sin(selectedSlice.startAngle),
        };
        let p12 = {
          x:
            selectedSlice.radius *
            am4core.math.cos(selectedSlice.startAngle + selectedSlice.arc),
          y:
            selectedSlice.radius *
            am4core.math.sin(selectedSlice.startAngle + selectedSlice.arc),
        };

        p11 = am4core.utils.spritePointToSvg(p11, selectedSlice);
        p12 = am4core.utils.spritePointToSvg(p12, selectedSlice);

        let p21 = { x: 0, y: -pieSeries2.pixelRadius };
        let p22 = { x: 0, y: pieSeries2.pixelRadius };

        p21 = am4core.utils.spritePointToSvg(p21, pieSeries2);
        p22 = am4core.utils.spritePointToSvg(p22, pieSeries2);

        line1.x1 = p11.x;
        line1.x2 = p21.x;
        line1.y1 = p11.y;
        line1.y2 = p21.y;

        line2.x1 = p12.x;
        line2.x2 = p22.x;
        line2.y1 = p12.y;
        line2.y2 = p22.y;
      }
    }

    chart.events.on("datavalidated", function () {
      setTimeout(function () {
        selectSlice(pieSeries.dataItems.getIndex(0));
      }, 1000);
    });

    this.chart1 = container;
  }

  getChartIncidentInvestigation2() {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create(
      "chartdivincidentinvestigation2",
      am4charts.XYChart
    );

    // Add data
    chart.data = [
      {
        date: "2019-07-27",
        value: 13,
      },
      {
        date: "2019-07-28",
        value: 11,
      },
      {
        date: "2019-07-29",
        value: 15,
      },
      {
        date: "2019-07-30",
        value: 16,
      },
      {
        date: "2019-07-31",
        value: 18,
      },
      {
        date: "2019-08-01",
        value: 13,
      },
      {
        date: "2019-08-02",
        value: 22,
      },
      {
        date: "2019-08-03",
        value: 23,
      },
      {
        date: "2019-08-04",
        value: 20,
      },
      {
        date: "2019-08-05",
        value: 17,
      },
      {
        date: "2019-08-06",
        value: 16,
      },
      {
        date: "2019-08-07",
        value: 18,
      },
      {
        date: "2019-08-08",
        value: 21,
      },
      {
        date: "2019-08-09",
        value: 26,
      },
      {
        date: "2019-08-10",
        value: 24,
      },
      {
        date: "2019-08-11",
        value: 29,
      },
      {
        date: "2019-08-12",
        value: 32,
      },
      {
        date: "2019-08-13",
        value: 18,
      },
      {
        date: "2019-08-14",
        value: 24,
      },
      {
        date: "2019-08-15",
        value: 22,
      },
      {
        date: "2019-08-16",
        value: 18,
      },
      {
        date: "2019-08-17",
        value: 19,
      },
      {
        date: "2019-08-18",
        value: 14,
      },
      {
        date: "2019-08-19",
        value: 15,
      },
      {
        date: "2019-08-20",
        value: 12,
      },
      {
        date: "2019-08-21",
        value: 8,
      },
      {
        date: "2019-08-22",
        value: 9,
      },
      {
        date: "2019-08-23",
        value: 8,
      },
      {
        date: "2019-08-24",
        value: 7,
      },
      {
        date: "2019-08-25",
        value: 5,
      },
      {
        date: "2019-08-26",
        value: 11,
      },
      {
        date: "2019-08-27",
        value: 13,
      },
      {
        date: "2019-08-28",
        value: 18,
      },
      {
        date: "2019-08-29",
        value: 20,
      },
      {
        date: "2019-08-30",
        value: 29,
      },
      {
        date: "2019-08-31",
        value: 33,
      },
      {
        date: "2019-09-01",
        value: 42,
      },
      {
        date: "2019-09-02",
        value: 35,
      },
      {
        date: "2019-09-03",
        value: 31,
      },
      {
        date: "2019-09-04",
        value: 47,
      },
      {
        date: "2019-09-05",
        value: 52,
      },
      {
        date: "2019-09-06",
        value: 46,
      },
      {
        date: "2019-09-07",
        value: 41,
      },
      {
        date: "2019-09-08",
        value: 43,
      },
      {
        date: "2019-09-09",
        value: 40,
      },
      {
        date: "2019-09-10",
        value: 39,
      },
      {
        date: "2019-09-11",
        value: 34,
      },
      {
        date: "2019-09-12",
        value: 29,
      },
      {
        date: "2019-09-13",
        value: 34,
      },
      {
        date: "2019-09-14",
        value: 37,
      },
      {
        date: "2019-09-15",
        value: 42,
      },
      {
        date: "2019-09-16",
        value: 49,
      },
      {
        date: "2019-09-17",
        value: 46,
      },
      {
        date: "2019-09-18",
        value: 47,
      },
      {
        date: "2019-09-19",
        value: 55,
      },
      {
        date: "2019-09-20",
        value: 59,
      },
      {
        date: "2019-09-21",
        value: 58,
      },
      {
        date: "2019-09-22",
        value: 57,
      },
      {
        date: "2019-09-23",
        value: 61,
      },
      {
        date: "2019-09-24",
        value: 59,
      },
      {
        date: "2019-09-25",
        value: 67,
      },
      {
        date: "2019-09-26",
        value: 65,
      },
      {
        date: "2019-09-27",
        value: 61,
      },
      {
        date: "2019-09-28",
        value: 66,
      },
      {
        date: "2019-09-29",
        value: 69,
      },
      {
        date: "2019-09-30",
        value: 71,
      },
      {
        date: "2019-10-01",
        value: 67,
      },
      {
        date: "2019-10-02",
        value: 63,
      },
      {
        date: "2019-10-03",
        value: 46,
      },
      {
        date: "2019-10-04",
        value: 32,
      },
      {
        date: "2019-10-05",
        value: 21,
      },
      {
        date: "2019-10-06",
        value: 18,
      },
      {
        date: "2019-10-07",
        value: 21,
      },
      {
        date: "2019-10-08",
        value: 28,
      },
      {
        date: "2019-10-09",
        value: 27,
      },
      {
        date: "2019-10-10",
        value: 36,
      },
      {
        date: "2019-10-11",
        value: 33,
      },
      {
        date: "2019-10-12",
        value: 31,
      },
      {
        date: "2019-10-13",
        value: 30,
      },
      {
        date: "2019-10-14",
        value: 34,
      },
      {
        date: "2019-10-15",
        value: 38,
      },
      {
        date: "2019-10-16",
        value: 37,
      },
      {
        date: "2019-10-17",
        value: 44,
      },
      {
        date: "2019-10-18",
        value: 49,
      },
      {
        date: "2019-10-19",
        value: 53,
      },
      {
        date: "2019-10-20",
        value: 57,
      },
      {
        date: "2019-10-21",
        value: 60,
      },
      {
        date: "2019-10-22",
        value: 61,
      },
      {
        date: "2019-10-23",
        value: 69,
      },
      {
        date: "2019-10-24",
        value: 67,
      },
      {
        date: "2019-10-25",
        value: 72,
      },
      {
        date: "2019-10-26",
        value: 77,
      },
      {
        date: "2019-10-27",
        value: 75,
      },
      {
        date: "2019-10-28",
        value: 70,
      },
      {
        date: "2019-10-29",
        value: 72,
      },
      {
        date: "2019-10-30",
        value: 70,
      },
      {
        date: "2019-10-31",
        value: 72,
      },
      {
        date: "2019-11-01",
        value: 73,
      },
      {
        date: "2019-11-02",
        value: 67,
      },
      {
        date: "2019-11-03",
        value: 68,
      },
      {
        date: "2019-11-04",
        value: 65,
      },
      {
        date: "2019-11-05",
        value: 71,
      },
      {
        date: "2019-11-06",
        value: 75,
      },
      {
        date: "2019-11-07",
        value: 74,
      },
      {
        date: "2019-11-08",
        value: 71,
      },
      {
        date: "2019-11-09",
        value: 76,
      },
      {
        date: "2019-11-10",
        value: 77,
      },
      {
        date: "2019-11-11",
        value: 81,
      },
      {
        date: "2019-11-12",
        value: 83,
      },
      {
        date: "2019-11-13",
        value: 80,
      },
      {
        date: "2019-11-14",
        value: 81,
      },
      {
        date: "2019-11-15",
        value: 87,
      },
      {
        date: "2019-11-16",
        value: 82,
      },
      {
        date: "2019-11-17",
        value: 86,
      },
      {
        date: "2019-11-18",
        value: 80,
      },
      {
        date: "2019-11-19",
        value: 87,
      },
      {
        date: "2019-11-20",
        value: 83,
      },
      {
        date: "2019-11-21",
        value: 85,
      },
      {
        date: "2019-11-22",
        value: 84,
      },
      {
        date: "2019-11-23",
        value: 82,
      },
      {
        date: "2019-11-24",
        value: 73,
      },
      {
        date: "2019-11-25",
        value: 71,
      },
      {
        date: "2019-11-26",
        value: 75,
      },
      {
        date: "2019-11-27",
        value: 79,
      },
      {
        date: "2019-11-28",
        value: 70,
      },
      {
        date: "2019-11-29",
        value: 73,
      },
      {
        date: "2019-11-30",
        value: 61,
      },
      {
        date: "2019-12-01",
        value: 62,
      },
      {
        date: "2019-12-02",
        value: 66,
      },
      {
        date: "2019-12-03",
        value: 65,
      },
      {
        date: "2019-12-04",
        value: 73,
      },
      {
        date: "2019-12-05",
        value: 79,
      },
      {
        date: "2019-12-06",
        value: 78,
      },
      {
        date: "2019-12-07",
        value: 78,
      },
      {
        date: "2019-12-08",
        value: 78,
      },
      {
        date: "2019-12-09",
        value: 74,
      },
      {
        date: "2019-12-10",
        value: 73,
      },
      {
        date: "2019-12-11",
        value: 75,
      },
      {
        date: "2019-12-12",
        value: 70,
      },
      {
        date: "2019-12-13",
        value: 77,
      },
      {
        date: "2019-12-14",
        value: 67,
      },
      {
        date: "2019-12-15",
        value: 62,
      },
      {
        date: "2019-12-16",
        value: 64,
      },
      {
        date: "2019-12-17",
        value: 61,
      },
      {
        date: "2019-12-18",
        value: 59,
      },
      {
        date: "2019-12-19",
        value: 53,
      },
      {
        date: "2019-12-20",
        value: 54,
      },
      {
        date: "2019-12-21",
        value: 56,
      },
      {
        date: "2019-12-22",
        value: 59,
      },
      {
        date: "2019-12-23",
        value: 58,
      },
      {
        date: "2019-12-24",
        value: 55,
      },
      {
        date: "2019-12-25",
        value: 52,
      },
      {
        date: "2019-12-26",
        value: 54,
      },
      {
        date: "2019-12-27",
        value: 50,
      },
      {
        date: "2019-12-28",
        value: 50,
      },
      {
        date: "2019-12-29",
        value: 51,
      },
      {
        date: "2019-12-30",
        value: 52,
      },
      {
        date: "2019-12-31",
        value: 58,
      },
      {
        date: "2020-01-01",
        value: 60,
      },
      {
        date: "2020-01-02",
        value: 67,
      },
      {
        date: "2020-01-03",
        value: 64,
      },
      {
        date: "2020-01-04",
        value: 66,
      },
      {
        date: "2020-01-05",
        value: 60,
      },
      {
        date: "2020-01-06",
        value: 63,
      },
      {
        date: "2020-01-07",
        value: 61,
      },
      {
        date: "2020-01-08",
        value: 60,
      },
      {
        date: "2020-01-09",
        value: 65,
      },
      {
        date: "2020-01-10",
        value: 75,
      },
      {
        date: "2020-01-11",
        value: 77,
      },
      {
        date: "2020-01-12",
        value: 78,
      },
      {
        date: "2020-01-13",
        value: 70,
      },
      {
        date: "2020-01-14",
        value: 70,
      },
      {
        date: "2020-01-15",
        value: 73,
      },
      {
        date: "2020-01-16",
        value: 71,
      },
      {
        date: "2020-01-17",
        value: 74,
      },
      {
        date: "2020-01-18",
        value: 78,
      },
      {
        date: "2020-01-19",
        value: 85,
      },
      {
        date: "2020-01-20",
        value: 82,
      },
      {
        date: "2020-01-21",
        value: 83,
      },
      {
        date: "2020-01-22",
        value: 88,
      },
      {
        date: "2020-01-23",
        value: 85,
      },
      {
        date: "2020-01-24",
        value: 85,
      },
      {
        date: "2020-01-25",
        value: 80,
      },
      {
        date: "2020-01-26",
        value: 87,
      },
      {
        date: "2020-01-27",
        value: 84,
      },
      {
        date: "2020-01-28",
        value: 83,
      },
      {
        date: "2020-01-29",
        value: 84,
      },
      {
        date: "2020-01-30",
        value: 81,
      },
    ];

    // Set input format for the dates
    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.dateX = "date";
    series.tooltipText = "{value}";
    series.strokeWidth = 2;
    series.minBulletDistance = 15;

    // Drop-shaped tooltips
    series.tooltip.background.cornerRadius = 20;
    series.tooltip.background.strokeOpacity = 0;
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.label.minWidth = 40;
    series.tooltip.label.minHeight = 40;
    series.tooltip.label.textAlign = "middle";
    series.tooltip.label.textValign = "middle";

    // Make bullets grow on hover
    let bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.strokeWidth = 2;
    bullet.circle.radius = 4;
    bullet.circle.fill = am4core.color("#fff");

    let bullethover = bullet.states.create("hover");
    bullethover.properties.scale = 1.3;

    // Make a panning cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "panXY";
    chart.cursor.xAxis = dateAxis;
    chart.cursor.snapToSeries = series;

    // Create vertical scrollbar and place it before the value axis
    chart.scrollbarY = new am4core.Scrollbar();
    chart.scrollbarY.parent = chart.leftAxesContainer;
    chart.scrollbarY.toBack();

    // Create a horizontal scrollbar with previe and place it underneath the date axis
    chart.scrollbarX = new am4charts.XYChartScrollbar();
    let wasd = chart.scrollbarX as any;
    wasd.series.push(series);
    chart.scrollbarX.parent = chart.bottomAxesContainer;

    dateAxis.start = 0.79;
    dateAxis.keepSelection = true;

    this.chart2 = chart;
  }

  getChartIncidentInvestigation3() {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create(
      "chartdivincidentinvestigation3",
      am4charts.XYChart
    );

    // Add data
    chart.data = [
      {
        country: "Johor",
        visits: 2025,
      },
      {
        country: "Kedah",
        visits: 1882,
      },
      {
        country: "Kelantan",
        visits: 1809,
      },
      {
        country: "Melaka",
        visits: 1322,
      },
      {
        country: "Negeri Sembilan",
        visits: 1122,
      },
      {
        country: "Pahang",
        visits: 1114,
      },
      {
        country: "Perak",
        visits: 984,
      },
      {
        country: "Perlis",
        visits: 711,
      },
      {
        country: "Sabah",
        visits: 665,
      },
      {
        country: "Sarawak",
        visits: 580,
      },
      {
        country: "Selangor",
        visits: 443,
      },
      {
        country: "Terengganu",
        visits: 441,
      },
      {
        country: "Kuala Lumpur",
        visits: 395,
      },
      {
        country: "Labuan",
        visits: 536,
      },
      {
        country: "Putrajaya",
        visits: 473,
      },
    ];

    // Create axes

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    categoryAxis.renderer.labels.template.adapter.add(
      "dy",
      function (dy, target) {
        if ((target.dataItem && target.dataItem.index & 2) == 2) {
          return dy + 25;
        }
        return dy;
      }
    );

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.name = "Visits";
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = 0.8;

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;

    this.chart3 = chart;
  }

  getChartIncidentInvestigation4() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create(
      "chartdivincidentinvestigation4",
      am4charts.XYChart
    );
    chart.padding(40, 40, 40, 40);

    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "network";
    categoryAxis.renderer.minGridDistance = 1;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.disabled = true;

    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryY = "network";
    series.dataFields.valueX = "MAU";
    series.tooltipText = "{valueX.value}";
    series.columns.template.strokeOpacity = 0;
    series.columns.template.column.cornerRadiusBottomRight = 5;
    series.columns.template.column.cornerRadiusTopRight = 5;

    let labelBullet = series.bullets.push(new am4charts.LabelBullet());
    labelBullet.label.horizontalCenter = "left";
    labelBullet.label.dx = 10;
    labelBullet.label.text =
      "{values.valueX.workingValue.formatNumber('#.0as')}";
    labelBullet.locationX = 1;

    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    categoryAxis.sortBySeries = series;
    chart.data = [
      {
        network: "Division 1",
        MAU: 2255,
      },
      {
        network: "Division 2",
        MAU: 1430,
      },
      {
        network: "Division 3",
        MAU: 1000,
      },
      {
        network: "Division 4",
        MAU: 246,
      },
      {
        network: "Division 5",
        MAU: 135,
      },
    ];

    this.chart4 = chart;
  }

  getChartIncidentInvestigation5() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("chartdivincidentinvestigation5", am4plugins_timeline.SerpentineChart);
    chart.curveContainer.padding(50, 20, 50, 20);
    chart.levelCount = 4;
    chart.yAxisRadius = am4core.percent(25);
    chart.yAxisInnerRadius = am4core.percent(-25);
    chart.maskBullets = false;

    let colorSet = new am4core.ColorSet();
    colorSet.saturation = 0.5;

    chart.data = [
      {
        category: "Module #1",
        start: "2019-01-10",
        end: "2019-01-13",
        color: colorSet.getIndex(0),
        task: "Gathering requirements",
      },
      {
        category: "Module #1",
        start: "2019-02-05",
        end: "2019-04-18",
        color: colorSet.getIndex(0),
        task: "Development",
      },
      {
        category: "Module #2",
        start: "2019-01-08",
        end: "2019-01-10",
        color: colorSet.getIndex(5),
        task: "Gathering requirements",
      },
      {
        category: "Module #2",
        start: "2019-01-12",
        end: "2019-01-15",
        color: colorSet.getIndex(5),
        task: "Producing specifications",
      },
      {
        category: "Module #2",
        start: "2019-01-16",
        end: "2019-02-05",
        color: colorSet.getIndex(5),
        task: "Development",
      },
      {
        category: "Module #2",
        start: "2019-02-10",
        end: "2019-02-18",
        color: colorSet.getIndex(5),
        task: "Testing and QA",
      },
      {
        category: "",
      },
      {
        category: "Module #3",
        start: "2019-01-01",
        end: "2019-01-19",
        color: colorSet.getIndex(9),
        task: "Gathering requirements",
      },
      {
        category: "Module #3",
        start: "2019-02-01",
        end: "2019-02-10",
        color: colorSet.getIndex(9),
        task: "Producing specifications",
      },
      {
        category: "Module #3",
        start: "2019-03-10",
        end: "2019-04-15",
        color: colorSet.getIndex(9),
        task: "Development",
      },
      {
        category: "Module #3",
        start: "2019-04-20",
        end: "2019-04-30",
        color: colorSet.getIndex(9),
        task: "Testing and QA",
        disabled2: false,
        image2: "/assets/img/default/avatar.png",
        location: 0,
      },
      {
        category: "Module #4",
        start: "2019-01-15",
        end: "2019-02-12",
        color: colorSet.getIndex(15),
        task: "Gathering requirements",
        disabled1: false,
        image1: "/assets/img/default/avatar.png",
      },
      {
        category: "Module #4",
        start: "2019-02-25",
        end: "2019-03-10",
        color: colorSet.getIndex(15),
        task: "Development",
      },
      {
        category: "Module #4",
        start: "2019-03-23",
        end: "2019-04-29",
        color: colorSet.getIndex(15),
        task: "Testing and QA",
      },
    ];

    chart.dateFormatter.dateFormat = "yyyy-MM-dd";
    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";
    chart.fontSize = 11;

    let wasd = chart.yAxes as any;
    let categoryAxis = wasd.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.labels.template.paddingRight = 25;
    categoryAxis.renderer.minGridDistance = 10;
    categoryAxis.renderer.innerRadius = -60;
    categoryAxis.renderer.radius = 60;

    let qwert = chart.xAxes as any;
    let dateAxis = qwert.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 70;
    dateAxis.baseInterval = { count: 1, timeUnit: "day" };
    dateAxis.renderer.tooltipLocation = 0;
    dateAxis.startLocation = -0.5;
    dateAxis.renderer.line.strokeDasharray = "1,4";
    dateAxis.renderer.line.strokeOpacity = 0.6;
    dateAxis.tooltip.background.fillOpacity = 0.2;
    dateAxis.tooltip.background.cornerRadius = 5;
    dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor(
      "alternativeBackground"
    );
    dateAxis.tooltip.label.paddingTop = 7;

    let labelTemplate = dateAxis.renderer.labels.template;
    labelTemplate.verticalCenter = "middle";
    labelTemplate.fillOpacity = 0.7;
    labelTemplate.background.fill = new am4core.InterfaceColorSet().getFor(
      "background"
    );
    labelTemplate.background.fillOpacity = 1;
    labelTemplate.padding(7, 7, 7, 7);

    let series = chart.series.push(new am4plugins_timeline.CurveColumnSeries());
    series.columns.template.height = am4core.percent(20);
    series.columns.template.tooltipText =
      "{task}: [bold]{openDateX}[/] - [bold]{dateX}[/]";

    series.dataFields.openDateX = "start";
    series.dataFields.dateX = "end";
    series.dataFields.categoryY = "category";
    series.columns.template.propertyFields.fill = "color"; // get color from data
    series.columns.template.propertyFields.stroke = "color";
    series.columns.template.strokeOpacity = 0;

    let bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.radius = 3;
    bullet.circle.strokeOpacity = 0;
    bullet.propertyFields.fill = "color";
    bullet.locationX = 0;

    let bullet2 = series.bullets.push(new am4charts.CircleBullet());
    bullet2.circle.radius = 3;
    bullet2.circle.strokeOpacity = 0;
    bullet2.propertyFields.fill = "color";
    bullet2.locationX = 1;

    let imageBullet1 = series.bullets.push(new am4plugins_bullets.PinBullet());
    imageBullet1.disabled = true;
    imageBullet1.propertyFields.disabled = "disabled1";
    imageBullet1.locationX = 1;
    imageBullet1.circle.radius = 20;
    imageBullet1.propertyFields.stroke = "color";
    imageBullet1.background.propertyFields.fill = "color";
    imageBullet1.image = new am4core.Image();
    imageBullet1.image.propertyFields.href = "image1";

    let imageBullet2 = series.bullets.push(new am4plugins_bullets.PinBullet());
    imageBullet2.disabled = true;
    imageBullet2.propertyFields.disabled = "disabled2";
    imageBullet2.locationX = 0;
    imageBullet2.circle.radius = 20;
    imageBullet2.propertyFields.stroke = "color";
    imageBullet2.background.propertyFields.fill = "color";
    imageBullet2.image = new am4core.Image();
    imageBullet2.image.propertyFields.href = "image2";

    let eventSeries = chart.series.push(
      new am4plugins_timeline.CurveLineSeries()
    );
    eventSeries.dataFields.dateX = "eventDate";
    eventSeries.dataFields.categoryY = "category";
    eventSeries.data = [
      {
        category: "",
        eventDate: "2019-01-15",
        letter: "A",
        description: "Something happened here",
      },
      {
        category: "",
        eventDate: "2019-01-23",
        letter: "B",
        description: "Something happened here",
      },
      {
        category: "",
        eventDate: "2019-02-10",
        letter: "C",
        description: "Something happened here",
      },
      {
        category: "",
        eventDate: "2019-02-29",
        letter: "D",
        description: "Something happened here",
      },
      {
        category: "",
        eventDate: "2019-03-06",
        letter: "E",
        description: "Something happened here",
      },
      {
        category: "",
        eventDate: "2019-03-12",
        letter: "F",
        description: "Something happened here",
      },
      {
        category: "",
        eventDate: "2019-03-22",
        letter: "G",
        description: "Something happened here",
      },
    ];
    eventSeries.strokeOpacity = 0;

    let flagBullet = eventSeries.bullets.push(
      new am4plugins_bullets.FlagBullet()
    );
    flagBullet.label.propertyFields.text = "letter";
    flagBullet.locationX = 0;
    flagBullet.tooltipText = "{description}";

    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX.align = "center";
    chart.scrollbarX.width = am4core.percent(85);

    let cursor = new am4plugins_timeline.CurveCursor();
    chart.cursor = cursor;
    cursor.xAxis = dateAxis;
    cursor.yAxis = categoryAxis;
    cursor.lineY.disabled = true;
    cursor.lineX.strokeDasharray = "1,4";
    cursor.lineX.strokeOpacity = 1;

    dateAxis.renderer.tooltipLocation2 = 0;
    categoryAxis.cursorTooltipEnabled = false;

    this.chart5 = chart;
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
    this.getChartIncidentInvestigation5();
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

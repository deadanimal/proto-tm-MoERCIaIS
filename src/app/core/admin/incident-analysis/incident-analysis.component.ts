import {
  Component,
  OnInit,
  NgZone,
  OnDestroy,
  TemplateRef,
  ElementRef,
  ViewChild,
} from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";

@Component({
  selector: "app-incident-analysis",
  templateUrl: "./incident-analysis.component.html",
  styleUrls: ["./incident-analysis.component.scss"],
})
export class IncidentAnalysisComponent implements OnInit, OnDestroy {
  // Chart
  private chart1: any;
  private chart2: any;
  private chart3: any;
  private chart4: any;
  private chart5: any;

  constructor(private zone: NgZone) {}

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
      this.getChartAnalysisIncident1();
      this.getChartAnalysisIncident2();
      this.getChartAnalysisIncident3();
      this.getChartAnalysisIncident4();
      this.getChartAnalysisIncident5();
    });
  }

  getChartAnalysisIncident1() {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let container = am4core.create(
      "chartdivincidentanalysis1",
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

  getChartAnalysisIncident2() {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartdivincidentanalysis2", am4charts.XYChart);

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

    this.chart2 = chart;
  }

  getChartAnalysisIncident3() {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartdivincidentanalysis3", am4charts.XYChart);

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

    this.chart3 = chart;
  }

  getChartAnalysisIncident4() {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("chartdivincidentanalysis4", am4charts.XYChart);
    chart.paddingRight = 20;

    let data = [];
    let visits = 10;
    let previousValue;

    for (var i = 0; i < 100; i++) {
      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);

      if (i > 0) {
        // add color to previous data item depending on whether current value is less or more than previous value
        if (previousValue <= visits) {
          data[i - 1].color = chart.colors.getIndex(0);
        } else {
          data[i - 1].color = chart.colors.getIndex(5);
        }
      }

      data.push({ date: new Date(2018, 0, i + 1), value: visits });
      previousValue = visits;
    }

    chart.data = data;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.axisFills.template.disabled = true;
    dateAxis.renderer.ticks.template.disabled = true;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;
    valueAxis.renderer.axisFills.template.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";
    series.strokeWidth = 2;
    series.tooltipText = "value: {valueY}, day change: {valueY.previousChange}";

    // set stroke property field
    series.propertyFields.stroke = "color";

    chart.cursor = new am4charts.XYCursor();

    let scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX = scrollbarX;

    dateAxis.start = 0.7;
    dateAxis.keepSelection = true;

    this.chart4 = chart;
  }

  getChartAnalysisIncident5() {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("chartdivincidentanalysis5", am4charts.XYChart);
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
        network: "Due to Manhold",
        MAU: 627,
      },
      {
        network: "Work Procedure+",
        MAU: 430,
      },
      {
        network: "Unsafe Condition/Act",
        MAU: 150,
      },
    ];

    this.chart5 = chart;
  }
}

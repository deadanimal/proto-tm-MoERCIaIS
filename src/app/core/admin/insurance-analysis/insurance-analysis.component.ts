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
  selector: "app-insurance-analysis",
  templateUrl: "./insurance-analysis.component.html",
  styleUrls: ["./insurance-analysis.component.scss"],
})
export class InsuranceAnalysisComponent implements OnInit, OnDestroy {
  // Chart
  private chart1: any;
  private chart2: any;
  private chart3: any;
  private chart4: any;
  private chart5: any;
  private chart6: any;

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
      if (this.chart6) {
        console.log("Chart disposed");
        this.chart6.dispose();
      }
    });
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChartAnalysisInsurance1();
      this.getChartAnalysisInsurance2();
      this.getChartAnalysisInsurance3();
      this.getChartAnalysisInsurance4();
      this.getChartAnalysisInsurance5();
      this.getChartAnalysisInsurance6();
    });
  }

  getChartAnalysisInsurance1() {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartdivinsuranceanalysis1", am4charts.XYChart);

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
    let qwert = chart.scrollbarX as any;
    qwert.series.push(series);
    chart.scrollbarX.parent = chart.bottomAxesContainer;

    dateAxis.start = 0.79;
    dateAxis.keepSelection = true;

    this.chart1 = chart;
  }

  getChartAnalysisInsurance2() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartdivinsuranceanalysis2", am4charts.XYChart);
    chart.scrollbarX = new am4core.Scrollbar();

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
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.tooltip.disabled = true;
    categoryAxis.renderer.minHeight = 110;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minWidth = 50;

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.sequencedInterpolation = true;
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
    series.columns.template.strokeWidth = 0;

    series.tooltip.pointerOrientation = "vertical";

    series.columns.template.column.cornerRadiusTopLeft = 10;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.fillOpacity = 0.8;

    // on hover, make corner radiuses bigger
    let hoverState = series.columns.template.column.states.create("hover");
    hoverState.properties.cornerRadiusTopLeft = 0;
    hoverState.properties.cornerRadiusTopRight = 0;
    hoverState.properties.fillOpacity = 1;

    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    // Cursor
    chart.cursor = new am4charts.XYCursor();

    this.chart2 = chart;
  }

  getChartAnalysisInsurance3() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create(
      "chartdivinsuranceanalysis3",
      am4charts.PieChart3D
    );
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    //chart.legend = new am4charts.Legend();

    chart.data = [
      {
        country: "Incident ID",
        litres: 501.9,
      },
      {
        country: "Perkeso Incident Number",
        litres: 301.9,
      },
      {
        country: "Date Complete Investigation",
        litres: 201.1,
      },
      {
        country: "Incident root cause",
        litres: 165.8,
      },
    ];

    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";

    this.chart3 = chart;
  }

  getChartAnalysisInsurance4() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create(
      "chartdivinsuranceanalysis4",
      am4charts.PieChart
    );

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";

    // Let's cut a hole in our Pie chart the size of 30% the radius
    chart.innerRadius = am4core.percent(30);

    // Put a thick white border around each Slice
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    // change the cursor on hover to make it apparent the object can be interacted with
    pieSeries.slices.template.cursorOverStyle = [
      {
        property: "cursor",
        value: "pointer",
      },
    ];

    pieSeries.alignLabels = false;
    pieSeries.labels.template.bent = true;
    pieSeries.labels.template.radius = 3;
    pieSeries.labels.template.padding(0, 0, 0, 0);

    pieSeries.ticks.template.disabled = true;

    // Create a base filter effect (as if it's not there) for the hover to return to
    let shadow = pieSeries.slices.template.filters.push(
      new am4core.DropShadowFilter()
    );
    shadow.opacity = 0;

    // Create hover state
    let hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

    // Slightly shift the shadow and make it more prominent on hover
    let hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter());
    hoverShadow.opacity = 0.7;
    hoverShadow.blur = 5;

    // Add a legend
    //chart.legend = new am4charts.Legend();

    chart.data = [
      {
        country: "Success",
        litres: 53,
      },
      {
        country: "Pending",
        litres: 16,
      },
      {
        country: "Reject",
        litres: 13,
      },
    ];

    this.chart4 = chart;
  }

  getChartAnalysisInsurance5() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("chartdivinsuranceanalysis5", am4charts.XYChart);
    chart.colors.step = 2;

    chart.legend = new am4charts.Legend();
    chart.legend.position = "top";
    chart.legend.paddingBottom = 20;
    chart.legend.labels.template.maxWidth = 95;

    let xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    xAxis.dataFields.category = "category";
    xAxis.renderer.cellStartLocation = 0.1;
    xAxis.renderer.cellEndLocation = 0.9;
    xAxis.renderer.grid.template.location = 0;

    let yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;

    function createSeries(value, name) {
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = value;
      series.dataFields.categoryX = "category";
      series.name = name;

      series.events.on("hidden", arrangeColumns);
      series.events.on("shown", arrangeColumns);

      let bullet = series.bullets.push(new am4charts.LabelBullet());
      bullet.interactionsEnabled = false;
      bullet.dy = 30;
      bullet.label.text = "{valueY}";
      bullet.label.fill = am4core.color("#ffffff");

      return series;
    }

    chart.data = [
      {
        category: "Place #1",
        first: 40,
        second: 55,
        third: 60,
      },
      {
        category: "Place #2",
        first: 30,
        second: 78,
        third: 69,
      },
      {
        category: "Place #3",
        first: 27,
        second: 40,
        third: 45,
      },
      {
        category: "Place #4",
        first: 50,
        second: 33,
        third: 22,
      },
    ];

    createSeries("first", "The First");
    createSeries("second", "The Second");
    createSeries("third", "The Third");

    function arrangeColumns() {
      let series = chart.series.getIndex(0);

      let w =
        1 -
        xAxis.renderer.cellStartLocation -
        (1 - xAxis.renderer.cellEndLocation);
      if (series.dataItems.length > 1) {
        let x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
        let x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
        let delta = ((x1 - x0) / chart.series.length) * w;
        if (am4core.isNumber(delta)) {
          let middle = chart.series.length / 2;

          let newIndex = 0;
          chart.series.each(function (series) {
            if (!series.isHidden && !series.isHiding) {
              series.dummyData = newIndex;
              newIndex++;
            } else {
              series.dummyData = chart.series.indexOf(series);
            }
          });
          let visibleCount = newIndex;
          let newMiddle = visibleCount / 2;

          chart.series.each(function (series) {
            let trueIndex = chart.series.indexOf(series);
            let newIndex = series.dummyData;

            let dx = (newIndex - trueIndex + middle - newMiddle) * delta;

            series.animate(
              { property: "dx", to: dx },
              series.interpolationDuration,
              series.interpolationEasing
            );
            series.bulletsContainer.animate(
              { property: "dx", to: dx },
              series.interpolationDuration,
              series.interpolationEasing
            );
          });
        }
      }
    }

    this.chart5 = chart;
  }

  getChartAnalysisInsurance6() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartdivinsuranceanalysis6", am4charts.XYChart);
    chart.paddingRight = 20;

    // Add data
    chart.data = [
      {
        year: "1950",
        value: -0.307,
      },
      {
        year: "1951",
        value: -0.168,
      },
      {
        year: "1952",
        value: -0.073,
      },
      {
        year: "1953",
        value: -0.027,
      },
      {
        year: "1954",
        value: -0.251,
      },
      {
        year: "1955",
        value: -0.281,
      },
      {
        year: "1956",
        value: -0.348,
      },
      {
        year: "1957",
        value: -0.074,
      },
      {
        year: "1958",
        value: -0.011,
      },
      {
        year: "1959",
        value: -0.074,
      },
      {
        year: "1960",
        value: -0.124,
      },
      {
        year: "1961",
        value: -0.024,
      },
      {
        year: "1962",
        value: -0.022,
      },
      {
        year: "1963",
        value: 0,
      },
      {
        year: "1964",
        value: -0.296,
      },
      {
        year: "1965",
        value: -0.217,
      },
      {
        year: "1966",
        value: -0.147,
      },
      {
        year: "1967",
        value: -0.15,
      },
      {
        year: "1968",
        value: -0.16,
      },
      {
        year: "1969",
        value: -0.011,
      },
      {
        year: "1970",
        value: -0.068,
      },
      {
        year: "1971",
        value: -0.19,
      },
      {
        year: "1972",
        value: -0.056,
      },
      {
        year: "1973",
        value: 0.077,
      },
      {
        year: "1974",
        value: -0.213,
      },
      {
        year: "1975",
        value: -0.17,
      },
      {
        year: "1976",
        value: -0.254,
      },
      {
        year: "1977",
        value: 0.019,
      },
      {
        year: "1978",
        value: -0.063,
      },
      {
        year: "1979",
        value: 0.05,
      },
      {
        year: "1980",
        value: 0.077,
      },
      {
        year: "1981",
        value: 0.12,
      },
      {
        year: "1982",
        value: 0.011,
      },
      {
        year: "1983",
        value: 0.177,
      },
      {
        year: "1984",
        value: -0.021,
      },
      {
        year: "1985",
        value: -0.037,
      },
      {
        year: "1986",
        value: 0.03,
      },
      {
        year: "1987",
        value: 0.179,
      },
      {
        year: "1988",
        value: 0.18,
      },
      {
        year: "1989",
        value: 0.104,
      },
      {
        year: "1990",
        value: 0.255,
      },
      {
        year: "1991",
        value: 0.21,
      },
      {
        year: "1992",
        value: 0.065,
      },
      {
        year: "1993",
        value: 0.11,
      },
      {
        year: "1994",
        value: 0.172,
      },
      {
        year: "1995",
        value: 0.269,
      },
      {
        year: "1996",
        value: 0.141,
      },
      {
        year: "1997",
        value: 0.353,
      },
      {
        year: "1998",
        value: 0.548,
      },
      {
        year: "1999",
        value: 0.298,
      },
      {
        year: "2000",
        value: 0.267,
      },
      {
        year: "2001",
        value: 0.411,
      },
      {
        year: "2002",
        value: 0.462,
      },
      {
        year: "2003",
        value: 0.47,
      },
      {
        year: "2004",
        value: 0.445,
      },
      {
        year: "2005",
        value: 0.47,
      },
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.minGridDistance = 50;
    categoryAxis.renderer.grid.template.location = 0.5;
    categoryAxis.startLocation = 0.5;
    categoryAxis.endLocation = 0.5;

    // Create value axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.baseValue = 0;

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "year";
    series.strokeWidth = 2;
    series.tensionX = 0.77;

    // bullet is added because we add tooltip to a bullet for it to change color
    let bullet = series.bullets.push(new am4charts.Bullet());
    bullet.tooltipText = "{valueY}";

    bullet.adapter.add("fill", function (fill, target) {
      let fghj = target.dataItem as any;
      if (fghj.valueY < 0) {
        return am4core.color("#FF0000");
      }
      return fill;
    });
    let range = valueAxis.createSeriesRange(series);
    range.value = 0;
    range.endValue = -1000;
    range.contents.stroke = am4core.color("#FF0000");
    range.contents.fill = range.contents.stroke;

    // Add scrollbar
    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

    chart.cursor = new am4charts.XYCursor();

    this.chart6 = chart;
  }
}

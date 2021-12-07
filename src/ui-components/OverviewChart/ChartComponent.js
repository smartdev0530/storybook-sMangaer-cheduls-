import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import Typography from "../Typography/Typography";
import Tooltip from "../Tooltip/Tooltip";
import "./styles.scss";

const axisBottom = {
  tickSize: 5,
  tickPadding: 5,
  tickRotation: 0,
  legend: "",
  legendPosition: "middle",
  legendOffset: 32,
};

const axisLeft = {
  tickSize: 5,
  tickPadding: 5,
  tickRotation: 0,
  legend: "Hours",
  legendPosition: "middle",
  legendOffset: -80,
  format: (v) => (v % 2 === 0 ? `${v} hr` : ""),
};

const theme = {
  background: "#fff",
  axis: {
    fontSize: "24px",
    tickColor: "#eee",
    ticks: {
      line: {
        stroke: "#BCBCBC",
        strokeWidth: 0,
        strokeDasharray: "4 4",
      },
      text: {
        fontFamily: "OpenSans-Regular",
        fontSize: "12px",
        fill: "#414141",
      },
    },
    legend: {
      text: {
        fill: "#aaaaaa",
      },
    },
  },
  grid: {
    line: {
      stroke: "#BCBCBC",
      strokeWidth: 1,
      strokeDasharray: "4 4",
    },
  },
};

const legends = [
  {
    dataFrom: "keys",
    anchor: "top-left",
    direction: "row",
    justify: false,
    translateX: -20,
    translateY: -40,
    itemsSpacing: 2,
    itemWidth: 100,
    itemHeight: 20,
    itemDirection: "left-to-right",
    itemOpacity: 1,
    itemTextColor: "#414141",
    symbolSize: 6,
    effects: [
      {
        on: "hover",
        style: {
          itemOpacity: 1,
        },
      },
    ],
  },
];

const time_convert = (num) => {
  var hours = Math.floor(num);
  if (hours - num === 0) {
    if (num >= 10) return num + ":" + "00";
    else return "0" + num + ":" + "00";
  } else {
    var minutes = (num - hours) * 60;
    minutes = Math.ceil(minutes);
    if (minutes < 10) minutes = "0" + minutes;
    if (hours >= 10) {
      return hours + ":" + minutes;
    } else {
      return "0" + hours + ":" + minutes;
    }
  }
};

const indexBy = "date";

// returns a list of total value labels for stacked bars
const TotalLabels = ({ bars, yScale }) => {
  // space between top of stacked bars and total label
  const labelMargin = 20;

  return bars.map(({ data: { data, indexValue }, x, width }, i) => {
    // sum of all the bar values in a stacked bar
    const total = Object.keys(data)
      //f ilter out whatever your indexBy value is
      .filter((key) => key !== indexBy)
      .reduce((a, key) => Number(a) + Number(data[key]), 0);

    return (
      <g transform={`translate(${x}, ${yScale(total) - labelMargin})`} key={`${indexValue}-${i}`}>
        <text
          // add any class to the label here
          className="bar-total-label"
          x={width / 2}
          y={labelMargin / 2}
          textAnchor="middle"
          alignmentBaseline="central"
          // add any style to the label here
          style={{
            fontFamily: "OpenSans-Regular",
            fontSize: "12px",
            fill: "#757575",
          }}
        >
          {time_convert(total) + " hr"}
        </text>
      </g>
    );
  });
};

const strToHour = (hourStr) => {
  let givenStr = hourStr.split(":");
  let hour = 0;
  if (parseInt(givenStr[0]) < 0) {
    return 0;
  } else {
    hour = parseInt(givenStr[0]);
    if (parseInt(givenStr[1]) > 0) {
      hour = hour + parseInt(givenStr[1]) / 60.0;
    }
  }
  return hour;
};

const ChartComponent = ({ data, apiData, chartWidth = 600, chartHeight = 400, chartPadding = 0.8 }) => {
  const mappedData = [];
  let labelHours = [];
  data[0].data.overview.map((ele, index) => {
    mappedData[index] = {
      date: ele["date"],
      RegularHours: ele["regularHours"],
      OverTime: ele["overtime"],
    };
    labelHours.push(ele["regularHours"] + ele["overtime"]);
  });

  const apiMappedData = [];

  apiData &&
    apiData.overview.map((ele, index) => {
      apiMappedData[index] = {
        date: ele.date,
        RegularHours: strToHour(ele.regularHours),
        OverTime: ele.overtime === "" ? 0 : strToHour(ele.overtime),
      };
    });

  const mapPadding = (noofColumns) => {
    let padding = 0.4;
    if (noofColumns === 1) padding = 0.967;
    if (noofColumns === 2) padding = 0.951;
    if (noofColumns === 3) padding = 0.934;
    if (noofColumns === 4) padding = 0.919;
    if (noofColumns === 5) padding = 0.902;
    if (noofColumns === 6) padding = 0.888;
    if (noofColumns === 7) padding = 0.87;
    if (noofColumns === 8) padding = 0.855;
    if (noofColumns === 9) padding = 0.84;
    if (noofColumns > 9) {
      padding = 0.84 - 0.015 * (noofColumns - 9);
      if (padding < 0) padding = 0.4;
    }
    return padding;
  };

  return (
    <div>
      <div className="chart-panel">
        <div className="chart-panel-left">
          <span className="element-text">
            <span className="element-text ">
              <div className="legend-color1"></div>
            </span>
            &nbsp;
            <span className="element-text legend-text-span">
              <Typography text={"Hours Worked"} size="regular12" />
            </span>
          </span>
          &nbsp;&nbsp;&nbsp;
          <span className="element-text">
            <span className="element-text ">
              <div className="legend-color2"></div>
            </span>
            &nbsp;
            <span className="element-text legend-text-span">
              <Typography text={"Overtime"} size="regular12" />
            </span>
          </span>
        </div>

        <div className="chart-panel-right">
          {apiData && (
            <span className="element-text">
              <Typography
                text={`${apiData.totalWorkingHours === "" ? 0 : apiData.totalWorkingHours} hrs`}
                size="semibold28"
                color="font-secondary-color"
              />
            </span>
          )}
          <span className="element-text">
            <div className="vertical-time-divider"></div>
          </span>
          {apiData && (
            <span className="element-text">
              <Typography
                text={`${apiData.totalOvertime === "" ? 0 : apiData.totalOvertime} hrs`}
                size="semibold28"
                color="font-magenta"
              />
            </span>
          )}
        </div>
      </div>
      <div className="bar-wrapper">
        <div style={{ height: chartHeight }}>
          <ResponsiveBar
            margin={{ top: 32, right: 10, bottom: 25, left: 50 }}
            data={apiMappedData}
            // barComponent={() => (<rect width="20" focusable="false"></rect>)}
            minValue={0}
            maxValue={12}
            padding={mapPadding(apiMappedData.length)}
            colors={["#153E90", "#C41974"]}
            keys={["RegularHours", "OverTime"]}
            indexBy="date"
            labelTextColor="#757575"
            tooltip={({ value }) => (
              <div>
                <div className="tooltip-arrow"></div>
                <div className="tooltip-div">
                  <Typography text={`${time_convert(value)} hr`} size="regular12" color="font-white" />
                </div>
              </div>
            )}
            labelSkipWidth={120}
            labelSkipHeight={11}
            enableGridX={false}
            axisBottom={axisBottom}
            axisLeft={axisLeft}
            theme={theme}
            //legends={legends}
            gridYValues={[0, 2, 4, 6, 8, 10, 12]}
            valueFormat={(v) => (v % 2 === 0 ? `${v} hr` : null)}
            // add TotalLabels after bars
            layers={["grid", "axes", "bars", TotalLabels, "markers", "legends"]}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;

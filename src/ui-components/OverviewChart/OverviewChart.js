import PropTypes from "prop-types";
import ChartComponent from "./ChartComponent";

const OverviewChart = ({ data, apiData, chartWidth, chartHeight, chartPadding }) => {
  return (
    <div>
      <ChartComponent
        data={data}
        apiData={apiData}
        chartWidth={chartWidth}
        chartHeight={chartHeight}
        chartPadding={chartPadding}
      />
    </div>
  );
};

OverviewChart.propTypes = {
  data: PropTypes.object,
  chartWidth: PropTypes.number,
  chartHeight: PropTypes.number,
  chartPadding: PropTypes.number,
};

export default OverviewChart;

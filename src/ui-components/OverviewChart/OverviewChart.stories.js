import OverviewChart from "./OverviewChart";
import { data } from "../../constants/OverviewChartConstants";

export default {
  title: "Components/Overview Chart",
  component: OverviewChart,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <OverviewChart {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: data,
  chartWidth: 900,
  chartHeight: 400,
  chartPadding: 0.5,
};

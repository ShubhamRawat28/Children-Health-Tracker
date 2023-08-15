import { useTheme } from "@emotion/react";
import { ResponsiveLine } from "@nivo/line";
import { tokens } from "../theme";

const LineChart = ( props ) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
 
  return(
  <>
  <ResponsiveLine
    data={props.graphData}
    theme={
        {
            axis: {
                domain:{
                    line: {
                        stroke: colors.grey[100],
                    }
                },
                legend: {
                    text: {
                        fill: colors.grey[100],
                    }
                },
                ticks: {
                    line: {
                        stroke: colors.grey[100],
                        strokeWidth: 1
                    },
                    text:{
                        fill: colors.grey[100],
                    }
                }
            },
            legends: {
                text: {
                    fill: colors.grey[100],
                }
            },
            tooltip: {
                container: {
                    color: colors.grey[100],
                }
            }
        }
    }
    colors = {props.isDashBoard ? {datum: 'color'}: { scheme: 'nivo'}}
    margin={{ top: 30, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    curve="linear"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: props.xTitle,
      legendOffset: 36,
      legendPosition: "middle",
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: props.yTitle,
      legendOffset: -40,
      legendPosition: "middle",
    }}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    areaOpacity={0}
    useMesh={true}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .5)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    />
  </>);
};

export default LineChart;

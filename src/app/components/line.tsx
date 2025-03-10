import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"; // Import necessary components from chart.js
import annotationPlugin from "chartjs-plugin-annotation"; // Import the annotation plugin
import { lineChartData as fakeData } from "../fakeData"; // Import the fakeData

// Register the components with ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin // Register the annotation plugin
);

interface LineProps {
  percentile: number; // Prop to receive the percentile value
}

export default function LineChart({ percentile }: LineProps) {
  // Clone the fakeData to avoid mutating the original data
  const clonedData = JSON.parse(JSON.stringify(fakeData));

  // Find the index for the current percentile range
  const percentileIndex = Math.floor(percentile / 10);

  // Update the data to include the current percentile value
  clonedData.datasets[0].data = clonedData.datasets[0].data.map(
    (value: number, index: number) =>
      index === percentileIndex ? value + 1 : value
  );

  // Options for the line chart
  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Percentile Distribution",
      },
      annotation: {
        annotations: {
          line1: {
            type: "line" as const,
            scaleID: "x",
            value: clonedData.labels[percentileIndex],
            borderColor: "blue",
            borderWidth: 2,
            label: {
              content: `Percentile: ${percentile}%`,
              enabled: true,
              position: "center" as const, // Position the label at the start of the line
              backgroundColor: "black", // Light blue background for the label
              color: "black", // Blue text color
              font: {
                size: 12, // Font size for the label
              },
              padding: {
                top: 6,
                bottom: 6,
              },
            },
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Percentile Range",
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of People",
        },
      },
    },
  };

  return <Line data={clonedData} options={lineChartOptions} />;
}

import React from 'react';

import { CategoryScale, Chart, LineElement, LinearScale, PointElement } from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

const LineChart = () => {

	const data = {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		datasets: [
			{
				label: "First dataset",
				data: [0, 55, 53, 20, 45, 78, 40, 60, 80, 75, 60, 100],
				fill: true,
				backgroundColor: "rgba(75,192,192,0.2)",
				borderColor: "#E5142A"
			},
		]
	};

	const options = {
		plugins: {
			legend: {
				display: false
			}
		}
	}

	return (
		<>
			<Line data={data} options={options} />
		</>
	)
}

export default LineChart

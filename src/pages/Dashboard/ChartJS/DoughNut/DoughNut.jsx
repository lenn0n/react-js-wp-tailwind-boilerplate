import React from 'react'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughNut() {


	const data = {
		labels: [
			'Done',
			'Pending',
			'Failed',
			'Cancelled',
			'Refunded',
			'Voided',
		],
		datasets: [{
			label: 'My First Dataset',
			data: [300, 50, 100, 20, 145, 35],
			backgroundColor: [
				'#79D472',
				'#F5CC6C',
				'#EF5656',
				'#EF5656',
				'#56D5EF',
				'#5675EF',
			],
			hoverOffset: 5,
		}],
	};


	const options = {
		plugins: {
			legend: {
				display: false,
				position: 'bottom',
				labels: {
					usePointStyle: true,
				},
				padding: 20,
			},
			htmlLegend: {
				legendDiv: document.getElementById('legendDiv'),
				clickable: false, // optional
				maxColumns: 2 // optional
			}
		}
	}

	const doughnutLabel = {
		id: 'doughnutLabel',
		beforeDatasetsDraw(chart, args, plugins) {
			console.log("chart.getDatasetMeta(0).", chart.width);
			// const { ctx, data } = chart;
			const centerX = chart.getDatasetMeta(0).data[0].x;
			const centerY = chart.getDatasetMeta(0).data[0].y;

			// ctx.save();
			// ctx.font = 'bold text-[2000px] sans-serif';
			// ctx.fillStyle = 'red';
			// ctx.textAlign = 'center';
			// ctx.textBaseLine = 'middle';
			// ctx.fillText('125', centerX, centerY - 15);

			// ctx.font = 'bold 30px sans-serif';
			// ctx.fillStyle = 'black';
			// ctx.textAlign = 'center';
			// ctx.textBaseLine = 'middle';
			// ctx.fillText('Transaction', centerX, centerY + 30);
			var width = chart.width,
				height = chart.height,
				ctx = chart.ctx;

			ctx.restore();
			var fontSize = (width / 6).toFixed(0);
			console.log("fontSize: ", fontSize);
			ctx.font = fontSize + "px sans-serif";
			ctx.fillStyle = '#000000';
			ctx.textAlign = 'center';
			ctx.textBaseline = "middle";

			// var text = "75%",
			// 	textX = Math.round((width - ctx.measureText(text).width) / 2),
			// 	textY = height / 2;

			ctx.fillText("125", centerX, centerY - 5);


			var fontSize = (height / 20).toFixed(0);
			console.log("fontSize: ", fontSize);
			ctx.font = fontSize + "px sans-serif";
			ctx.fillStyle = '#707070';
			ctx.textAlign = 'center';
			ctx.textBaseline = "middle";
			ctx.fillText("Transaction", centerX, centerY + 25);

			ctx.save();
		},
	}

	return (
		<>
			<div className="flex items-center justify-center mb-5 md:mb-9">
				<Doughnut data={data} plugins={[doughnutLabel]} options={options} style={{ margin: "0 auto" }} />
			</div>

			<div className='grid grid-cols-12 gap-3 md:gap-4 mx-2'>
				<div className="col-span-6">
					<div className="flex flex-start items-center gap-2 md:gap-3">
						<div className=' bg-[#79D472] p-2 rounded-full w-4 h-4'></div>
						<h6 className='text-sm lg:text-base'>Done</h6>
					</div>
				</div>
				<div className="col-span-6">
					<div className="flex flex-start items-center gap-2 md:gap-3">
						<div className=' bg-[#F5CC6C] p-2 rounded-full w-4 h-4'></div>
						<h6 className='text-sm lg:text-base'>Pending</h6>
					</div>
				</div>
				<div className="col-span-6">
					<div className="flex flex-start items-center gap-2 md:gap-3">
						<div className=' bg-[#EF5656] p-2 rounded-full w-4 h-4'></div>
						<h6 className='text-sm lg:text-base'>Failed</h6>
					</div>
				</div>
				<div className="col-span-6">
					<div className="flex flex-start items-center gap-2 md:gap-3">
						<div className=' bg-[#A567DB] p-2 rounded-full w-4 h-4'></div>
						<h6 className='text-sm lg:text-base'>Cancelled</h6>
					</div>
				</div>
				<div className="col-span-6">
					<div className="flex flex-start items-center gap-2 md:gap-3">
						<div className=' bg-[#56D5EF] p-2 rounded-full w-4 h-4'></div>
						<h6 className='text-sm lg:text-base'>Refunded</h6>
					</div>
				</div>
				<div className="col-span-6">
					<div className="flex flex-start items-center gap-2 md:gap-3">
						<div className=' bg-[#5675EF] p-2 rounded-full w-4 h-4'></div>
						<h6 className='text-sm lg:text-base'>Voided</h6>
					</div>
				</div>
			</div>
		</>
	)
}

export default DoughNut

/** @format */

import Chart from "chart.js/auto";

(async function () {
	const data = [
		{ product: "polo", amount: 718 },
		{ product: "shoes", amount: 2938 },
		{ product: "accessories", amount: 2018 },
		{ product: "lather products", amount: 2611 },
		{ product: "cosmetics", amount: 2248 },
	];

	new Chart(document.querySelector("#chart-product"), {
		type: "bar",
		data: {
			labels: data.map((row) => row.product),
			datasets: [
				{
					label: "Product sales at all time",
					data: data.map((row) => row.amount),
				},
			],
		},
	});
})();

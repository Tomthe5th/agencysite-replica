/** @format */

const tablebody = document.querySelector(".table-body");


// global
let products = [];
// runs fetch after DOM is ready
window.addEventListener("DOMContentLoaded", getProductData);

async function getProductData() {
	tablebody.textContent = 'Loading ... ';
	try {
		tablebody.innerHTML = '';
		const response = await fetch("https://fakestoreapi.com/products?limit=10");
		const data = await response.json();
		products = data;
		console.log(products);

		products.forEach((product) => {
			addProductToTableBody(product);
		});
	} catch (error) {
		console.log(error);
	}
}
//DOM api
function addProductToTableBody(product) {
	const trEl = document.createElement("tr");
	trEl.classList.add("table-row");
	trEl.innerHTML = `
		<td class="table-col">${product.title.substring(0, 10)}</td>
		<td class="table-col">${product.price}</td>
		<td class="table-col">${product.description.substring(0, 20)}</td>
		<td class="table-col">${product.category}</td>
		<td class="table-col flex items-center justify-evenly">
			<div>
				<button type="button" class="btn-primary">
					edit
				</button>
			</div>
			<div>
				<button type="button" class=" btn-danger">
					<i class="fa-solid fa-trash-can"></i>
				</button>
			</div>
		</td>`;
	tablebody.appendChild(trEl);
}

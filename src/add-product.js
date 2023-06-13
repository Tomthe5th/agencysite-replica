/** @format */

const form = document.querySelector("#add-product-form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const category = document.querySelector("#category");
const description = document.querySelector("#des");
const submitBtn = document.querySelector(".submit-btn");

form.addEventListener("submit", (event) => {
	event.preventDefault(); //prevents container closing after button event
	addProduct();
});

async function addProduct() {
	const addProduct = {
		title: title.value,
		price: parseInt(price.value), //convert to Actual number datatype(form datatypes->always str)
		category: category.value,
		description: description.value,
	};
	try {
		//  console.log({
		// 		title: title.value,
		// 		price: price.value,
		// 		category: category.value,
		// 		description: description.value,
        // 	});
        submitBtn.textContent = 'Saving...';
		const add = await fetch("https://fakestoreapi.com/products", {
			method: "POST",
			body: JSON.stringify(addProduct),
        });
         submitBtn.textContent = "Save";
	} catch (error) {
		console.log(error);
	}
}

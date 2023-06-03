/** @format */
const faqContainer = document.querySelector(".faq-container");
const faqTitle = document.querySelector(".faq-title");
const faqContent = document.querySelector(".faq-content");
const faqIcon = document.querySelector(".faq-ico");

// faqTitle.onclick = () => alert('clicked');

// faqTitle.onclick = () => {
// 	faqContent.classList.toggle("show");
// 	faqIcon.classList.toggle("rotate-45");
// };

faqContainer.addEventListener("click", (event) => {
	console.log(event.target); //element u clicks on
	console.log(event.currenttarget); //selector target u clicks on

	const clickedArticle = event.target.closest("article");
	const clickedFaqcontent = clickedArticle.querySelector(".faq-content");

	clickedFaqcontent.classList.toggle("show");
	faqIcon.classList.toggle("rotate-45");
});

const burger = document.querySelector(".burger");
const dropdown = document.querySelector(".dropdown");
const nav = document.querySelector(".nav");




burger.addEventListener("click", () => {
	dropdown.classList.toggle('h-[380px]');
	nav.classList.toggle('bg-white');

});

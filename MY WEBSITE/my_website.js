// import styles from "./styles.js";

// function setRoot() {
// 	console.log(styles);

//     let array = [
//         // {
//         //     title: "free",
//         //     packageDetails: [
//         //         "1 User",
//         //         "Community Support",
//         //         "Style Customizer",
//         //         "Expanded Utilities",
//         //         "Third Party Integration",
//         //         "Layout Options",
//         //     ],
//         // },
//         {
//             title: "standard",
//             packageDetails: [
//                 "1 User",
//                 "Community Support",
//                 "Style Customizer",
//                 "Expanded Utilities",
//                 "Third Party Integration",
//                 "Layout Options",
//             ],
//         },
//         {
//             title: "enterprise",
//             packageDetails: [
//                 "1 User",
//                 "Community Support",
//                 "Style Customizer",
//                 "Expanded Utilities",
//                 "Third Party Integration",
//                 "Layout Options",
//             ],
//         },
//     ];
// 	let root = document.getElementById("root");
// 	root.style.display = "flex";
// 	for (let index = 0; index < array.length; index++) {
// 		let badge = document.createElement("div");
// 		badge.style.cssText = styles.badgeStyle;
// 		badge.setAttribute("id", "box-01");
// 		badge.innerHTML = array[index].title;
//         let packageDetails = document.createElement("div");
//         packageDetails.classList.add('package-details');
//         let packageDetailsTexts = array[index].packageDetails;
// 		for (let z = 0; z < packageDetailsTexts.length; z++) {
//             const text = packageDetailsTexts[z];
//             let packageDetailsTextDiv = document.createElement("div");
//             packageDetailsTextDiv.innerText = text
//             packageDetails.append(packageDetailsTextDiv);
//         }
//         badge.insertBefore(packageDetails, badge.nextSibling)
// 		root.append(badge);
// 	}
// }
// setRoot();

function divs() {
	let obj = [
		{
			title: "Free",
			price: "$0/mo",
			items: [
				"1 user",
				"Community support",
				"Style customizer",
				"Custom components",
				"Expanded utilities",
				"Third-party integration",
				"Layout options",
			],
		},
		{
			title: "Standard",
			price: "$60/mo",
			items: [
				"1 user",
				"Community support",
				"Style customizer",
				"Custom components",
				"Expanded utilities",
				"Third-party integration",
				"Layout options",
			],
		},
		{
			title: "Enterprices",
			price: "$100/mo",
			items: [
				"1 user 2",
				"Community support 2",
				"Style customizer 2",
				"Custom components 2",
				"Expanded utilities 2",
				"Third-party integration 2",
				"Layout options 2",
			],
		},
	];
	console.log();

	let firstdiv = document.getElementById("sec-05-box-02");
	firstdiv.style.display = "flex";
	firstdiv.style.justifyContent = "space-between";
	firstdiv.style.paddingLeft = "50px";
	firstdiv.style.paddingRight = "50px";
	for (let i = 0; i < obj.length; i++) {
		let div = document.createElement("div");
		let titleDiv = document.createElement("div");
		// first title......
		titleDiv.innerHTML = obj[i].title;
		if (i == 0) {
			titleDiv.style.cssText = `
			height: 19px;
			width: 35px;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: rgb(241, 246, 252);
			border-radius: 10px;
			font-size: 10px;
			color: black;
			font-weight: bold;
				`;
		}
		if (i == 1) {
			titleDiv.style.cssText = `
			height: 19px;
			width: max-content;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: rgb(241, 246, 252);
			border-radius: 10px;
			font-size: 10px;
			color: black;
			font-weight: bold;
				`;
		}
		if (i == 2) {
			titleDiv.style.cssText = `
			height: 19px;
			width: max-content;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: rgb(241, 246, 252);
			border-radius: 10px;
			font-size: 10px;
			color: black;
			font-weight: bold;
				`;
		}
		div.append(titleDiv);
		div.setAttribute("id", "box-01");
		let inner = document.createElement("div");
		let innerdivs = obj[i].items;
		let price = document.createElement("div");
		price.innerHTML = obj[i].price;
		// price.style.fontSize = "50px";
		if (i == 0) {
			price.style.cssText = `
			margin-top: 11px;
	        font-size: 30px;
			margin-bottom:10px;
			`;
		}
		if (i == 1) {
			price.style.cssText = `
			margin-top: 11px;
	        font-size: 30px;
			margin-bottom:10px;

			`;
		}
		if (i == 2) {
			price.style.cssText = `
			margin-top: 11px;
	        font-size: 30px;
			margin-bottom:10px;
			`;
		}
		div.append(price);

		// items......
		for (let s = 0; s < innerdivs.length; s++) {
			const innerdata = innerdivs[s];
			let innerdatadivs = document.createElement("div");
			innerdatadivs.style.cssText = `
			font-size: 13px;
	margin-top: 4px;
			`;
			innerdatadivs.classList.add("texts");
			innerdatadivs.innerText = innerdata;
			inner.append(innerdatadivs);
		}
		div.insertBefore(inner, div.nextSibling);
		firstdiv.append(div);
	}
}

divs();

// section-03

function section03() {
	let dummy = document.getElementById("section-dummy");

	dummy.style.cssText = `
		height: max-content;
		width: 400px;
		background-color:yellow;
		// display: flex;
		// justify-content: center;
	`;

	let icon = document.createElement("div");
	icon.innerHTML =
		// <section id="item-box">
		// 	<div id="rounded">
		// 		<i class="bi bi-database"></i>
		// 	</div>
		// </section>

		dummy.append(icon);
}
section03();




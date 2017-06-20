console.log("hello");



let products = null;
let categories = null;

function displayProducts(productArr) {
	let productWrapper = document.getElementById("product-wrapper");
	let cardArr = productArr.map( function(product) {
		return buildCard(product)
	})
	console.log("cardArr", cardArr);
	cardArr.forEach( function(card) {
		let cardWrapper = document.createElement("article");
		cardWrapper.innerHTML = card;
		productWraper.appendChild(cardWrapper)
	});
}

function buildDOMObj() {
	//loop through products and categories to grab Prd name, Dpt, Price and cat ID
	let productArr = products.map( function(product) {
		//inside this loop we need to loop again, but this time through the categories 
		//array to find the one category whose id matches the category id of the currentPrduct
		//maybe .filer()
		//the returned array will contain one object. can set "Dept" on the new obj
		//we are making the name propery of that one object
		let categoryItem = categories.filter( function(category) {
			return category.id === currentProduct.category_id;
		})
		let prodObj = {
			dept: categoryItem[0].name,
			name: currentProduct.name,
			price: currentProduct.price,
			catId: currentProduct.category_id
		}
		return prodObj 
	})
	console.log("prod object", productArr)

}



function buildCard(prodObj) {
	let card = `<div class="prodCard">
					<h2>${prodObj.name}</h2>
					<h3>${prodObj.dept}</h3>
					<p>${prodObj.price}</p>
					</div>`;
	return card;
}
let TempObj = {name: "furby",dept: "Toys", price: 12.75}
console.log("card", buildCard(TempObj));


function setProducts() {
	products = JSON.parse(productsJSON).products;
}

function setCategoriess() {
	categories = JSON.parse(event.target.responseText).categories;
	buildDOMObj
}

function getCategories() {
	let reqCats = new XMLHttpRequest();
	reqCats.addEventListener("load", setCategoriess);
	reqCats.open("GET", "data-files/categories.json");
	reqCats.send();
}

function getProducts(productsJSON) {
	let reqProducts = new XMLHttpRequest();
	reqProducts.addEventListener("load", setProducts);
	reqProducts.open("GET", "data-files/products.json");
	reqProducts.send();
}

getProducts();

// getCategories();


//data attributes




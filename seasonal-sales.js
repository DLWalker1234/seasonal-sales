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

document.getElementById("dropdown").addEventListener("change", function() {
	let selectedSeason = event.target.value
	console.log("selected Season", selectedSeason);
	let seasonCategory = categories.filter( function(category) {
		return category.season_discount.toLowerCase() === selectedSeason.toLowerCase();
	})
	let discount = seasonCategory[0].discount;
	let prodCards = documnet.getElementByClassName("prodCard")
	prodCards.forEach( function(card) {
		if (card.getAttribute("data-catId" === catId))
	}
}
// grab the value, lowercase it, compate it to the categories data to find the correct discount

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
					<p>$${prodObj.price}</p>
					<p class="isHidden">$${prodObj.desountedPrice}</p>
					</div>`;
	return card;
}

function calculateDiscountPrice(origPrice, discount) {
	return +(origPrce * (1.00 - discount)).toFixed(2)
}

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




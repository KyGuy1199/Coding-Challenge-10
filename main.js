//Task 2: Add Event Listeners for Product Selection

document.addEventListener("DOMContentLoaded", () => {
    const sizeSelect = document.getElementById("size-select");
    const productPrice = document.getElementById("product-price");
    const purchaseButton = document.getElementById("purchase-button");
    const stockInfo = document.getElementById("stock-info");

    const updateProductInfo = () => {
        const selectedOption = sizeSelect.options[sizeSelect.selectedIndex];
        const price= selectedOption.getAttribute("date-price");
        productPrice.textContext = '$${price}';

        //Task 3: Handle Stock Availability

        stockInfo.textContent = 'In Stock: ${stock}';
        purchaseButton.disabled = parseInt(stock) === 0;
    };

    sizeSelect.addEventListener("change", updateProductInfo);       //Modify dropdown
    updateProductInfo();        //initial call
});

// Task 4: Create a Checkout Event

purchaseButton.addEventListener("click", () => {
    const selectedOption = sizeSelect.options[sizeSelect.selectedIndex];
    const stock = selectedOption.getAttribute("data-stock");

    if (parseInt(stock) > 0) {
        alert("Item purchased, thank you!");
    } else {
        alert("Item out of stock, cannot be purchased");        //Alert to confirm purchase or indicate product can't be purchased
    }
});

//Task 5: Implement Event Delegation for Dynamic Product List

const productContainer = document.querySelector('.product-container');

const addProduct = (name, price, stock) => {        //Function to add new product
    const newProductHTML = <div class = "product">
        <h2> ${name} </h2>
        <p> $${price} </p>
        <p> Stock Available: ${stock} </p>
    </div> ;
    productContainer.innerHTML += newProductHTML;
}
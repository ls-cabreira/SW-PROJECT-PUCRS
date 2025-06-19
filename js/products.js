const productButtons = document.querySelectorAll('.product-button');

productButtons.forEach(button => {
    button.addEventListener('click', () => {
        let productList = JSON.parse(localStorage.getItem("products")) || [];
        const card = button.closest('.product-card')
        let productName = card.querySelector('.product-name').textContent;
        let productPrice = card.querySelector('.product-value').textContent;
        let productNumber = parseInt(card.querySelector('.product-select').value);
        productPrice = parseFloat(productPrice);


        const currentProduct = productList.find(p => p.name == productName);

        if (currentProduct) {
            currentProduct.qtd += productNumber;
            localStorage.setItem("products", JSON.stringify(productList));
        } else {
            const newProduct = {
                name: productName,
                qtd: productNumber,
                price: productPrice
            };
            productList.push(newProduct);
            localStorage.setItem("products", JSON.stringify(productList));
        }



        console.log(productList);
    })
})
const kartItem = document.getElementById('kart');
const clearButton = document.getElementById('remove-all');
export const kartTotal = document.getElementById('total');

document.addEventListener('DOMContentLoaded', () => {
    let productList = JSON.parse(localStorage.getItem("products")) || [];

    if (productList.length == 0) {
        kartItem.innerHTML += `
        <h3 class="item_name">Sem produtos</h3>
        `;
    } else {
        console.log(productList);
        display(productList);
    }
})

clearButton.addEventListener('click', () => {
    localStorage.clear();
    window.location.reload();
})

function display(list) {
    let sum = 0;
    list.forEach(element => {
        kartItem.innerHTML += `
            <div class="kart_item" id="kart-box">
                <h3 class="item_name">${element.name}</h3>
                <p class="item_qtd"><strong>${element.qtd}</strong>x</p>
                <p class="item_total">R$${element.price * element.qtd}</p>
                <button class="remove-item">Remover</button>
            </div>
        `;

        sum += parseFloat(element.price) * parseInt(element.qtd);
    })

    let buttonList = document.querySelectorAll('.remove-item');

    remove(buttonList);

    kartTotal.textContent = sum;
}

function remove(buttons) {
    let productList = JSON.parse(localStorage.getItem("products"));
    buttons.forEach(element => {
        element.addEventListener('click', () => {
            let item = element.closest('.kart_item');
            let name = item.querySelector('.item_name').textContent;

            let productSelection = productList.find(p => p.name == name);
            let index = productList.indexOf(productSelection);

            productList.splice(index, 1);

            localStorage.setItem("products", JSON.stringify(productList));
            window.location.reload();
        })
    })
}
import { kartTotal } from "./kart.js";
const form = document.getElementById('client-data');
const dateInput = form.querySelector('#service-date');
let curretDate = new Date().toISOString().split('T')[0];

dateInput.min = curretDate;


form.addEventListener('submit', (e) => {
    e.preventDefault();

    let clientName = form.querySelector('#name').value;
    let cpf = form.querySelector('#cpf').value;
    let service = form.querySelector('#type-service').value;
    let purchaseTotal = parseFloat(kartTotal.textContent);
    let date = dateInput.value;

    if (purchaseTotal == 0) {
        alert("O pedido não pode ser vazio!")
    } else {
        let confirmation = `
        Pedido confirmado!
        Nome: ${clientName}
        CPF: ${cpf}
        Total da compra: ${purchaseTotal}
        Recebimento: ${service}
        Data: ${date}
    `

        alert(confirmation);
    }



    localStorage.clear();
    window.location.reload();

});
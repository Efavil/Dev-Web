let input = document.querySelector('#inputTarefa');
let btnAdd = document.querySelector('#btn-add');
let main = document.querySelector('#areaLista')

function addTarefa() {
    let valorInput = input.value;

    if((valorInput !=="") && (valorInput !== null) && (valorInput !== undefined)) {
        let novoItem = `<div class="item">
            <div class="item-icone">
                <i class="mdi mdi-circle-outline"></i>
            </div>
            <div class="item-nome">
                ${valorInput}
            </div>
            <div class="item-botao">
                <button class="delete"><i class="mdi mdi-delete"></i> Deletar</button>
            </div>
        </div>`;

        main.innerHTML += novoItem;

        input.value = "";
        input.focus();
    }
}

input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        btnAdd.click();
    }
})
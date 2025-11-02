const form = document.getElementById("forms");
const campoA = document.getElementById("field-a");
const campoB = document.getElementById("field-b");
let formEValido = false;

function compararNumeros() {
    const valorA = parseFloat(campoA.value) || 0;
    const valorB = parseFloat(campoB.value) || 0;
    return valorB > valorA;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (compararNumeros()) {
        const mensagemSucesso = `Muito bem! O valor <b>${campoB.value}</b> é maior que o valor <b>${campoA.value}</b>`;
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        campoA.value = '';
        campoB.value = '';
    } else {
        campoB.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
});

campoB.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = compararNumeros();

    if (!formEValido) {
        campoB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        campoB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});
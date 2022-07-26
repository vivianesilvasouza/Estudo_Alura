var titulo = document.querySelector('.titulo')
titulo.textContent = 'Dr. Aparecida Nutricionista'

var paciente = document.querySelector('#primeiro-paciente')
var tdPeso = paciente.querySelector('.info-peso')
var peso = tdPeso.textContent

var tdAltura = paciente.querySelector('.info-altura')
var altura = tdAltura.textContent

var tdImc = paciente.querySelector('.info-imc')
var pesoValido = true
var alturaValida = true

if (peso <= 0 || peso >= 1000) {
    console.log('peso inválido!')
    pesoValido = false
    tdImc.textContent = 'Peso Inválido'
}
if (altura <= 0 || altura >= 4.00) {
    console.log('altura inválida!')
    alturaValida = false
    tdImc.textContent = 'Altura Inválida'
}
if (alturaValida && pesoValido) {
    var imc = peso / (altura * altura)
    tdImc.textContent = imc
}
//ele escurta o evento 
/* titulo.addEventListener('click', function () {
    console.log('olha só posso chamar de função anonima.')
}) */

var botaoAdicionar = document.querySelector('#adicionar-paciente')
botaoAdicionar.addEventListener('click', function (event) {
    event.preventDefault();
    var form = document.querySelector('#form-adiciona')

    var nome = form.nome.value
    var peso = form.peso.value
    var altura = form.altura.value
    var gordura = form.gordura.value

    var pacienteTr = document.createElement('tr')
    var nomeTd = document.createElement('td')
    var pesoTd = document.createElement('td')
    var alturaTd = document.createElement('td')
    var gorduraTd = document.createElement('td')
    var imcTd = document.createElement('td')



    nomeTd.textContent = nome
    pesoTd.textContent = peso
    alturaTd.textContent = altura
    gorduraTd.textContent = gordura


    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)

    var tabela = document.querySelector('#tabela-pacientes')

    tabela.appendChild(pacienteTr)
})
console.log(botaoAdicionar)
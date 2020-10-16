
//create map
const map = L.map('mapid').setView([-27.2057496,-49.6582355], 13);

//create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68]
})

let marker;//criado variavel vazia

//create and add marker
map.on('click', function(event){
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    //captura as informações do input
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //limpa icone do mapa antes de clicar
    marker && map.removeLayer(marker)

    //add icon marker
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})


//add o campo de fotos
function addPhotoField(){
    //pegar o container de fotos #images
    const container = document.querySelector('#images')
    //pegar o container para dulicar .new-iamge
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //verificar se o campo est[a vazio, não add ao container
    //console.log(newFieldContainer.children)
    const input = newFieldContainer.children[0]
    
    if(input.value == ""){
        return //acaba o código e nao executa mais as instruções após o return
    }

    //limpar o campo antes de adicionar ao container de imagens
    input.value = ""

    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1){
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    //deletar campo
    span.parentNode.remove();

}


//select "yes" or "no"
function toggleSelect(event){
    //retirar a class .active(dos botoes)
    document.querySelectorAll('.button-select button')
    .forEach((button) => button.classList.remove('active'))//array function

    //colocar a class .active no botão clicado
    const button = event.currentTarget
    button.classList.add('active')

    //pegar botao clicado


    //atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name=open_on_weekends]')
    
    //verificar se sim ou não
    input.value = button.dataset.value
}
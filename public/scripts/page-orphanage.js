const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng


//create map
const map = L.map('mapid', options).setView([lat,lng], 13);

//create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})


//create and marker


L.marker([lat,lng], { icon })
.addTo(map)

/* image gallery */
function selectImage(event){
    const button = event.currentTarget
    console.log(button.children)

    //remover todas as classes active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass) //essa função pode ser criado como array function () => {}

    function removeActiveClass(button){//esse button é <> do const button
        button.classList.remove("active")
    }

    
    //selecionar a imgaem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container de image
    imageContainer.src = image.src


    //add a classe .active para o botao que foi clicado
    button.classList.add("active")//esse button é == do const button
}
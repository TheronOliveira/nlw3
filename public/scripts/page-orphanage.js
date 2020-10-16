const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}


//create map
const map = L.map('mapid', options).setView([-27.2057496,-49.6582355], 13);

//create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})


//create and marker
L.marker([-27.2057496,-49.6582355], { icon })
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
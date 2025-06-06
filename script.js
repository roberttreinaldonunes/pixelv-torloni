//selecionando elementos no HTML
let menu = document.getElementById("menu")
let iconebarras = document.getElementById("icone-barras")
let iconex = document.getElementById("icone-x")

function abreFechaMenu(){

    //se o menu esta fechado
    if(menu.classList.contains("menu-fechado")){
        //abrir o menu
        menu.classList.remove("menu-fechado")

        //mostrar icone x
        iconex.style.display = "inline"

        //escondder icones barras
        iconebarras.style.display = "none"
    }
    else{
        //fechar o menu
        menu.classList.add("menu-fechado")

        //esconder o icone x
        iconex.style.display = "none"

        //mostrar icone barras
        iconebarras.style.display = "inline"
    }

}
onresize = () => {
    menu.classList.remove("menu-fechado")

    //mostra o icone x
    iconex.style.display ="inline"

    //esconda o icone barras
    iconebarras.style.display ="none"
}
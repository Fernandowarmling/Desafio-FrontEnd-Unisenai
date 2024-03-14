console.clear()


const cordefundo = document.getElementById("body")
var cor = "#191970"
cordefundo.style.backgroundColor = cor


function progressivo() {

    console.log("Start Função");
    let inicial = 0
    let valorAlvo = 8250000
    let tempo = 2 * 1000
    let incremental = 100
    let limite = valorAlvo / incremental



    document.getElementById("progressivo").innerHTML = inicial;


    for (var i = 0; i < limite; i++) {
        /*console.log(i)*/
        setTimeout(function () {
            inicial = inicial + incremental
            /*console.log(inicial)*/
            /*console.log("limite " + limite)*/
            document.getElementById("progressivo").innerHTML = inicial;
        }, tempo)
    }
    ;
}




function trocaback() {



    console.log("Entou na função ")
    if (cor === "#191970") {

        cordefundo.style.transition = "background-color 1s";

        cor = "#000000"

        cordefundo.style.backgroundColor = cor;

    } else {
        cordefundo.style.transition = "background-color 1s";

        cor = "#191970"

        cordefundo.style.backgroundColor = cor;
    }


}




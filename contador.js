console.clear()

function progressivo() {
    console.log("Start Função");
    let inicial = 0
    let limite = 1000
    let incremental = 1
    document.getElementById("progressivo").innerHTML = inicial;
    setTimeout(function () {
        for (var i = 0; i < limite; i++) {
            inicial = inicial + 1
            console.log(inicial)
            document.getElementById("progressivo").innerHTML = inicial;
        }
    }, 1000);

    
    



}




progressivo()


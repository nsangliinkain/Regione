var regioni = {
    "Emilia-Romagna" :{
        "Parma" : ["Albareto", "Berceto", "Collecchio", "Felino", "Langhirano", "Montechiarugolo", "Noceto", "Parma", "Roccabianca", "San Secondo Parmense", "Sorbolo Mezzani", "Torrile"],
        "Piacenza" : ["Agazzano", "Bobbio", "Caorso", "Fiorenzuola", "Gropparello", "Morfasso", "Ottone", "Piacenza", "Rottofreno", "San Giorgio di Piacentino", "Travo", "Villanova", "Ziano Piacentino"], 
    }, 
    "Lombardia" : {
        "Milano" : ["Abbiategrasso", "Bresso", "Cesate", "Dresano", "Gorgonzola", "Lacchiarate", "Milano", "Melzo", "Noviglio", "Ozzero", "Pero", "Rosate", "Sesto San Giovanni", "Turbigo", "Vignate", "Zibido San Giacomo"], 
        "Brescia" : ["Acquafredda", "Brescia", "Casto", "Dello", "Edolo", "Ghedi", "Irma", "Losine", "Manerbio", "Nave", "Ome", "Pezzaze", "Rovato", "Serle", "Trenzano", "Vione", "Zone"]
    }
}

window.onload = function (){
    var regione = document.getElementById("reg");
    var provincia = document.getElementById("pro");
    var comune = document.getElementById("com");

    for (var x in regioni) {
        regione.options[regione.options.length] = new Option(x, x);
    }
    regione.onchange = function() {
        provincia.length = 1;
        comune.length = 1
        for (var y in regioni[this.value]) {
            pro.options[pro.options.length] = new Option(y, y);
        }
    }
    provincia.onchange = function() {
        comune.length = 1;
        var prov = regioni[regione.value][this.value];
        for (var i = 0; i < prov.length; i++) {
            comune.options[comune.options.length] = new Option(prov[i], prov[i]);
        }
    }
}
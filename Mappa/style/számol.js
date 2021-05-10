var kvaff = 0 ;
var arany = 0 ;
var eredmény = 0 ;
function számol() {
    

    kvaff = parseInt(document.getElementById("a").value);
    arany = parseInt(document.getElementById("b").value);
    if ( arany < 0 || kvaff < 0) {
        alert("Az érték nem lehet negatív")
        arany = 0 ;
        document.getElementById("b").value = 0;
        document.getElementById("a").value = 0;
        kvaff = 0 ;
    }
    if (arany > 1) {
        alert("Az aranycikeszt csak egyszer lehet elkapni.");
        arany = 1 ;
        document.getElementById("b").value = 1;
    }
    eredmény = 10*kvaff + 150*arany;
    document.getElementById("Össz").innerHTML = "Összesen: " + eredmény + " pont"

    
    console.log("kvaff=" + kvaff);  
    console.log("arany=" + arany);
    console.log("eredmény=" + eredmény);
   
}
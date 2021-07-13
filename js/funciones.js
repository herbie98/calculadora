function suma() {
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        //preparacion de la respuesta
        //si la respuesta es un 200 significa exito
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById("resultado").innerHTML = this.responseText;
        }
    };

    //preparacion de la peticion
    xhttp.open("POST", "operaciones.php", true);
    //esto se hace solo con post
    //& para concatenar 
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); //necesita hacer eso
    var cad = "btn=suma&n1=" + n1 + "&n2=" + n2;
    xhttp.send(cad);

}
function resta() {
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        //preparacion de la respuesta
        //si la respuesta es un 200 significa exito
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById("resultado").innerHTML = this.responseText;
        }
    };

    //preparacion de la peticion
    xhttp.open("POST", "operaciones.php", true);
    //esto se hace solo con post
    //& para concatenar 
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); //necesita hacer eso
    var cad = "btn=resta&n1=" + n1 + "&n2=" + n2;
    xhttp.send(cad);

}
function multiplica() {
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        //preparacion de la respuesta
        //si la respuesta es un 200 significa exito
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById("resultado").innerHTML = this.responseText;
        }
    };

    //preparacion de la peticion
    xhttp.open("POST", "operaciones.php", true);
    //esto se hace solo con post
    //& para concatenar 
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); //necesita hacer eso
    var cad = "btn=multiplica&n1=" + n1 + "&n2=" + n2;
    xhttp.send(cad);

}
function divide() {
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        //preparacion de la respuesta
        //si la respuesta es un 200 significa exito
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById("resultado").innerHTML = this.responseText;
        }
    };

    //preparacion de la peticion
    xhttp.open("POST", "operaciones.php", true);
    //esto se hace solo con post
    //& para concatenar 
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); //necesita hacer eso
    var cad = "btn=divide&n1=" + n1 + "&n2=" + n2;
    xhttp.send(cad);

}

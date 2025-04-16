function validacion() {
    var nombre = document.getElementById('nombre')
    if(nombre.value.length == 0 || !nombre.value.match(/^[A-Za-zÁÉÍÓÚáéíóú\s]+$/)){
        alert("El nombre debe contener solo letras y espacios")
        return false;
    }

    var apellido= document.getElementById('apellido')
    if(apellido.value.length == 0 || !apellido.value.match(/^[A-Za-zÁÉÍÓÚáéíóú\s]+$/)){
        alert("El apellido debe contener solo letras y espacios")
        return false;
    }

    var email=document.getElementById('email').value

    if( !(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) ) { 
        alert("El correo ingresado es incorrecto")
        return false
    }
    
    var fechaNacimiento = document.getElementById('fechaNacimiento').value;  // Obtenemos el valor de la fecha
    var hoy = new Date().toISOString().split("T")[0] // Obtenemos la fecha de hoy en formato yyyy-mm-dd

    // Comparar si la fecha de nacimiento es mayor que la fecha de hoy
    if (fechaNacimiento > hoy) {
        alert("La fecha ingresada es futura.")
        return false
    }

    var pais=document.getElementById('pais').value
    if(pais==""){
        alert("Por favor ingrese un pais")
        return false
    }

    return true
}
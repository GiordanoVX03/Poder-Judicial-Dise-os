function submitResult(e) {
    e.preventDefault();
    Swal.fire({
        title: 'Bienvenido',        
        timer: 5000,                       // Establece el tiempo de duracion
        html: '<b> Espere su turno </b>',
        showConfirmButton: false
        
    }).then(function (result){
        if(true){
            window.location = "../Especialidad/especialidad.html"; // Redirecciona a la interfaz cuando termina el temporizador
                                                                   // en mi caso la interfaz de especialidad lo tengo ubicado de 
                                                                   // esta manera ../Especialidad/especialidad.html
        }
    });
}
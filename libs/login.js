function autenticarme() {
    //event.preventDefault(); // Evitar que el formulario se envíe
    let spanmensaje = document.getElementById('mensaje');
    let email = document.getElementById('email'); //Para capturar elementos (email)
    let password = document.getElementById('password'); //Para capturar elementos (password)

    // Realizar consulta (GET)
    fetch('http://localhost:3000/admins').then(r => r.json()).then(d => {

        // Filtrar por email
        let resultado = d.filter(function(element) {
            return element.email === email.value;            
        })

        // validaciones
        if(resultado.length > 0){

            if(resultado[0].password === password.value){
                // Inicio de variables a niver de local Storage
                localStorage.setItem('admin', JSON.stringify(resultado));
                location.href = './admin/index.html';
            }else{
                spanmensaje.innerText = 'Correo o contraseña incorrecta';
                spanmensaje.style.color = 'red';
                console.error('Correo o contraseña incorrecta');
            }            
        }else{
            spanmensaje.innerText = 'No hay coincidencias';
            spanmensaje.style.color = 'red';
            console.log('No hay coincidencias');
        }
    })

}


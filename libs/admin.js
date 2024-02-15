function createAdmin() {
    let  password = 'password';
    let imputemail = document.getElementById('email').value;
    let evaluador = false;

    fetch('http://localhost:3000/admins').then(r => r.json()).then(d => {
        let result = d.filter(item => {
            return item.email === imputemail      
        })

        if(result.length > 0){
            let spanmensaje = document.getElementById('mensaje');

            spanmensaje.innerText = 'El Usuario ya esta registrado';
            spanmensaje.style.color = 'red';
            console.log('El Usuario ya esta registrado');   
            
            // Mostrar el modal si el usuario ya está registrado
            let myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
            myModal.show();

        }else{
            
            let new_admin = {
                "name" : document.getElementById('name').value,
                "email" : document.getElementById('email').value,
                "pasword" : password,
            }

            fetch('http://localhost:3000/admins',{
                method: 'POST',
                headers : {
                    "Content-Type" : "application/json"  
                },
                body : JSON.stringify(new_admin)

            }).then(r => r.json()).then(d => {
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                location.reload();    
            })   

        }
    
    })  
 
}

function listarAdmin() {
    let listAdmin =  document.getElementById('listarAdmin');
    let template = ""; // Para agregar HTML

    fetch('http://localhost:3000/admins').then(r => r.json()).then(d => {
        d.forEach(element  => {
            template+= `
            <tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.email}</td>
                <td>
                    <button class="btn btn-sm btn-primary" data-bs-toggle="modal"  data-bs-target="#exampleModalEdit" onclick="buscar('${element.id}')")>Detalle</button>
                    <button class="btn btn-sm btn-warning" data-bs-toggle="modal"  data-bs-target="#exampleModalEdit" onclick="buscar('${element.id}')")>Editar</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteAdmin('${element.id}')">Eliminar</button>
                 </td>
            </tr>
            `;  
            listAdmin.innerHTML = template;        
        });    
})
}

listarAdmin() 

function deleteAdmin(id) {
    fetch('http://localhost:3000/admins/' + id,{
        method: 'DELETE',
        headers : {
            "Content-Type" : "application/json"  
        },
    }).then(r => r.json()).then(d => {
        location.reload();
    })    
}

function buscar(id) {
    fetch('http://localhost:3000/admins/' + id).then(r => r.json()).then(d => {
        let name = document.getElementById('updateName');
        let email = document.getElementById('updateEmail');     
        
        localStorage.setItem('id', d.id)

        name.value = d.name;
        email.value = d.email;

        console.log(d);
        
    })
}

function updateAdmin() {
    let id = localStorage.getItem('id');
    let update_admin = {
        "name" : document.getElementById('updateName').value,
        "email" : document.getElementById('updateEmail').value,
    }

    fetch('http://localhost:3000/admins/' + id, {
        method: 'PUT',
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(update_admin)
    }).then(r => r.json()).then(d => {
        location.reload();
    })
}




function createPqrs() {
    let new_admin = {
        "pqrs" : document.getElementById('tipoPqrs').value,
        "email" : document.getElementById('email').value,
        "texto" : document.getElementById('texto').value,
        
    }

    fetch('http://localhost:3000/pqrs',{
        method: 'POST',
        headers : {
            "Content-Type" : "application/json"  
        },
        body : JSON.stringify(new_admin)

    }).then(r => r.json()).then(d => {
        document.getElementById('tipoPqrs').value = '';
        document.getElementById('email').value = '';
        document.getElementById('texto').value = '';
        location.reload();    
    })    
}

function listarPqrs() {
    let listarPqrs =  document.getElementById('listarPqrs');
    let template = ""; // Para agregar HTML

    fetch('http://localhost:3000/pqrs').then(r => r.json()).then(d => {
        d.forEach(element  => {
            template+= `
            <tr>                                                        
                <td>${element.id}</td>
                <td>${element.pqrs}</td>
                <td>${element.email}</td>
                <td>${element.texto}</td>
                <td>
                    <button class="btn btn-sm btn-danger" onclick="deletePqrs('${element.id}')">Eliminar</button>
                </td>
            </tr>
            `;  
            listarPqrs.innerHTML = template;        
        });    
})
}

listarPqrs() 

function deletePqrs(id) {
    fetch('http://localhost:3000/pqrs/' + id,{
        method: 'DELETE',
        headers : {
            "Content-Type" : "application/json"  
        },
    }).then(r => r.json()).then(d => {
        location.reload();
    })    
}
function createBranch() {
    let  horario = 'Lunes - sábado: 10:00 a.m. - 7:00 p.m. Domingos y festivos: 10:00 a.m. - 6:00 p.m.';

    let new_admin = {
        "imgLogo" : document.getElementById('imgLogo').value,
        "name" : document.getElementById('name').value,
        "local" : document.getElementById('local').value,
        "piso" : document.getElementById('piso').value,
        "horario" : horario,
        "web" : document.getElementById('web').value,
        
    }

    fetch('http://localhost:3000/brands',{
        method: 'POST',
        headers : {
            "Content-Type" : "application/json"  
        },
        body : JSON.stringify(new_admin)

    }).then(r => r.json()).then(d => {
        document.getElementById('imgLogo').value = '';
        document.getElementById('name').value = '';
        document.getElementById('local').value = '';
        document.getElementById('piso').value = '';
        document.getElementById('web').value = '';
        location.reload();    
    })    
}

function listarBranch() {
    let listarBranch =  document.getElementById('listarBranch');
    let template = ""; // Para agregar HTML

    fetch('http://localhost:3000/brands').then(r => r.json()).then(d => {
        d.forEach(element  => {
            template+= `
            <tr>
                                                        
            <td>${element.id}</td>
            <td><img width="100px" src="./../../assets/images/${element.imgLogo}" alt="./../../assets/images/${element.imgLogo}"></td>
            <td>${element.name}</td>
            <td>${element.local}</td>
            <td>${element.piso}</td>
            <td>
                Lunes - sábado: 10:00 a.m. - 7:00 p.m.  <br>
                Domingos y festivos: 10:00 a.m. - 6:00 p.m.
            </td>
            <td>
                <a href="${element.web}">Sitio web</a>
            </td>
            <td>
                <button class="btn btn-sm btn-primary" data-bs-toggle="modal"  data-bs-target="#exampleModalEdit" onclick="buscarBranch('${element.id}')")>Detalle</button>
                <button class="btn btn-sm btn-warning" data-bs-toggle="modal"  data-bs-target="#exampleModalEdit" onclick="buscarBranch('${element.id}')")>Editar</button>
                <button class="btn btn-sm btn-danger" onclick="deleteBrach('${element.id}')">Eliminar</button>
            </td>
        </tr>
            `;  
            listarBranch.innerHTML = template;        
        });    
})
}

function deleteBrach(id) {
    fetch('http://localhost:3000/brands/' + id,{
        method: 'DELETE',
        headers : {
            "Content-Type" : "application/json"  
        },
    }).then(r => r.json()).then(d => {
        location.reload();
    })    
}

listarBranch() 

function buscarBranch(id) {
    fetch('http://localhost:3000/brands/' + id).then(r => r.json()).then(d => {
        let logo = document.getElementById('img');
        let name = document.getElementById('name2');     
        let local = document.getElementById('local2');     
        let piso = document.getElementById('piso2');     
        let web = document.getElementById('web2');     
        
        localStorage.setItem('id', d.id)

        logo.setAttribute('src',`./../../assets/images/${d.imgLogo}`);
        logo.setAttribute('alt',`./../../assets/images/${d.imgLogo}`);
        name.value = d.name;
        local.value = d.local;
        piso.value = d.piso;
        web.value = d.web;

        console.log(d);
        
    })
}

function updateBranch() {
    let id = localStorage.getItem('id');
    let update_admin = {
        "name" : document.getElementById('updateName').value,
        "email" : document.getElementById('updateEmail').value,
    }

    fetch('http://localhost:3000/brands/' + id, {
        method: 'PUT',
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(update_admin)
    }).then(r => r.json()).then(d => {
        location.reload();
    })
}
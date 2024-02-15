function administrador() {
    fetch('http://localhost:3000/admins').then(r => r.json()).then(d => {
        let admin = document.getElementById('administrador');
        admin.innerHTML = d.length;
        console.log(d.length);
    })    
}
administrador()

function marcas() {
    fetch('http://localhost:3000/brands').then(r => r.json()).then(d => {
        let marcas = document.getElementById('mar');
        marcas.innerHTML = d.length;
        console.log(d.length);
    })    
}
marcas()

function pqrs() {
    fetch('http://localhost:3000/pqrs').then(r => r.json()).then(d => {
        let pq = document.getElementById('pq');
        pq.innerHTML = d.length;
        console.log(d.length);
    })    
}
pqrs()

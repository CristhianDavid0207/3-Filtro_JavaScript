function listarHome() {
    let divlistr =  document.getElementById('listarHome');
    let template = ""; // Para agregar HTML
    fetch('http://localhost:3000/brands').then(r => r.json()).then(d => {
        d.forEach(element  => {
            template+= `
            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" >
                <div class="icon-box" data-aos="fade-up" data-aos-delay="100" id="listarHome">
                    <img src="./assets/images/${element.imgLogo}" alt="./../../assets/images/${element.imgLogo} class="img-fluid" alt="">
                    <h4 class="title"><a href="">${element.name}</a></h4>
                    <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                    <br>
                    <button class="btn btn-primary w-100 btn-sm">Detalles</button>
                </div>
            </div>
            `;  
            divlistr.innerHTML = template;        
        });    
})
}

listarHome()

let imputBuscar = document.getElementById('imputBuscar');
imputBuscar.addEventListener('keyup', function buscardo(event) {
    let captura = '';
    captura += event.key;

    let divlistr =  document.getElementById('listarHome');
    let template = ""; // Para agregar HTML
    divlistr.innerHTML = '';
    fetch('http://localhost:3000/brands').then(r => r.json()).then(d => {
        let resultado = d.filter(item => {
            return item.name.includes(captura)            
        })

        resultado.forEach(element  => {
            console.log(element);
            template+= `
            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" >
                <div class="icon-box" data-aos="fade-up" data-aos-delay="100" id="listarHome">
                    <img src="./assets/images/${element.imgLogo}" alt="./../../assets/images/${element.imgLogo} class="img-fluid" alt="">
                    <h4 class="title"><a href="">${element.name}</a></h4>
                    <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                    <br>
                    <button class="btn btn-primary w-100 btn-sm">Detalles</button>
                </div>
            </div>
            `;  
            divlistr.innerHTML = template;        
        });  

        console.log(resultado);
    });  
    

})



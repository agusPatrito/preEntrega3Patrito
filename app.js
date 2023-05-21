class Usuario{
    constructor(nombreUsuario, contraseña){

    this.nombreUsuario = nombreUsuario;
    this.contraseña = contraseña;
    }
}

const usuariosRegistrados = [];




const form = document.getElementById('nuevaCuenta');
const nuevoNombreinput = document.getElementsByClassName('nuevoNombre');
const nuevaContrainput = document.getElementsByClassName('nuevaContra');



form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nuevoNombre = nuevoNombreinput.value;
    const nuevaContra = nuevaContrainput.value;

    const nuevoUsuario = new Usuario(nuevoNombre, nuevaContra);


    usuariosRegistrados.push(nuevoUsuario);


    localStorage.setItem('usuariosRegistrados', JSON.stringify(usuariosRegistrados));


})





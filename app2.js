class Usuarios{
    constructor(usuario, contraseña){
        this.usuario = usuario;
        this.contraseña = contraseña;
    }
}

const listaUsuarios = [];


function iniciarSesion(){
    const usuario1 = document.getElementById('usuarioInput').value;
    const contra1 = document.getElementById('contraInput').value;

    let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios')) || [];

    let usuarioEncontrado = listaUsuarios.find((usuario)=>{
        return usuario.usuario === usuario1 && usuario.contraseña === contra1;
    })

    if (usuarioEncontrado){
        alert('BIENVENIDO');

    }else{
        alert('LOGIN INCORRECTO');
    }

}

document.getElementById('inicioSesion').addEventListener('submit', (e)=>{
    e.preventDefault();
    iniciarSesion();
});

function crearUsuario(){
    const nuevoUsuario = document.getElementById('nuevoNombre').value;
    const nuevaContra = document.getElementById('nuevaContra').value;

    if(nuevoUsuario == '' || nuevaContra == ''){
        alert('NO INGRESASTE CORRECTAMENTE LOS DATOS.');
    } else{
        let usuarioNuevo = new Usuarios(nuevoUsuario, nuevaContra);

        listaUsuarios.push(usuarioNuevo);

        localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));

        alert('USUARIO CREADO CORRECTAMENTE.');
    }


}
document.getElementById('nuevaCuenta').addEventListener('submit', (e)=>{
    e.preventDefault();
    crearUsuario();
});











    
    
   






// --------------------------- Acordeon ---------------------------


const funcionAcordeon = (p1, p2, p3) => {

    const activador = document.getElementById(p1)
    const modulo = document.getElementById(p2)
    const icon_desplegable = document.getElementById(p3)

    activador.addEventListener('click', function () {
        modulo.classList.toggle('oculto')
        icon_desplegable.classList.toggle('activo')
    })
}

for (let i = 1; i <= 7; i++) {
    valorActivador = 'activador' + i.toString()
    valorModulo = 'modulo' + i.toString()
    valorDesplegable = 'icon_despliegue' + i.toString()
    funcionAcordeon(valorActivador, valorModulo, valorDesplegable)
}

//------------------SideBar------------------------------------------
const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeText = body.querySelector(".mode-text");


toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})


//------------------------- Color Actual --------------------------------
//Atributos
var ModuloActual = document.getElementById("ModuloActual");
var valorModulo = (ModuloActual.innerHTML);

Rol = valorModulo
fondo = Rol
texto = fondo + '_text'
icon = fondo + '_icon'
// Fondo
const Funcionfondo = document.getElementById(fondo)
Funcionfondo.classList.add('actual')
//Texto
const Funciontexto = document.getElementById(texto)
Funciontexto.classList.add('actual')
//Icono
const Funcionicono = document.getElementById(icon)
Funcionicono.classList.add('actual')

// SubFuncionActual color -------------------------

var SubModuloActual = document.getElementById("SubModuloActual");
var valorSubModuloActual = (SubModuloActual.innerHTML);

let subRol = valorSubModuloActual + '_' + Rol
let subfondo = subRol
let subtext = subRol + '_text'
let subicon = subRol + '_icon'

if (valorSubModuloActual.length != 0) {

    var FuncionSubFondo = document.getElementById(subRol)
    FuncionSubFondo.classList.add('actual')

    //Icono
    const FuncionSubIcono = document.getElementById(subicon)
    FuncionSubIcono.classList.add('actual')

    //Texto
    const FuncionSubTexto = document.getElementById(subtext)
    FuncionSubTexto.classList.add('actual')
}
//SubFondo



// --- Titulo Header -------------------------------

const PrimeraMayus = (palabra) => {
    var primerMayus = palabra.charAt(0).toUpperCase();
    var todoMayus = primerMayus + palabra.slice(1);

    return todoMayus;
}

var tituloHeader = PrimeraMayus(valorSubModuloActual) + " " + PrimeraMayus(Rol)
var titulo = document.getElementById('titulo').innerHTML = tituloHeader


// Animacion cambio de pagina --------------------

window.addEventListener("beforeunload", function () {
    document.body.classList.add("animate-out-ov");
});

console.log("FIN JS")




//----------------------------- ALERTAS COMPRAS ------------------------------------------------

if (valorSubModuloActual != 'Inicio') {
 
    const RegistrarCompra = () => {
        const select1 = document.getElementById('select1').value;
        const select2 = document.getElementById("select2").value;
        const select3 = document.getElementById("select3").value;
        const select4 = document.getElementById("select4").value;
        //const select5 = document.getElementById("select5").value;
        // const select6 = document.getElementById("select6").value;
        
        const input1 = document.getElementById('input1').value.length;
        const input2 = document.getElementById('input2').value.length;
        // const input3 = document.getElementById('input3').value.length;
        // const input4 = document.getElementById('input4').value.length;
        requisitos = 0

        if(select1 == 0 || select2 == 0 || select3 == 0 ||select4 == 0 || input1 == 0 || input2 == 0){
        requisitos = 1
        }
        
        if (requisitos) {
            Swal.fire({
                title: "Campos vacios",
                text: "Por favor rellene todos los campos",
                icon: "warning",
                confirmButtonColor: '#118dd5',
            })
        } else {
            Swal.fire({
                //Contenido de la alerta 
                title: "Registro exitoso",
                text: "Se ha registrado una venta",
                icon: "success",
                confirmButtonText: "Cofirmar",
                timer: 5000,
                timerProgressBar: true,
                // Estilos de las alertas (Botones)
                showConfirmButton: false,
                confirmButtonColor: '#118dd5',
                confirmButtonAriaLabel: 'Confirmar',
            })
            // customClass: {} Añadir clases del css a la alerta
        }
    }
    
    const botonVenta = document.querySelector('#comprar');
    botonVenta.addEventListener('click', RegistrarCompra);
    
    
    function AlertaEliminacion (){
        Swal.fire({
            title: '¿Estas seguro?',
            text: "¿Seguro que desea eleminar este registro?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: 'Eliminado!',
                text: 'Se ha eliminado este registro',
                confirmButtonColor: '#118dd5',
              })
            }
          })
    }
}













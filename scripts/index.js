// ESTUDIOS 
// const despliegueTarjetaEstudio = document.getElementById("descripcion-estudios" + n );
const btonForm = document.getElementById("bton-form")

btonForm.addEventListener("click",function(e){
    e.preventDefault();
} )

function ver(n) {
    document.getElementById("descripcion-estudios"+n).style.display="flex"
    }
function ocultar(n) {
    document.getElementById("descripcion-estudios"+n).style.display="none"
    }
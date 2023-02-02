// ESTUDIOS 
const despliegueTarjetaEstudio = document.getElementById("descripcion-estudios");
const btonForm = document.getElementById("bton-form")
console.log(btonForm)
function despliegueTarjeta(){
    despliegueTarjetaEstudio.style.display= "flex";
}

btonForm.addEventListener("click",function(e){
    e.preventDefault();
} )


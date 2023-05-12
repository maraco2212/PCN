/* const checkbox = document.querySelector('.my-form input[type="checkbox"]');
const btns = document.querySelectorAll(".my-form button");

checkbox.addEventListener("change", function() {
  const checked = this.checked;
  for (const btn of btns) {
    checked ? (btn.disabled = false) : (btn.disabled = true);
  }
}); */
(function() {
  var formulario = document.getElementById("btn");
  elementos = formulario.elements,
  boton = document.getElementById('btn');

  var validarNombre = function(e){
    if(formulario.nombre.value == 0){
      alert("Completa el campo Nombre y Apellido")
      e.preventDefault(e);

    }

  };

  var validar = function(){
    validarNombre();
  }


})
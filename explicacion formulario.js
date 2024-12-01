
document.addEventListener('.registro', function () {  // Espera a que el contenido del DOM esté completamente cargado antes de ejecutar el código
  
  
  const nameInput = document.getElementById('.text'); // Campo de entrada para el nombre
  const emailInput = document.getElementById('.email'); // Campo de entrada para el correo electrónico
  const messageInput = document.getElementById('.employment'); // Campo de entrada para el mensaje
  const submitButton = document.querySelector('.botonFormulario'); // Botón de enviar
  const form = document.getElementById('.formulario'); // Formulario completo

 
  function checkFormFields() { // Comprueba si los campos de entrada no están vacíos
    if (
      nameInput.value.trim() !== "" && // Verifica que el nombre no esté vacío
      emailInput.value.trim() !== "" && // Verifica que el correo no esté vacío
      messageInput.value.trim() !== "" // Verifica que el mensaje no esté vacío
    ) {
      submitButton.disabled = false; // Habilita el botón si todos los campos están completos
    } else {
      submitButton.disabled = true; // Deshabilita el botón si algún campo está vacío
    }
  }

  submitButton.disabled = true;  // Añade un evento de escucha para detectar cambios en los campos de entrada

 
  nameInput.addEventListener("input", checkFormFields); // Detecta cambios en el campo de nombre
  emailInput.addEventListener("input", checkFormFields); // Detecta cambios en el campo de correo
  messageInput.addEventListener("input", checkFormFields); // Detecta cambios en el campo de mensaje

  // Maneja el evento de envío del formulario
  form.addEventListener('.botonFormulario', function (event) {
    event.preventDefault(); // Evita que la página se recargue al enviar el formulario
    alert("Formulario enviado correctamente"); // Muestra un mensaje de éxito
    form.reset(); // Limpia los campos del formulario
    submitButton.disabled = true; // Deshabilita el botón nuevamente después de enviar
  });
});

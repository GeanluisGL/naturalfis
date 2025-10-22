// Funcionalidad del formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Obtener los valores del formulario
      const nombre = document.getElementById('nombre').value.trim();
      const telefono = document.getElementById('telefono').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();
      
      // Validar que los campos no estén vacíos
      if (!nombre || !telefono || !mensaje) {
        alert('Por favor, completa todos los campos');
        return;
      }
      
      // Crear el mensaje para WhatsApp
      const textoWhatsApp = `Hola, mi nombre es ${nombre}%0A%0AMi teléfono es: ${telefono}%0A%0AMensaje: ${mensaje}`;
      
      // Crear la URL completa de WhatsApp
      const urlWhatsApp = `https://api.whatsapp.com/send?phone=18495773789&text=${textoWhatsApp}`;
      
      // Abrir WhatsApp en una nueva ventana
      window.open(urlWhatsApp, '_blank');
      
      // Limpiar el formulario después de enviar
      contactForm.reset();
    });
  }
});
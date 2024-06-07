function calculateAge() {
    var birthDate = new Date(document.getElementById('birthDate').value);
    var currentDate = new Date();
  
    var years = currentDate.getFullYear() - birthDate.getFullYear();
    var months = currentDate.getMonth() - birthDate.getMonth();
    var days = currentDate.getDate() - birthDate.getDate();
  
    // Ajuste para asegurarse de que el cálculo de meses y días sea correcto
    if (days < 0) {
      months--;
      var lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, birthDate.getDate());
      days = Math.floor((currentDate - lastMonth) / (1000 * 60 * 60 * 24));
    }
  
    if (months < 0) {
      years--;
      months += 12;
    }
  
    var ageString = '';
  
    if (years > 0) {
      ageString += years + ' años<br>';
    }
  
    if (months > 0) {
      ageString += months + ' meses<br>';
    }
  
    if (days > 0) {
      ageString += days + ' días<br>';
    }
  
    if (years === 0 && months === 0 && days === 0) {
      ageString = 'Recién nacido';
    }
  
    document.getElementById('result').innerHTML = 'Tu edad es:<br>' + ageString;
  
    // Mostrar el botón "Nueva Búsqueda" solo después de calcular la edad
    document.getElementById('newSearchBtn').style.display = 'block';
  }
  
  function resetForm() {
    document.getElementById('birthDate').value = ''; // Limpiar el campo de fecha
    document.getElementById('result').innerHTML = ''; // Limpiar el resultado
    document.getElementById('newSearchBtn').style.display = 'none'; // Ocultar el botón "Nueva Búsqueda" nuevamente
  }
  
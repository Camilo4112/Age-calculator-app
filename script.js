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

  // Mostrar el meme adecuado según la edad
  var meme = document.getElementById('meme');
  var memeImage = meme.querySelector('img');

  if (years >= 17 && years <= 19) {
    memeImage.src = 'img/mayor_de_edad.jpg'; // Cambia la ruta a la imagen correspondiente
  } else if (years >= 20 && years <= 26) {
    memeImage.src = 'img/meme_de_los_23.jpg'; // Cambia la ruta a la imagen correspondiente
  } else if (years >= 27 && years <= 33) {
    memeImage.src = 'img/marce.jpg'; // Cambia la ruta a la imagen correspondiente
  } else if (years >= 34 && years <= 40) {
    memeImage.src = 'img/los_40.jpg'; // Cambia la ruta a la imagen correspondiente
  } else {
    memeImage.src = 'img/fiesta.jpg'; // Si no se cumple ninguna condición, mostrar la imagen de fiesta
  }

  // Mostrar el botón "Nueva Búsqueda" solo después de calcular la edad
  document.getElementById('newSearchBtn').style.display = 'block';
  // Mostrar la imagen del meme solo si hay una imagen seleccionada
  meme.style.display = memeImage.src ? 'block' : 'none';
}

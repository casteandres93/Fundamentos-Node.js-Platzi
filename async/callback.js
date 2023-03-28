console.log('Iniciando proceso...');

function soyAsincrono(callback) {
  console.log("Asigno setTimeout para volver asincrona una función como esta misma: \n " + soyAsincrono);
  setTimeout(function() {
    console.log("Pasaron 3 segundos y me ejecuté");
    callback();
  }, 3000);
}

soyAsincrono(function() {
  console.log("Después de esto demuestro que soy el primer callback");
});

function hola(nombre, callback) {
  setTimeout(function() {
    console.log('Hola, ' + nombre);
    callback(nombre);
  }, 1500);
}

function adios(nombre, callback) {
  setTimeout(function() {
    console.log('Adiós, ' + nombre);
    callback();
  }, 5000);
}

hola('Andres', function(nombre) {
  adios(nombre, function() {
    console.log('Terminando proceso...');
  });
});

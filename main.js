const biblioteca = [
    { titulo: 'Libro 1', autor: 'Autor 1', disponible: true },
    { titulo: 'Libro 2', autor: 'Autor 2', disponible: true },
    { titulo: 'Libro 3', autor: 'Autor 3', disponible: false },
    { titulo: 'Libro 4', autor: 'Autor 4', disponible: true },
    { titulo: 'Libro 5', autor: 'Autor 5', disponible: true },
    { titulo: 'Libro 6', autor: 'Autor 6', disponible: false },
    { titulo: 'Libro 7', autor: 'Autor 7', disponible: true },
    { titulo: 'Libro 8', autor: 'Autor 8', disponible: true }
  ];
  
  const usuarios = [
    { nombre: 'Usuario 1', librosPrestados: [] },
    { nombre: 'Usuario 2', librosPrestados: [] },
    { nombre: 'Usuario 3', librosPrestados: [] }
  ];
  
  console.log('¡Bienvenido a la biblioteca virtual de Conrado!');
  
  let nombreUsuario; // Variable para almacenar el nombre 
  
  nombreUsuario = prompt('Por favor, ingresa tu nombre de usuario: (ejemplo: usuario 1,2,3) ').trim().toLowerCase();
  
  let opcion;
  
  do {
    console.log('\nOpciones disponibles:');
    console.log('1. Buscar un libro');
    console.log('2. Ver lista de libros disponibles');
    console.log('3. Prestar un libro');
    console.log('4. Salir');
  
    opcion = parseInt(prompt('Selecciona una opción:'));
  
    switch (opcion) {
      case 1:
        buscarLibro();
        break;
  
      case 2:
        mostrarLibrosDisponibles();
        break;
  
      case 3:
        prestarLibro();
        break;
  
      case 4:
        console.log('¡Gracias por visitar la Biblioteca de Conrado!');
        break;
  
      default:
        console.log('Opción no válida. Por favor, selecciona una opción válida.');
    }
  } while (opcion !== 4);
  
  function buscarLibro() {
    const busqueda = prompt('Ingresa el título del libro que deseas buscar: (ejemplo: libro n)');
    let libroEncontrado = null;
  
    for (let i = 0; i < biblioteca.length; i++) {
      if (biblioteca[i].titulo.toLowerCase() === busqueda.toLowerCase()) {
        libroEncontrado = biblioteca[i];
        break;
      }
    }
  
    if (libroEncontrado) {
      if (libroEncontrado.disponible) {
        console.log("El libro '" + libroEncontrado.titulo + "' está disponible. Puedes llevártelo.");
      } else {
        console.log("Lo siento, el libro '" + libroEncontrado.titulo + "' no está disponible en este momento.");
      }
    } else {
      console.log("Lo siento, no encontramos el libro '" + busqueda + "' en la biblioteca.");
    }
  }
  
  function mostrarLibrosDisponibles() {
    console.log('\nLista de libros disponibles:');
    for (let i = 0; i < biblioteca.length; i++) {
      const libro = biblioteca[i];
      if (libro.disponible) {
        console.log('- ' + libro.titulo + ' por ' + libro.autor);
      }
    }
  }
  
  function prestarLibro() {
    const libroPrestado = prompt('Ingresa el título del libro que deseas tomar prestado:');
  
    const usuario = buscarUsuario(nombreUsuario);
    const libro = buscarLibroPorTitulo(libroPrestado);
  
    if (!usuario) {
      console.log('Usuario no encontrado. Verifica el nombre de usuario.');
    } else if (!libro) {
      console.log('Libro no encontrado. Verifica el título del libro.');
    } else if (!libro.disponible) {
      console.log(`Lo siento, el libro '${libro.titulo}' no está disponible en este momento.`);
    } else if (usuario.librosPrestados.length > 0) {
      console.log(`Lo siento, ${usuario.nombre}, ya tienes un libro prestado. Devuélvelo antes de tomar otro.`);
    } else {
      usuario.librosPrestados.push(libro);
      libro.disponible = false;
      console.log(`¡Felicidades, ${usuario.nombre}! Has tomado prestado el libro '${libro.titulo}'.`);
    }
  }
  
  function buscarUsuario(nombreUsuario) {
    return usuarios.find(usuario => usuario.nombre === nombreUsuario);
  }
  
  function buscarLibroPorTitulo(tituloLibro) {
    return biblioteca.find(libro => libro.titulo.toLowerCase() === tituloLibro.toLowerCase());
  }
  
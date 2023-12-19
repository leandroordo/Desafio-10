//2- Crear un constructor de objetos Libro que reciba titulo y autor como parámetros
class Libro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
  }

  //Tener en cuenta que los puntos 3 y 4 tienen el mismo texto de salida. Evitar repetir código.
  toString() {
    return `${this.titulo}, de ${this.autor.toUpperCase()}`;

    //Si se decidiera cambiar el texto generado a este formato:
    return `Título: ${this.titulo}. - Autor: ${this.autor}`;
  }

  /*3 - Agregar en Libro el método mostrarDatosEnConsola() que imprima directamente en la consola
  el nombre del libro y el autor al que pertenece*/
  mostrarDatosEnConsola() {
    console.log(this.toString());
  }

  /*4 - Agregar en Libro el método mostrarDatosEnAlert()*/
  mostrarDatosEnAlert() {
    alert(this.toString());
  }

  /*5 - Agregar en Libro el método getTitulo() que retorne el título del libro.*/
  getTitulo() {
    return this.titulo;
  }

  /*6: Agregar en Libro un método mostrarDatos(), que reciba un parámetro*/
  mostrarDatos(where) {
    switch (where) {
      case "alert":
        this.mostrarDatosEnAlert();
        break;

      case "":
      case "console":
        this.mostrarDatosEnConsola();
        break;

      default:
        break;
    }
  }
}

function loguear(datos) {
  console.log(datos);
}

function Main() {
  let unLibro = new Libro("Ángeles y Demonios", "Dan Brown");
  loguear(unLibro);
  unLibro.mostrarDatosEnConsola();
  unLibro.mostrarDatosEnAlert();

  //El siguiente código no debería mostrarle nada al visitante ni en el DOM, consola, ni ningún otro lado:
  let nuevolibro = new Libro("Fuego y Sangre", "George R. R. Martin");
  let tituloDelNuevoLibro = nuevolibro.getTitulo();

  //Al agregarle la siguiente línea debería mostrar en una ventanita alert el título 'Fuego y Sangre':
  alert(tituloDelNuevoLibro);

  //Mostrar datos en una vantanita alert
  nuevolibro.mostrarDatos("alert");
  //Mostrar datos en la consola
  nuevolibro.mostrarDatos("console");
  //Mostrar datos en la consola
  nuevolibro.mostrarDatos("");
  //No mostrar nada
  nuevolibro.mostrarDatos("xxxx");
}

Main();

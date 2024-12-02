const assert = require('assert');

describe('Página Web', function () {
  it('debería contener "Hola Mundo"', function () {
    const contenido = '<h1>Hola Mundo soy Melvin Candelario!</h1>';
    assert(contenido.includes("Hola Mundo"));
  });
});

/*
Descripción: 
Verificar que al buscar un producto inexistente se muestre un mensaje de “Sin resultados”.

Resultado esperado: 
Que el sistema muestre un mensaje claro indicando que no se encontraron productos.
Que no se muestren tarjetas de producto ni opciones de compra.

Pasos a seguir:
- Ingrese a https://tienda.personal.com.ar/
- Escriba en la barra de búsqueda un producto inexistente (por ejemplo: “asdfgh”)
- Verifique que se muestre un mensaje como “Pagina sin resultados”.

*/

describe("Buscar producto inexistente", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // Ignorar errores de la app que no afectan el test
      return false;
    });
  });
  it("should show no results message", () => {
    cy.visit("https://tienda.personal.com.ar/");
    cy.get('input[placeholder="Buscar productos"]').type("test{enter}");

    // Verificar que aparezca mensaje de sin resultados
    cy.get('img[alt="Pagina sin resultados"]').should("be.visible");
  });
});

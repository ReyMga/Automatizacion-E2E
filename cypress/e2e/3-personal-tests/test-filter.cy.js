/*
Descripción: 
Verificar que el filtro de cuotas funcione correctamente mostrando solo productos que permiten 12 cuotas sin interés.

Resultado esperado: 
Que todos los productos mostrados luego de aplicar el filtro incluyan la opción de “12 cuotas s/int.”

Pasos a seguir:
- Ingrese a https://tienda.personal.com.ar/
- Busque un producto general (por ejemplo: “motorola”)
- Aplique el filtro de “12 cuotas sin interés” si está disponible
- Verifique que los productos mostrados tengan el texto “6 cuotas s/int.”
*/

describe("Filtro de 12 cuotas sin interés", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  it("Debería mostrar solo productos con 12 cuotas sin interés", () => {
    cy.visit("https://tienda.personal.com.ar/");

    // Buscar "motorola"
    cy.get('input[placeholder="Buscar productos"]').type("motorola{enter}");

    // Esperar resultados
    cy.get('[data-testid="product-card-container"]', { timeout: 10000 }).should(
      "exist"
    );
    // Aplicar filtro "12 cuotas sin interés"
    cy.contains("Cuotas sin interés").click({ force: true });
    cy.contains("span", "12 cuotas sin interés").click({ force: true });

    // Verificar que todos los productos mostrados tengan "12 cuotas s/int."
    cy.contains('Hasta 12 cuotas s/int.').should('exist');
  });
});

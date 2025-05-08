/*
Descripción:
Verificar que el botón “Comprar” esté deshabilitado si el producto está sin stock.

Resultado esperado:
Que el botón “Comprar” no esté disponible o esté deshabilitado.
Que no se permita iniciar el proceso de compra.

Pasos a seguir:
Ingrese a https://tienda.personal.com.ar
Busque un producto sin stock (por ejemplo: “Funda Silicona Samsung Galaxy S25 Ultra”)
Ingrese al detalle del producto
Verifique que el botón “Comprar” esté deshabilitado o no disponible
*/


describe('Comprobar botón de comprar', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
          // Ignorar errores de la app que no afectan el test
          return false;
        });
    });
    it('buy-button-disabled', () => {
      cy.visit('https://tienda.personal.com.ar/');
      
      // Busque un producto sin stock (por ejemplo: “Funda Silicona Samsung Galaxy S25 Ultra”)
      cy.get('input[placeholder="Buscar productos"]')
      .type('Funda Silicona Samsung Galaxy S25 Ultra{enter}');
      
      // Ingrese al detalle del producto
      cy.get('[data-testid="product-card-container"]').first().click();
      
      // Verifique que el botón “Comprar” esté deshabilitado o no disponible
      cy.contains(/comprar/i).should('be.disabled');
    });
  });
  
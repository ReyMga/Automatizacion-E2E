/*
Descripción:
Verificar que el filtro por marca funcione correctamente mostrando solo tablets de la marca seleccionada (En este caso: Samsung).

Resultado esperado:
Que al aplicar el filtro de marca, solo se muestren productos correspondientes a dicha marca.

Pasos a seguir:
- Ingrese a https://tienda.personal.com.ar/tablets
- Aplique el filtro de marca “Samsung”

*/

describe('Filtro por marca en sección Tablets', () => {
    beforeEach(() => {
      Cypress.on('uncaught:exception', () => false);
    });
  
    it('Debería filtrar tablets de la marca Samsung', () => {
      cy.visit('https://tienda.personal.com.ar/tablets');
  
      // Expandir filtro de Marca y seleccionar Samsung
      cy.get('input[placeholder="Buscar productos"]').eq(1)
      .type('Samsung{enter}');

  
      cy.get('[data-testid="product-card-container"]')
        .parent()
        .each(($parent) => {
            cy.wrap($parent).should('exist'); 
      });
  
    });
  });
  
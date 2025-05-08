/*
Descripcion: 
Se va a comprar el Edge 40 más barato en tienda.personal.com.ar

Resultado esperado: 
Que el producto incluya accesorios, 
Que se pueda pagar en 6 cuotas sin interes
Que al presionar comprar se redirija al formulario de datos personales.

Pasos a seguir:
- Ingrese a https://tienda.personal.com.ar/
- Busque el Edge 40
- Ordenar por más barato
- Verificar que el más barato tenga el texto 'Incluye accesorios'
- Verificar que además se pueda pagar en 6 cuotas sin interes
- Presionar comprar y verificar que redirige al formulario de datos personales.
*/

describe('Compra Edge 40 más barato - Personal', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
          // Ignorar errores de la app que no afectan el test
          return false;
        });
    });

    it('Debería verificar que incluye accesorios, se puede pagar en 6 cuotas y redirige al formulario', () => {
      // Paso 1: Ingresar al sitio
      cy.visit('https://tienda.personal.com.ar/');

      // Paso 2: Buscar "Edge 40"
      cy.get('input[placeholder="Buscar productos"]')
        .type('Edge 40{enter}');
      
      // Paso 3: Esperar a que cargue y ordenar por más barato
      cy.contains('Recomendado').click();
      cy.contains('Menor precio').click();
      
      // Paso 4: Esperar resultados y seleccionar el primer producto
      cy.get('[data-testid="product-card-container"]', { timeout: 10000 }).first().within(() => {
        // Verificar que tenga "Incluye accesorios"
        cy.contains('Incluye accesorios').should('exist');
  
        // Verificar que tenga 6 cuotas sin interés
        cy.contains('6 cuotas s/int.').should('exist');
      });

      cy.get('[data-testid="product-card-container"]').first().click();
      cy.contains(/Comprar/i).click();
      cy.contains(/Iniciar Compra/i).click();
  
      // Paso 5: Verificar que redirige al formulario de datos personales
      cy.contains(/Ingresá tu DNI para continuar/i, { timeout: 1000 }).should('exist');
      
    });
  });
  
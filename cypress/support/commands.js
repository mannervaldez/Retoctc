// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

function escribirSiNoVacio(selector, valor) {
    if (valor) {
        cy.contains('label', selector).next('input, textarea').type(valor);
    }
}


Cypress.Commands.add('crearTarea', (task) => {
    // Llena los campos solo si no se esta pasando como valor un dato vacio
    const {titulo, descripcion, fecha, ubicacion, responsable} = task;

    cy.contains('Crear Tarea').click();
  
    escribirSiNoVacio('Título', titulo);
    escribirSiNoVacio('Descripción', descripcion);
    escribirSiNoVacio('Fecha', fecha);
    escribirSiNoVacio('Ubicación', ubicacion);
    escribirSiNoVacio('Responsable', responsable);
  
    cy.contains('button', 'Crear Tarea').click();
})

Cypress.Commands.add('noCrearTareaDatosFaltantes', (task) =>{
    const {titulo, descripcion, fecha, ubicacion, responsable} = task;
      cy.contains('Crear Tarea').click();
      escribirSiNoVacio('Título', titulo);
      escribirSiNoVacio('Descripción', descripcion);
      escribirSiNoVacio('Fecha', fecha);
      escribirSiNoVacio('Ubicación', ubicacion);
      escribirSiNoVacio('Responsable', responsable);
      cy.contains('button', 'Crear Tarea').click();

      cy.contains('Crear Nueva Tarea').should('be.visible');
      cy.get('form').should('be.visible');
})

Cypress.Commands.add('limpiarTareas', () => {
    cy.get('.container > .flex-wrap').each(($task) => {
        cy.wrap($task)
            .contains('button', 'Eliminar')
            .click();

        // Verificar que el elemento desapareció usando get
        // cy.get('.container > .flex-wrap').should('not.contain', $task.text());
    });
});


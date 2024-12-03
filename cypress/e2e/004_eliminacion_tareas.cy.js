import fixture from '../fixtures/vtc_vars.json';

describe('Las tareas pueden ser eliminadas', () => {

    beforeEach(() => {
        cy.visit(fixture.tasksURL);
      })
      
    it('Las tareas pueden ser eliminadas', () => {
      cy.limpiarTareas();
    })

})
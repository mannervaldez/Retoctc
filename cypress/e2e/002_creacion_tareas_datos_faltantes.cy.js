import fixture from '../fixtures/vtc_vars.json';


describe('CREACION DE TAREAS CON DATOS FALTANTES', () => {
  
  context('No permite datos faltantes', () => {

    beforeEach(() => {
      cy.visit(fixture.tasksURL);
    })


    it('No permite crear una tarea sin llenar el titulo', () => {
      cy.noCrearTareaDatosFaltantes(
        fixture.tasks.tituloFaltante
      )
    })

    it('No permite crear una tarea sin llenar el descripcion', () => {
      cy.noCrearTareaDatosFaltantes(
        fixture.tasks.descripcionFaltante
      )
    })

    it('No permite crear una tarea sin llenar la fecha', () => {
      cy.noCrearTareaDatosFaltantes(
       fixture.tasks.fechaFaltante
      )
    })

    it('No permite crear una tarea sin llenar la ubicacion', () => {
        cy.noCrearTareaDatosFaltantes(
        fixture.tasks.ubicacionFaltante
        )
    })

    it('No permite crear una tarea sin llenar el responsable', () => {
      cy.noCrearTareaDatosFaltantes(
        fixture.tasks.responsableFaltante
      )
    })

  })
})
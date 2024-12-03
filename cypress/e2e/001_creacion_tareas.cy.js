import fixture from '../fixtures/vtc_vars.json';

describe('CREACION DE TAREAS CTC', () => {
  
  context('Es posible crear tareas', () => {

    beforeEach(() => {
      cy.visit(fixture.tasksURL);
    })

    
    it( 'Limpiar las tareasa ', () => {
      cy.limpiarTareas();
    })

    it.only('La pagina es visible', () => {
      cy.contains('h1','Lista de Tareas').should('exist').and('be.visible');
      cy.contains('button', 'Crear Tarea').should('exist').and('be.visible');
    });

    it('Permite crear una tarea con todos los campos llenados', () => {
      cy.crearTarea(fixture.tasks.datosCorrectos);
      cy.contains(fixture.tasks.datosCorrectos.titulo).parent().as('tarea');
      cy.get('@tarea').should('exist');
    })

    it.only('Permite crear una tarea con datos duplicados a otra tarea existente', () => {
      cy.crearTarea(fixture.tasks.tareaDuplicada);
      cy.contains(fixture.tasks.tareaDuplicada.titulo).parent().as('tarea');
      cy.get('@tarea').should('exist');
    })


    it('Permite crear una tarea con caracteres especiales en los campos', () => {
      cy.crearTarea(fixture.tasks.caracteresEspeciales);
      cy.contains(fixture.tasks.caracteresEspeciales.titulo).parent().as('tarea');
      cy.get('@tarea').should('exist');
    })

    it('Permite crear una tarea solo con numeros en los campos', () => {
      cy.crearTarea(fixture.tasks.soloNumeros);
      cy.contains(fixture.tasks.soloNumeros.titulo).parent().as('tarea');
      cy.get('@tarea').should('exist');
    })

    it('Permite crear una tarea con formato de fecha incorrecto', () => {
     
      let task = fixture.tasks.fechaIncorrecta;
      cy.contains('Crear Tarea').click();
      cy.contains('Crear Nueva Tarea').should('be.visible');
      cy.contains('label', 'Título').next('input').type(task.titulo);
      cy.contains('label', 'Descripción').next('textarea').type(task.descripcion);

      cy.contains('label', 'Fecha')
      .next('input')
      .invoke('val', '25-12-2024') 
      .trigger('input');

      cy.contains('label', 'Ubicación').next('input').type(task.ubicacion);
      cy.contains('label', 'Responsable').next('input').type(task.responsable);
      cy.contains('button', 'Crear Tarea').click();
      cy.contains('Formato de fecha no válido').should('be.visible');
    })

    it('Permite crear una tarea con textos extremadamente largos', () => {
      cy.crearTarea(fixture.tasks.textoExtremadamenteLargo);
      cy.contains(fixture.tasks.textoExtremadamenteLargo.titulo).parent().as('tarea');
      cy.get('@tarea').should('exist');
    })

    it('Permite crear una tarea con fecha pasada', () => {
      cy.crearTarea(fixture.tasks.fechaPasada);
      cy.contains(fixture.tasks.fechaPasada.titulo).parent().as('tarea');
      cy.get('@tarea').should('exist');
    })

    it('Permite crear una tarea con datos alfanumericos y caracteres especiales', () => {
      cy.crearTarea(fixture.tasks.mixto);
      cy.contains(fixture.tasks.mixto.titulo).parent().as('tarea');
      cy.get('@tarea').should('exist');
    })

    it('Permite crear una tarea con titulo y descripcion identicas', () => {
      cy.crearTarea(fixture.tasks.tituloDescripcionIguales);
      cy.contains(fixture.tasks.tituloDescripcionIguales.titulo).parent().as('tarea');
      cy.get('@tarea').should('exist');
    })

    it('Permite crear una tarea con fecha futura lejana', () => {
      cy.crearTarea(fixture.tasks.fechaFuturaLejana);
      cy.contains(fixture.tasks.fechaFuturaLejana.titulo).parent().as('tarea');
      cy.get('@tarea').should('exist');
    })

    it('Permite crear una tarea con campos con emojis', () => {
      cy.crearTarea(fixture.tasks.emoji);
      cy.contains(fixture.tasks.emoji.titulo).parent().as('tarea');
      cy.get('@tarea').should('exist');
    })

  })

})
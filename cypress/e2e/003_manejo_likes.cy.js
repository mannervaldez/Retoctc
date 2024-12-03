import fixture from '../fixtures/vtc_vars.json';

describe('BOTON LIKES', () => {
  
  context('El boton de Like aumenta el contador' , () => {

    beforeEach(() => {
      cy.visit(fixture.tasksURL);
    })

    it('El contador de likes se inicializa en 0', () => {
      let task = fixture.otrasTareas[0];
      cy.crearTarea(task);
      cy.contains(task.titulo).parent().as('tarea');
      cy.get('@tarea').contains('p', 'Likes:').should('have.text', 'Likes: 0');
      
    }) 

    it('El contador de likes acumula correctamente los likes dados', () => {
      let task = fixture.otrasTareas[0];

      cy.contains(task.titulo).parent().as('tarea');
      cy.get('@tarea').contains('p', 'Likes:').as('contadorLikes');
      cy.get('@contadorLikes')
        .invoke('text')
        .then((text) => {
          let numLikes = parseInt(text.split(': ')[1], 10); // Toma el int de likes actuales
          cy.get('@tarea').contains('button', 'Like').click();
          cy.get('@contadorLikes').should('have.text', `Likes: ${numLikes += 1}` );
        })      
    })

    it('Prueba endpoint likes', () => {
      let task = fixture.otrasTareas[0];
    
      // Paso 1: Obtener todas las tareas y encontrar el ID
      cy.request('GET', 'https://tasks--reto-rectnico-qa--gl72z942pjcn.code.run/api/tasks')
        .then((response) => {
          expect(response.status).to.eq(200);
          let allTasks = response.body;
          let currTask = allTasks.find((element) => element.title === task.titulo);
          expect(currTask).to.exist;
    
          let id = currTask.id;
          let initialLikes = currTask.likes;
    
          // Paso 2: Incrementar likes 5 veces
          for (let i = 1; i <= 5; i++) {
            cy.request('POST', `https://tasks--reto-rectnico-qa--gl72z942pjcn.code.run/api/tasks/${id}`).then((res) => {
              expect(res.status).to.eq(200);
              expect(res.body.likes).to.eq(initialLikes + i);
            });
          }
  
          // Paso 3: Verificar los likes en el DOM
          cy.contains(task.titulo).parent().as('tarea');
          cy.get('@tarea').contains('p', `Likes: ${initialLikes + 5}`);
        });
    });
    
    it('Contador likes no es 0', () => {
      let task = fixture.otrasTareas[0];
      cy.contains(task.titulo).parent().as('tarea');
      cy.get('@tarea').contains('p', 'Likes:').as('contadorLikes');
      cy.ge('@contadorLikes')
      .invoke('text')
      .then((text) => {
        let numLikes = parseInt(text.split(': ')[1], 10); 
        expect(numLikes).to.be.greaterThan(0);
      })      
    })


  })
})

// TODO
// GET https://tasks--reto-rectnico-qa--gl72z942pjcn.code.run/api/tasks // Muestra todas las tareas
// POST https://tasks--reto-rectnico-qa--gl72z942pjcn.code.run/api/tasks/ + Id regresa el json de la tarea y agraga 1 like
# Reto Técnico de QA: Cuida Tu Comunidad (CTC) con cypress.io

Para descargar el proyecto clona usando el comando
```shell
git clone https://github.com/mannervaldez/Retoctc.git
```

Instala las dependencias abriendo una terminal dentro del repositorio y ejecuta el comando 

```
npm install
```

Ejecuta las pruebas usando el comando 
```
npm run test
```
De inmediato se ejecutaran las pruebas en un navegador "headless" por lo que no sera visible durante la ejecucion, la grabacion de video esta configurada por defecto por lo que los videos de evidencia se almacenaran en al ruta `Retoctc/cypress/videos` y el reporte sera almacenado en la ruta `Retoctc/cypress/reports/index.html`

Para ver el reporte es necesario abrir el arcivo `index.html` en cualquier navegador.



----
Para ejecutar pruebas en el entorno grafico de cypress ejecute el comando 
```
npx cypress open
```
Luego selecciona el `spec` o archivo de prueba en la carpeta `e2e`, en este caso la ejecucion si se muestra en el navegador.

Visita la pagina de GitHub Pages con los resultados obtenidos <a src='https://mannervaldez.github.io/Retoctc/cypress/reports/'>Resultados Page</a>

Proyecto de : Jose Manuel Valdez
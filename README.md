# Make It Real - Gestión de votaciones usando React.

Esta es una solución para la gestión de votaciones utilizando React, desarrollada como parte del curso Make It Real.

## Tabla de contenidos

- [Descripción General](#descripción-general)
  - [El Desafío](#el-desafío)
  - [Capturas de Pantalla](#capturas-de-pantalla)
- [Mi Proceso](#mi-proceso)
  - [Construido con](#construido-con)
  - [Lo que Aprendí](#lo-que-aprendí)
  - [Desarrollo Continuo](#desarrollo-continuo)
  - [Recursos Útiles](#recursos-útiles)
- [Autor](#autor)
- [Agradecimientos](#agradecimientos)

## Descripción General

### El Desafío

Los usuarios deben ser capaces de:

- Votar por diferentes candidatos.
- Ver el número total de votos.
- Ver los resultados de cada candidato en número o porcentaje.
- Filtrar los resultados para mostrar solo algunos candidatos.
- Seleccionar todos los candidatos con una única opción.
- Persistir los votos y estados de la aplicación.

## Mi Proceso

### Construido con

- React - Biblioteca principal para construir la interfaz de usuario.
- PropTypes - Validación de tipos para asegurar que los componentes reciben las props correctas.
- JavaScript (ES6+) - Manejo de la lógica de votaciones y filtros.
- CSS - Para estilos de la aplicación.
- useReducer - para acciones complejas
- useContext - para uso complejo de variables

### Lo que Aprendi

Durante este proyecto, aprendí:

- Manejo de estado con useState: Implementé la lógica para gestionar el estado de los votos, los filtros y los candidatos seleccionados.
- Paso de props entre componentes: Cómo organizar la comunicación entre componentes padre e hijo para actualizar y mostrar datos.
- Validación con PropTypes: Apliqué PropTypes para mejorar la robustez y validar los datos entre componentes.
- Filtrado de datos: Implementé lógica de filtrado para mostrar candidatos específicos o todos a la vez, con la posibilidad de cambiar entre números y porcentajes.

### Recursos Útiles

- [PropTypes en React](https://es.legacy.reactjs.org/docs/typechecking-with-proptypes.html) - Cómo usar PropTypes para validar props en componentes.

## Autor

- GitHub - [William Lupaca Ticona](https://github.com/PunoBootcamper)

## Agradecimientos

Gracias al curso de Make It Real por proporcionar este ejercicio y los recursos útiles que nos guian a lo largo del proceso.

# examen

Requisitos técnicos obligatorios
Tu solución debe usar de forma real:

document.querySelector(...)
Lectura de valores con .value
Generación del CV con innerHTML
Eventos con addEventListener(...)
classList.add(...) y classList.remove(...)
Bucles for
Arrays de dos dimensiones (2D) para Experiencia y Formación
Checkboxes con .checked
Uso de push(...) para construir arrays



Requisitos funcionales
Layout
Dos zonas: Formulario y Vista previa (#cvPreview).
Al cargar, #cvPreview muestra un placeholder.

Formulario mínimo
Nombre* (#nombre), Apellidos* (#apellidos), Email* (#email)
Teléfono (#telefono)
Foto URL (#fotoUrl)
Color acento (#accentColor: blue / green / red / purple)
Sobre mí (#sobreMi)
Skills: 6 checkboxes con ids (ej: #skHtml, #skCss, etc.)

Experiencia (array 2D )
3 filas fijas (Empresa / Puesto / Años).
Construir: exp = [[empresa, puesto, años], ...] usando push.

Formación (array 2D )
2 filas fijas (Centro / Título / Año).
Construir: edu = [[centro, titulo, año], ...] usando push.

Generar CV
Botón #btnGenerar.
Si falta Nombre, Apellidos o Email:
No se genera el CV.
Se añade clase .error a los inputs vacíos.
Si está correcto:
Generar el CV con innerHTML en #cvPreview.
Mostrar secciones: Cabecera (foto, nombre, email, teléfono), Sobre mí, Skills (<ul>), Experiencia (tabla), Formación (tabla).
Recorrer arrays 2D con bucles for para crear las filas.

Color acento
Al generar, el CV debe tener una única clase: .accent-blue / .accent-green / .accent-red / .accent-purple.
Antes de añadir la nueva, quitar las anteriores con classList.remove(...).

Modo vista / modo edición
Botón #btnToggle (siempre visible).
“Modo vista”: oculta el contenido del formulario añadiendo .hidden a #formBody.
“Modo edición”: vuelve a mostrarlo quitando .hidden.

Limpiar
Botón #btnLimpiar:
form.reset()
Quitar errores (clase .error)
Restaurar placeholder del preview
Volver a modo edición

Plantilla HTML/CSS proporcionada
Se te entrega una plantilla con:

#formBody — zona que se oculta en modo vista.
#cvPreview — zona donde se pinta el CV.
Clases CSS ya preparadas:

.hidden, .error
.accent-blue / .accent-green / .accent-red / .accent-purple
IDs ya definidos para inputs y botones.
(El profesor os dará el index.html con HTML/CSS comentado por secciones; tú debes completar el JS dentro del <script>.)

Evaluación (10 puntos)
Criteri	Punts
Eventos con addEventListener	1,5
Lectura con querySelector + .value	1,5
Validación visual con .error y classList	1,5
Arrays 2D (exp + edu) creados con push	2,0
Bucles for para pintar skills + tablas desde arrays 2D	2,5
innerHTML bien estructurado + acentos + modo vista/edición	1,0
Total	10,0
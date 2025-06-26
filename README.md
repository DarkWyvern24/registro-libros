# Sistema de Registro de Libros Leídos 📚

Aplicación web desarrollada en React para gestionar tus libros leídos con funcionalidades completas de CRUD (Crear, Leer, Actualizar, Eliminar). Incluye validación de formularios y almacenamiento local en el navegador mediante LocalStorage.

---

## 📋 Características

- Registro de libros con campos:  
  - Título  
  - Autor  
  - Calificación (1 a 5)  
  - Notas personales  
  - Indicador de recomendación  
- Validación de formulario para garantizar datos completos y correctos.  
- Visualización de lista de libros guardados con opciones para editar y eliminar.  
- Persistencia de datos en LocalStorage para mantener los registros tras recargar o cerrar el navegador.  
- Diseño responsivo y estético con Bootstrap 5 y Bootstrap Icons.  
- Mensajes de feedback claros para mejorar la experiencia de usuario.  

---

## 🚀 Instalación y ejecución

1. Clona este repositorio:

```bash
git clone https://github.com/tuusuario/registro-libros.git


## Estructura del proyecto:

registro-libros/
├── public/
│   ├── biblioteca.jpg       # Imagen de fondo
│   └── index.html
├── src/
│   ├── components/
│   │   ├── LibroForm.jsx    # Formulario para crear y editar libros
│   │   ├── LibroList.jsx    # Lista de libros con botones de acción
│   │   └── Mensaje.jsx      # Componente para mensajes de alerta
│   ├── App.js               # Componente principal
│   ├── index.js
│   └── index.css            # Estilos globales con fondo y tema biblioteca
├── package.json
└── README.md

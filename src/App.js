import React, { useState, useEffect } from "react";
import LibroForm from "./components/LibroForm";
import LibroList from "./components/LibroList";
import Mensaje from "./components/Mensaje";

function App() {
  // Estado libros con carga inicial desde localStorage
  const [libros, setLibros] = useState(() => {
    const datosGuardados = localStorage.getItem("libros");
    if (datosGuardados) {
      try {
        return JSON.parse(datosGuardados);
      } catch {
        localStorage.removeItem("libros");
        return [];
      }
    }
    return [];
  });

  const [libroAEditar, setLibroAEditar] = useState(null);
  const [mensaje, setMensaje] = useState({ tipo: "", texto: "" });

  // Guardar libros en localStorage cuando cambia la lista
  useEffect(() => {
    localStorage.setItem("libros", JSON.stringify(libros));
  }, [libros]);

  const mostrarMensaje = (tipo, texto) => {
    setMensaje({ tipo, texto });
    setTimeout(() => setMensaje({ tipo: "", texto: "" }), 3000);
  };

  const agregarLibro = (nuevoLibro) => {
    setLibros((prev) => [...prev, nuevoLibro]);
    mostrarMensaje("success", "📘 Libro agregado correctamente.");
  };

  const eliminarLibro = (id) => {
    if (window.confirm("¿Seguro quieres eliminar este libro?")) {
      setLibros(libros.filter((libro) => libro.id !== id));
      mostrarMensaje("danger", "❌ Libro eliminado.");
      if (libroAEditar && libroAEditar.id === id) {
        setLibroAEditar(null);
      }
    }
  };

  const actualizarLibro = (libroActualizado) => {
    setLibros(
      libros.map((libro) =>
        libro.id === libroActualizado.id ? libroActualizado : libro
      )
    );
    mostrarMensaje("info", "✏️ Libro actualizado.");
    setLibroAEditar(null);
  };

  const editarLibro = (libro) => {
    setLibroAEditar(libro);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary mb-4">
        📚 Sistema de Registro de Libros Leídos
      </h1>

      <LibroForm
        agregarLibro={agregarLibro}
        libroAEditar={libroAEditar}
        actualizarLibro={actualizarLibro}
        limpiarEdicion={() => setLibroAEditar(null)}
      />

      <LibroList
        libros={libros}
        eliminarLibro={eliminarLibro}
        editarLibro={editarLibro}
      />

      <Mensaje tipo={mensaje.tipo} texto={mensaje.texto} />

      <footer className="text-center text-muted mt-5">
        <small>Desarrollado por Daniel Carreño, Camila Nievas y Fernanda Rojas – 2025</small>
      </footer>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";

const LibroForm = ({
  agregarLibro,
  libroAEditar,
  actualizarLibro,
  limpiarEdicion,
}) => {
  const [libro, setLibro] = useState({
    titulo: "",
    autor: "",
    calificacion: "",
    notas: "",
    recomendado: false,
  });

  useEffect(() => {
    if (libroAEditar) {
      setLibro(libroAEditar);
    } else {
      setLibro({
        titulo: "",
        autor: "",
        calificacion: "",
        notas: "",
        recomendado: false,
      });
    }
  }, [libroAEditar]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLibro({
      ...libro,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!libro.titulo.trim() || !libro.autor.trim()) {
      alert("Título y autor son obligatorios.");
      return;
    }

    if (libroAEditar) {
      actualizarLibro(libro);
      limpiarEdicion();
    } else {
      agregarLibro({ ...libro, id: Date.now() });
    }

    setLibro({
      titulo: "",
      autor: "",
      calificacion: "",
      notas: "",
      recomendado: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label className="form-label">Título *</label>
        <input
          type="text"
          name="titulo"
          value={libro.titulo}
          onChange={handleChange}
          className="form-control"
          required
          placeholder="Ejemplo: El Quijote"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Autor *</label>
        <input
          type="text"
          name="autor"
          value={libro.autor}
          onChange={handleChange}
          className="form-control"
          required
          placeholder="Ejemplo: Miguel de Cervantes"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Calificación (1 a 5)</label>
        <input
          type="number"
          name="calificacion"
          value={libro.calificacion}
          onChange={handleChange}
          className="form-control"
          min="1"
          max="5"
          placeholder="Ej: 4"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Notas personales</label>
        <textarea
          name="notas"
          value={libro.notas}
          onChange={handleChange}
          className="form-control"
          placeholder="Escribe tus notas aquí"
        />
      </div>

      <div className="form-check mb-3">
        <input
          type="checkbox"
          name="recomendado"
          checked={libro.recomendado}
          onChange={handleChange}
          className="form-check-input"
          id="recomendadoCheck"
        />
        <label htmlFor="recomendadoCheck" className="form-check-label">
          ¿Recomendarías este libro?
        </label>
      </div>

      <button type="submit" className="btn btn-primary">
        {libroAEditar ? (
          <>
            <i className="bi bi-pencil-square me-1"></i> Actualizar libro
          </>
        ) : (
          <>
            <i className="bi bi-plus-circle me-1"></i> Agregar libro
          </>
        )}
      </button>
    </form>
  );
};

export default LibroForm;

// src/components/LibroList.jsx
import React from "react";

const LibroList = ({ libros, eliminarLibro, editarLibro }) => {
  if (libros.length === 0) {
    return <p className="text-muted">No hay libros registrados aún.</p>;
  }

  return (
    <div className="table-responsive">
      <table className="table table-striped align-middle">
        <thead className="table-dark">
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Calificación</th>
            <th>Notas</th>
            <th>Recomendado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {libros.map((libro) => (
            <tr key={libro.id}>
              <td>{libro.titulo}</td>
              <td>{libro.autor}</td>
              <td>{libro.calificacion}</td>
              <td>{libro.notas}</td>
              <td>{libro.recomendado ? "Sí" : "No"}</td>
              <td>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => editarLibro(libro)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => eliminarLibro(libro.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LibroList;

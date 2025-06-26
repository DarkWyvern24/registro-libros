import React from "react";

const Mensaje = ({ tipo, texto }) => {
  if (!texto) return null;

  return (
    <div className={`alert alert-${tipo} mt-3`} role="alert">
      {texto}
    </div>
  );
};

export default Mensaje;

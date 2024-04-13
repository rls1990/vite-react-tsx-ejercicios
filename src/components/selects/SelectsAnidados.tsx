import { SelectList } from "./SelectList";
import React, { useState } from "react";

export const SelectsAnidados = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");

  // token de prueba c8098b69-4053-4800-acc3-ba916136a4d1
  // https://api.copomex.com/query/get_estados?token=pruebas
  // https://api.copomex.com/query/get_municipio_por_estado/Aguascalientes?token=pruebas
  // https://api.copomex.com/query/get_colonia_por_municipio/Xochimilco?token=pruebas

  return (
    <div>
      <h2>SelectsAnidados</h2>
      <h3>Mexico</h3>
      <SelectList
        title="estado"
        url="https://api.copomex.com/query/get_estados?token=c8098b69-4053-4800-acc3-ba916136a4d1"
        handleChangue={(e: React.ChangeEvent<HTMLSelectElement>) => {
          setState(e.target.value);
        }}
      />

      {state && (
        <SelectList
          title="municipios"
          url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=c8098b69-4053-4800-acc3-ba916136a4d1`}
          handleChangue={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setTown(e.target.value);
          }}
        />
      )}

      {town && (
        <SelectList
          title="colonia"
          url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=c8098b69-4053-4800-acc3-ba916136a4d1`}
          handleChangue={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setSuburb(e.target.value);
          }}
        />
      )}

      <pre>
        <code>
          {state}-{town}-{suburb}
        </code>
      </pre>
    </div>
  );
};

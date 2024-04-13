import { useState } from "react";
import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";

export type Caballero = {
  id: number | null | string;
  name: string;
  constelation: string;
};

const initialDB: Caballero[] = [
  {
    id: 1,
    name: "Seiya",
    constelation: "Pegaso",
  },
  {
    id: 2,
    name: "Shiryu",
    constelation: "Dragón",
  },
  {
    id: 3,
    name: "Hyoga",
    constelation: "Cisne",
  },
  {
    id: 4,
    name: "Shun",
    constelation: "Andrómeda",
  },
  {
    id: 5,
    name: "Ikki",
    constelation: "Fénix",
  },
];

// eslint-disable-next-line react-refresh/only-export-components
export const initialDataToEdit: Caballero = {
  id: null,
  constelation: "",
  name: "",
};

export const CrudAPP = () => {
  const [db, setDb] = useState(initialDB);
  const [dataToEdit, setDataToEdit] = useState(initialDataToEdit);

  const createDate = (data: Caballero) => {
    data.id = Date.now();
    setDb([...db, data]);
  };

  const updateDate = (data: Caballero) => {
    const newData: Caballero[] = db.map((el) =>
      el.id === data.id ? data : el
    );
    setDb(newData);
  };

  const deleteData = (id: number) => {
    const isDelete = confirm(
      `¿Está seguro de eliminar el registro con el id ${id}?`
    );

    if (isDelete) {
      const newData = db.filter((el) => el.id != id);
      setDb(newData);
    } else return;
  };

  return (
    <>
      <h2>Crud App</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createDate}
          updateData={updateDate}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </>
  );
};

import React, { useState } from "react";

interface SongFormProps {
  handleSearch: any;
}

interface FormProps {
  artist: string;
  song: string;
}

const initialForm: FormProps = {
  artist: "",
  song: "",
};

export const SongForm = ({ handleSearch }: SongFormProps) => {
  const [form, setForm] = useState<FormProps>(initialForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.artist || !form.song) {
      alert("Datos Incompletos.");
      return;
    } else {
      handleSearch(form);
      setForm(initialForm);
    }
  };

  return (
    <div>
      <h3>Formulario</h3>
      <form onSubmit={handleSubmit} className="mysty">
        <input
          type="text"
          name="artist"
          placeholder="Nombre del Intérprete"
          onChange={handleChange}
          value={form.artist}
        />
        <input
          type="text"
          name="song"
          placeholder="Nombre del Canción"
          onChange={handleChange}
          value={form.song}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

import { useForm } from "../../hooks/form/useForm";
import { Loader } from "../loader/Loader";
import { Message } from "../message/Message";

export interface FormProps {
  name: string;
  email: string;
  subject: string;
  comments: string;
}

const initialForm: FormProps = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const validationsForm = (formdata: FormProps) => {
  const errors: FormProps = initialForm;

  const regexName = /^[A-Za-zÁÉÍÓÚáéíóú\s]+$/;
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regexCommet = /^.{1,255}$/;

  if (!formdata.name.trim()) {
    errors.name = "El nombre es requerido";
  } else if (!regexName.test(formdata.name.trim())) {
    errors.name = "El campo Nombre solo acepta letras y espacios en blanco";
  } else if (formdata.name.trim()) {
    errors.name = "";
  }

  if (!formdata.email.trim()) {
    errors.email = "El email es requerido";
  } else if (!regexEmail.test(formdata.email.trim())) {
    errors.email = "El campo Email es incorrecto";
  } else if (formdata.email.trim()) {
    errors.email = "";
  }

  if (!formdata.comments.trim()) {
    errors.comments = "El Comentario es requerido";
  } else if (!regexCommet.test(formdata.comments.trim())) {
    errors.comments = "El campo Comentario no debe exeder los 255 caracteres";
  } else if (formdata.comments.trim()) {
    errors.comments = "";
  }

  if (!formdata.subject.trim()) {
    errors.subject = "El asunto es requerido";
  } else if (formdata.subject.trim()) {
    errors.subject = "";
  }

  return errors;
};

const style = {
  fontWeight: "bold",
  color: "#dc3545",
  fontSize: "14px",
  marginLeft: "7px",
};

export const ContactForm = () => {
  const {
    form,
    errors,
    response,
    loading,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <>
      <h3>Validación de formulario</h3>
      <div style={{ marginBottom: 7 }}>
        {loading && <Loader />}
        {response && (
          <Message msg="Los Datos han sido enviados" bgColor="#198754" />
        )}
      </div>

      <form onSubmit={handleSubmit} className="mysty">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Escribe tu nombre"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.name}
          required
        />
        {errors.name && <p style={style}>{errors.name}</p>}
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Escribe tu email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.email}
          required
        />
        {errors.email && <p style={style}>{errors.email}</p>}
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Escribe tu subject"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.subject}
          required
        />
        {errors.subject && <p style={style}>{errors.subject}</p>}
        <textarea
          name="comments"
          id="comments"
          cols={50}
          rows={5}
          placeholder="Escribe tu Comentario"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.comments}
          required
        />
        {errors.comments && <p style={style}>{errors.comments}</p>}
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
};

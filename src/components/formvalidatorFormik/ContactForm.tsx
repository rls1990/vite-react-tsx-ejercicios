import * as yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import axios from "axios";
import { Loader } from "../loader/Loader";
import { Message } from "../message/Message";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  comments: string;
}

const initval: FormValues = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const validationsForm = () => {
  const regexName = /^[A-Za-zÁÉÍÓÚáéíóú\s]+$/;
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // const regexCommet = /^.{1,255}$/;

  const schema = yup.object({
    name: yup
      .string()
      .matches(
        regexName,
        "El nombre debe contener solo letras y espacios en blanco"
      )
      .required("EL nombre es requerido"),
    email: yup
      .string()
      .matches(regexEmail, "El campo Email es incorrecto")
      .required("El email es requerido"),
    subject: yup.string().required("El asunto es requetido"),
    comments: yup
      .string()
      .max(255, "El comentario debe tener máximo 255 caracteres")
      .required("El comentario es requerido"),
  });

  return schema;
};

const style = {
  fontWeight: "bold",
  color: "#dc3545",
  fontSize: "14px",
  marginLeft: "7px",
};

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(false);

  const formik = useFormik<FormValues>({
    initialValues: initval,
    onSubmit: (values) => {
      console.log(values);
      console.log("Enviando datos");
      setLoading(true);
      axios
        .post(
          "https://formsubmit.co/ajax/roilanlauzardosotolongo@gmail.com",
          values,
          { headers: { "Content-Type": "application/json" } }
        )
        .then((res) => {
          setLoading(false);
          setResponse(true);
          setTimeout(() => setResponse(false), 5000);
          console.log("Datos enviados");
          console.log(res);
        });
    },
    validationSchema: validationsForm,
  });

  return (
    <>
      <h3>Validación de formulario con Formik y yup</h3>

      <div style={{ marginBottom: 7 }}>
        {loading && <Loader />}
        {response && (
          <Message msg="Los Datos han sido enviados" bgColor="#198754" />
        )}
      </div>

      <form onSubmit={formik.handleSubmit} className="mysty">
        <input
          id="name"
          type="text"
          placeholder="Escribe tu nombre"
          {...formik.getFieldProps("name")}
        />
        {formik.touched.name && formik.errors.name ? (
          <p style={style}>{formik.errors.name}</p>
        ) : null}

        <input
          id="email"
          type="email"
          placeholder="Escriba una dirección de correo"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <p style={style}>{formik.errors.email}</p>
        ) : null}

        <input
          id="subject"
          type="text"
          placeholder="Escriba un asunto"
          {...formik.getFieldProps("subject")}
        />
        {formik.touched.subject && formik.errors.subject ? (
          <p style={style}>{formik.errors.subject}</p>
        ) : null}

        <textarea
          id="comments"
          cols={50}
          rows={5}
          placeholder="Escribe tu Comentario"
          {...formik.getFieldProps("comments")}
        />
        {formik.touched.comments && formik.errors.comments ? (
          <p style={style}>{formik.errors.comments}</p>
        ) : null}

        <input type="submit" value="Enviar" />
      </form>
    </>
  );
};

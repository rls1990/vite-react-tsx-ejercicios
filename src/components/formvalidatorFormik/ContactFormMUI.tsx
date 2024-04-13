import * as yup from "yup";
import { useFormik } from "formik";
import { Alert, AlertTitle, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import Divider from "@mui/material/Divider";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  comments: string;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const validationSchema = () => {
  const regexName = /^[A-Za-zÁÉÍÓÚáéíóú\s]+$/;
  //const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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
      .email("El campo Email es incorrecto")
      //.matches(regexEmail, "El campo Email es incorrecto")
      .required("El email es requerido"),
    subject: yup.string().required("El asunto es requetido"),
    comments: yup
      .string()
      .max(255, "El comentario debe tener máximo 255 caracteres")
      .required("El comentario es requerido"),
  });

  return schema;
};

export const ContactFormMUI = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const onSubmit = (values: FormValues) => {
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
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
        setTimeout(() => setError(false), 5000);
        console.log("Error: ", error);
      });
  };

  const formik = useFormik<FormValues>({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
      <h3>Validación de formulario con Formik, yup y MUI</h3>

      {response && (
        <div style={{ marginBottom: 21 }}>
          <Alert variant="filled" severity="success">
            <AlertTitle>Mensage Enviado</AlertTitle>
            <Divider
              orientation="horizontal"
              variant="fullWidth"
              sx={{ mb: 1, borderColor: "rgb(255 255 255 / 58%)" }}
            />
            Los Datos han sido enviados con éxito
          </Alert>
        </div>
      )}

      {error && (
        <div style={{ marginBottom: 21 }}>
          <Alert variant="filled" severity="error">
            <AlertTitle>Ha ocurrido un Error</AlertTitle>
            <Divider
              orientation="horizontal"
              variant="fullWidth"
              sx={{ mb: 1, borderColor: "rgb(255 255 255 / 58%)" }}
            />
            Los Datos no han podido enviarse
          </Alert>
        </div>
      )}

      <form onSubmit={formik.handleSubmit}>
        <TextField
          sx={{ mb: 2 }}
          fullWidth
          id="name"
          label="Escribe tu nombre"
          {...formik.getFieldProps("name")}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />

        <TextField
          sx={{ mb: 2 }}
          fullWidth
          id="email"
          label="Escriba una dirección de correo"
          {...formik.getFieldProps("email")}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          sx={{ mb: 2 }}
          fullWidth
          id="subject"
          label="Escriba un asunto"
          {...formik.getFieldProps("subject")}
          error={formik.touched.subject && Boolean(formik.errors.subject)}
          helperText={formik.touched.subject && formik.errors.subject}
        />

        <TextField
          sx={{ mb: 2 }}
          fullWidth
          id="comments"
          label="Escribe tu Comentario"
          multiline
          maxRows={5}
          {...formik.getFieldProps("comments")}
          error={formik.touched.comments && Boolean(formik.errors.comments)}
          helperText={formik.touched.comments && formik.errors.comments}
        />

        {/* <Button
          size="large"
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          endIcon={<SendIcon />}
        >
          Submit
        </Button> */}

        <LoadingButton
          fullWidth
          endIcon={<SendIcon />}
          size="large"
          loading={loading}
          loadingPosition="end"
          variant="contained"
          type="submit"
        >
          <span>Send</span>
        </LoadingButton>
      </form>
    </>
  );
};

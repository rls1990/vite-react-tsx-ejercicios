import { ChangeEvent, FocusEvent, FormEvent, useState } from "react";
import { FormProps } from "../../components/formvalidator/ContactForm";
import axios from "axios";

export const useForm = (initialForm: any, validateForm: any) => {
  const [form, setForm] = useState<FormProps>(initialForm);
  const [errors, setError] = useState<FormProps>(initialForm);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<null | true>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleBlur = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    handleChange(e);
    setError(validateForm(form));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(validateForm(form));

    if (Object.values(errors).findIndex((val) => val.length >= 0) === 0) {
      console.log("Enviando datos");
      setLoading(true);

      axios
        .post(
          "https://formsubmit.co/ajax/roilanlauzardosotolongo@gmail.com",
          form,
          { headers: { "Content-Type": "application/json" } }
        )
        .then((res) => {
          setLoading(false);
          setResponse(true);
          setTimeout(() => setResponse(null), 5000);
          console.log("Datos enviados");
          console.log(res);
        });
    } else return;
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";
import { createBook } from "../../api/book";
import { toast } from "react-toastify";

export default function AddBook() {
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      title: Yup.string().required("el titulo es obligatorio"),
      author: Yup.string().required("El autor es obligatorio"),
      section: Yup.string().required("La seccion es obligatoria"),
    }),
    onSubmit: async (libroData) => {
      console.log("libro:", libroData);
      setError("");

      const result = await createBook(libroData);

      if (result.message) {
        toast.success("libro creado");
        console.log(result);
      } else {
        setError(error.message);
        toast.error(error.message);
      }
    },
  });
  return (
    <Form className="login-form" onSubmit={formik.handleSubmit}>
      <h2>ingresa un nuevo libro.</h2>
      <Form.Control
        type="text"
        placeholder="Titulo del libro"
        name="title"
        value={formik.values.title}
        onChange={formik.handleChange}
        error={formik.errors.title && true}
      />
      <Form.Control
        type="text"
        placeholder="Autor"
        name="author"
        value={formik.values.author}
        onChange={formik.handleChange}
        error={formik.errors.author && true}
      />
      <Form.Control
        type="number"
        placeholder="Seccion"
        name="section"
        value={formik.values.section}
        onChange={formik.handleChange}
        error={formik.errors.section && true}
      />
      <Button type="submit" className="btn-submit">
        Iniciar sesión
      </Button>
      {error && <p className="submit-error">{error}</p>}
    </Form>
  );
}

function initialValues() {
  return {
    section: "",
    author: "",
    title: "",
  };
}

import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function SeventhPost() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Form con Formik</title>
      </Head>

      <h1>Form con Formik</h1>
      <Formik
        initialValues={{ fullname: "", email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.fullname) {
            errors.fullname = "Campo requerido";
          }

          if (!values.email) {
            errors.email = "Campo requerido";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Email invalido";
          }
          if (!values.password) {
            errors.password = "Campo requerido";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <Field
              type="text"
              name="fullname"
              placeholder="Ingresar nombre completo"
            />
            <ErrorMessage name="fullname" component="div" />

            <Field type="email" name="email" placeholder="Ingresas Email" />
            <ErrorMessage name="email" component="div" />

            <Field
              type="password"
              name="password"
              placeholder="Ingresar contraseña"
            />
            <ErrorMessage name="password" component="div" />

            <button type="submit" disabled={isSubmitting}>
              Enviar
            </button>
          </Form>
        )}
      </Formik>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </div>
  );
}

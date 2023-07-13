import { useForm } from "react-hook-form";
import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

export default function SixthPost() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Form con React Hook Form</title>
      </Head>

      <h1>Form con React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label>Email</label>
        <input
          type="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <p>Email es requerido y válido</p>}

        <label>Contraseña</label>
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <p>La contraseña es requerida </p>}

        <button type="submit">Enviar</button>
      </form>

      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </div>
  );
}

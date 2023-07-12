import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import styles from "../../styles/Home.module.css";

export default function FourthPost() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    bolivian: false,
    ciudad: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleChangeCheck = (event) => {
    const { name, checked } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: checked }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Nombre: ${formData.name}, Email: ${formData.email}, Mensaje: ${formData.message}, Nacionalidad: ${formData.bolivian}, Ciudad: ${formData.bolivian && formData.ciudad}`
    );
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Forms Hooks</title>
      </Head>

      <h1>Forms Componentes Controlados</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />

        <label htmlFor="color">
          <input
            type="checkbox"
            name="bolivian"
            id="bolivian"
            checked={formData.bolivian}
            onChange={handleChangeCheck}
          />
          Boliviano
        </label>
        {formData.bolivian && (
          <label>
            Ciudad:
            <select
              name="ciudad"
              id="ciudad"
              value={formData.ciudad}
              onChange={handleChange}
            >
              <option value="cb">Cbba</option>
              <option value="lp">La Paz</option>
              <option value="or">Oruro</option>
              <option value="tj">Tarija</option>
            </select>
          </label>
        )}

        <button type="submit">Enviar</button>
      </form>

      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </div>
  );
}

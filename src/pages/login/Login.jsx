import { useState } from "react";
import axios from "../api/axios";

function LoginPage() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isValidInput = (value) => {
    const regex = /^[a-zA-Z0-9._-]{3,20}$/;
    return regex.test(value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value.trimStart(), // evita espacios iniciales
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validaciones básicas
    if (!form.username || !form.password) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (!isValidInput(form.username)) {
      setError("El nombre de usuario no es válido (3-20 caracteres, sin símbolos raros)");
      return;
    }

    if (form.password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(
        "/auth/login",
        { username: form.username, password: form.password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      alert(response.data); // Puedes cambiarlo por una notificación
      window.location.href = "/admin";
    } catch (err) {
      const msg =
        err.response?.data ||
        "Error inesperado en el servidor. Inténtalo más tarde.";
      setError(typeof msg === "string" ? msg : JSON.stringify(msg));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="login-container" aria-label="Página de inicio de sesión">
      <form className="login-form" onSubmit={handleSubmit} noValidate autoComplete="off">
        <h2>Iniciar Sesión</h2>

        {error && <div className="error" role="alert">{error}</div>}

        <label htmlFor="username">Usuario</label>
        <input
          type="text"
          name="username"
          id="username"
          value={form.username}
          onChange={handleChange}
          autoComplete="username"
          placeholder="Ej: admin123"
          required
        />

        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          value={form.password}
          onChange={handleChange}
          autoComplete="current-password"
          placeholder="Mínimo 6 caracteres"
          required
        />

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Cargando..." : "Entrar"}
        </button>
      </form>
    </main>
  );
}

export default LoginPage;

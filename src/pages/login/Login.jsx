import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from './Login.module.css';
import { Eye, EyeOff } from 'lucide-react'; 
import { useAuth } from "../../context/AuthContext"; // 👈 Importamos el contexto

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth(); // 👈 Usamos el login del contexto

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const togglePassword = () => setShowPassword(prev => !prev);

  const onSubmit = async (data) => {
    setIsLoading(true);
    setServerError("");

    try {
      await login(data.username, data.password); // 👈 Llamamos al login del contexto
      // Redirigirá automáticamente si el contexto tiene useNavigate
    } catch (err) {
      setServerError("Usuario o contraseña incorrectos");
    } finally {
      setIsLoading(false);
      reset({ password: "" });
    }
  };

  return (
    <main className={styles.loginContainer} aria-label="Página de inicio de sesión">
      <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2>Iniciar Sesión</h2>

        {serverError && <div className={styles.error} role="alert">{serverError}</div>}

        <label htmlFor="username">Usuario</label>
        <input
          id="username"
          type="text"
          {...register("username", {
            required: "El usuario es obligatorio",
            pattern: {
              value: /^[a-zA-Z0-9._-]{3,20}$/,
              message: "Debe tener entre 3 y 20 caracteres sin símbolos raros",
            },
          })}
          autoComplete="username"
          placeholder="Ej: admin123"
        />
        {errors.username && <span className={styles.error}>{errors.username.message}</span>}

        <label htmlFor="password">Contraseña</label>
        <div className={styles.passwordContainer}>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: "La contraseña es obligatoria",
              minLength: {
                value: 6,
                message: "Mínimo 6 caracteres",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/,
                message:
                  "Usa mayúsculas, minúsculas, números y un carácter especial",
              },
            })}
            autoComplete="current-password"
            placeholder="Contraseña segura"
          />
          <button type="button" onClick={togglePassword} className={styles.toggleBtn} aria-label="Mostrar/Ocultar contraseña">
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {errors.password && <span className={styles.error}>{errors.password.message}</span>}

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Cargando..." : "Entrar"}
        </button>
      </form>
    </main>
  );
}

export default LoginPage;

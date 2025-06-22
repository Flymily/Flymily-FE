
const CampoFormulario = ({ label, name, register, required = false, type = "text", placeholder }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      type={type}
      {...register(name, { required })}
      placeholder={placeholder}
    />
  </div>
);

export default CampoFormulario;

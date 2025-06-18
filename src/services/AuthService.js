export const authRequest = async (username, password) => {
  const encoded = btoa(`${username}:${password}`);
  const res = await fetch("/api/auth/login", {
    method: "GET",
    headers: {
      Authorization: `Basic ${encoded}`,
    },
    credentials: "include", // importante si usas cookies
  });

  if (res.ok) {
    localStorage.setItem("auth", encoded);
    return true;
  } else {
    throw new Error("Login incorrecto");
  }
};
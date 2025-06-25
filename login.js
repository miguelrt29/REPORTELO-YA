const usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios")) || [];

document.getElementById("formLogin").addEventListener("submit", function (e) {
  e.preventDefault();
  const correo = document.getElementById("emailLogin").value;
  const contrasena = document.getElementById("passwordLogin").value;

  const usuarioValido = usuariosRegistrados.find(
    user => user.correo === correo && user.contrasena === contrasena
  );

  if (usuarioValido) {
    alert("✅ Inicio de sesión exitoso");
    window.location.href = "dashboard.html";
  } else {
    alert("❌ Correo o contraseña incorrectos");
  }
});

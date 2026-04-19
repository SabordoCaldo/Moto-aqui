function getUsuarios(){
  return JSON.parse(localStorage.getItem("usuarios")) || [];
}

function login(){

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const usuarios = getUsuarios();

  const usuario = usuarios.find(u => u.email === email && u.senha === senha);

  if(!usuario){
    alert("Email ou senha inválidos!");
    return;
  }

  localStorage.setItem("logado", JSON.stringify(usuario));

  if(usuario.tipo === "cliente"){
    window.location.href = "cadastro/cliente-home.html";
  }else{
    window.location.href = "cadastro/motorista.html";
  }
}

function verificarLogin(){
  const usuario = JSON.parse(localStorage.getItem("logado"));

  if(!usuario) return;

  if(usuario.tipo === "cliente"){
    window.location.href = "cadastro/cliente-home.html";
  }
}

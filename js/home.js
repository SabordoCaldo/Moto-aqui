// PROTEÇÃO
const usuarioTipo = localStorage.getItem("tipo");

if(!usuarioTipo){
  window.location.href = "../index.html";
}

// INICIAR HOME
function iniciarHome(tipo){

  let chave = tipo === "motorista" ? "fotoMotorista" : "fotoCliente";

  const foto = localStorage.getItem(chave);

  if(foto){
    document.getElementById("fotoPerfil").src = foto;
  }

}

// LOGOUT
function logout(){
  localStorage.clear();
  window.location.href = "../index.html";
}

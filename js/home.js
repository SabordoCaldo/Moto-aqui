// HOME CLIENTE E MOTORISTA

function carregarHome(){

  const usuario = JSON.parse(localStorage.getItem("logado"));

  if(!usuario){
    window.location.href = "../index.html";
    return;
  }

  // NOME
  const nome = document.getElementById("nomePerfil");
  if(nome) nome.innerText = usuario.nome;

  // FOTO
  const foto = document.getElementById("fotoPerfil");
  if(foto){
    foto.src = usuario.foto || "../assets/user.png";
  }

  // STATUS MOTORISTA
  const status = document.getElementById("statusMotorista");

  if(status){
    if(usuario.status === "pendente"){
      status.innerText = "Aguardando aprovação";
      status.style.color = "orange";
    }else{
      status.innerText = "Aprovado";
      status.style.color = "green";
    }
  }

}


// LOGOUT
function logout(){
  localStorage.removeItem("logado");
  window.location.href = "../index.html";
}

/*===========================
SCRIPT
===========================*/

// PEGAR USUÁRIOS
function getUsuarios(){
  return JSON.parse(localStorage.getItem("usuarios")) || [];
}

// SALVAR USUÁRIOS
function setUsuarios(lista){
  localStorage.setItem("usuarios", JSON.stringify(lista));
}


// ===========================
// CADASTRO CLIENTE
// ===========================
function cadastrarCliente(){

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const endereco = document.getElementById("endereco").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmarSenha").value;

  const foto = document.getElementById("preview").src;

  let usuarios = getUsuarios();

  // VERIFICAR EMAIL
  const existe = usuarios.find(u => u.email === email);
  if(existe){
    alert("Esse e-mail já está cadastrado!");
    return;
  }

  // VALIDAR SENHA
  if(senha !== confirmarSenha){
    alert("As senhas não coincidem!");
    return;
  }

  const usuario = {
    nome,
    telefone,
    endereco,
    email,
    senha,
    foto,
    tipo: "cliente"
  };

  usuarios.push(usuario);
  setUsuarios(usuarios);

  alert("Cadastro realizado!");

  window.location.href = "../index.html";
}


// ===========================
// LOGIN
// ===========================
function login(){

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const usuarios = getUsuarios();

  const usuario = usuarios.find(u => u.email === email && u.senha === senha);

  if(!usuario){
    alert("Email ou senha inválidos!");
    return;
  }

  // SALVA LOGIN ATIVO
  localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

  if(usuario.tipo === "cliente"){
    window.location.href = "cadastro/cliente-home.html";
  }else{
    window.location.href = "cadastro/motorista.html";
  }
}


// ===========================
// MANTER LOGIN
// ===========================
function verificarLogin(){

  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

  if(!usuario) return;

  if(window.location.pathname.includes("index.html")){
    if(usuario.tipo === "cliente"){
      window.location.href = "cadastro/cliente-home.html";
    }
  }
}


// ===========================
// SAIR
// ===========================
function logout(){
  localStorage.removeItem("usuarioLogado");
  window.location.href = "../index.html";
}


// ===========================
// MOSTRAR PERFIL
// ===========================
function carregarPerfil(){

  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

  if(!usuario) return;

  const nome = document.getElementById("nomePerfil");
  const foto = document.getElementById("fotoPerfil");

  if(nome) nome.innerText = usuario.nome;
  if(foto) foto.src = usuario.foto;
}


// ===========================
// PREVIEW FOTO
// ===========================
document.addEventListener("DOMContentLoaded", () => {

  const fotoInput = document.getElementById("foto");
  const preview = document.getElementById("preview");

  if(fotoInput){
    fotoInput.addEventListener("change", function(){

      const file = this.files[0];

      if(file){
        const reader = new FileReader();

        reader.onload = function(e){
          preview.src = e.target.result;
        }

        reader.readAsDataURL(file);
      }

    });
  }

});

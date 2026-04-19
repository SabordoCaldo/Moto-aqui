/*===========================
SCRIPT
===========================*/

// CADASTRO CLIENTE
function cadastrarCliente(){

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const usuario = {
    nome: nome,
    email: email,
    senha: senha,
    tipo: "cliente"
  };

  localStorage.setItem("usuario", JSON.stringify(usuario));

  alert("Cadastro realizado!");

  window.location.href = "../index.html";
}


// CADASTRO MOTORISTA
function cadastrarMotorista(){

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const usuario = {
    nome: nome,
    email: email,
    senha: senha,
    tipo: "motorista"
  };

  localStorage.setItem("usuario", JSON.stringify(usuario));

  alert("Cadastro realizado!");

  window.location.href = "../index.html";
}


// LOGIN
function login(){

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const usuario = JSON.parse(localStorage.getItem("usuario"));

  if(!usuario){
    alert("Usuário não cadastrado");
    return;
  }

  if(email === usuario.email && senha === usuario.senha){

    if(usuario.tipo === "cliente"){
      window.location.href = "cliente-home.html";
    }else{
      window.location.href = "motorista-home.html";
    }

  }else{
    alert("Email ou senha inválidos");
  }
        }

// PREVIEW DA FOTO
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

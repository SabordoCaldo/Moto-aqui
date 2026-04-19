/*===========================
USUÁRIOS
===========================*/
function getUsuarios(){
  return JSON.parse(localStorage.getItem("usuarios")) || [];
}

function setUsuarios(lista){
  localStorage.setItem("usuarios", JSON.stringify(lista));
}


/*===========================
CADASTRO CLIENTE
===========================*/
function cadastrarCliente(){

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const endereco = document.getElementById("endereco").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmarSenha").value;

  const foto = getImagemFinal();

  let usuarios = getUsuarios();

  if(usuarios.find(u => u.email === email)){
    alert("E-mail já cadastrado!");
    return;
  }

  if(senha !== confirmarSenha){
    alert("Senhas não coincidem!");
    return;
  }

  usuarios.push({
    nome,
    telefone,
    endereco,
    email,
    senha,
    foto,
    tipo: "cliente"
  });

  setUsuarios(usuarios);

  alert("Cadastro realizado!");
  window.location.href = "../index.html";
}


/*===========================
LOGIN
===========================*/
function login(){

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const usuarios = getUsuarios();

  const usuario = usuarios.find(u => u.email === email && u.senha === senha);

  if(!usuario){
    alert("Email ou senha inválidos!");
    return;
  }

  localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

  if(usuario.tipo === "cliente"){
    window.location.href = "cadastro/cliente-home.html";
  }else{
    window.location.href = "cadastro/motorista.html";
  }
}


/*===========================
MOSTRAR / OCULTAR SENHA
===========================*/
function toggleSenha(id){

  const input = document.getElementById(id);
  const container = input.parentElement;

  const eyeOpen = container.querySelector(".eye-open");
  const eyeClosed = container.querySelector(".eye-closed");

  if(input.type === "password"){
    input.type = "text";
    eyeOpen.style.display = "none";
    eyeClosed.style.display = "block";
  }else{
    input.type = "password";
    eyeOpen.style.display = "block";
    eyeClosed.style.display = "none";
  }

}


/*===========================
FOTO COM AJUSTE MANUAL
===========================*/
document.addEventListener("DOMContentLoaded", () => {

  const input = document.getElementById("foto");
  const canvas = document.getElementById("canvasFoto");

  if(!input || !canvas) return;

  const ctx = canvas.getContext("2d");

  let img = new Image();
  let scale = 1;
  let posX = 0;
  let posY = 0;
  let dragging = false;
  let startX, startY;

  canvas.width = 300;
  canvas.height = 300;

  function desenhar(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    const w = img.width * scale;
    const h = img.height * scale;

    ctx.drawImage(img, posX, posY, w, h);
  }

  input.addEventListener("change", function(){

    const file = this.files[0];
    if(!file) return;

    const reader = new FileReader();

    reader.onload = function(e){

      img.onload = function(){

        scale = Math.max(
          canvas.width / img.width,
          canvas.height / img.height
        );

        posX = (canvas.width - img.width * scale) / 2;
        posY = (canvas.height - img.height * scale) / 2;

        desenhar();
      };

      img.src = e.target.result;
    };

    reader.readAsDataURL(file);
  });

  canvas.addEventListener("touchstart", e=>{
    dragging = true;
    startX = e.touches[0].clientX - posX;
    startY = e.touches[0].clientY - posY;
  });

  canvas.addEventListener("touchmove", e=>{
    if(!dragging) return;

    posX = e.touches[0].clientX - startX;
    posY = e.touches[0].clientY - startY;

    desenhar();
  });

  canvas.addEventListener("touchend", ()=>{
    dragging = false;
  });

  window.zoomIn = function(){
    scale += 0.1;
    desenhar();
  }

  window.zoomOut = function(){
    scale -= 0.1;
    desenhar();
  }

  window.getImagemFinal = function(){
    return canvas.toDataURL("image/png");
  }

});

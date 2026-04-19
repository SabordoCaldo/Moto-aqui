let tipoSelecionado = null;

function selecionarTipo(tipo){
  tipoSelecionado = tipo;
  validar();
}

function validar(){
  const cidade = document.getElementById("cidade").value;
  const termos = document.getElementById("termosCheck").checked;
  const btn = document.getElementById("btnContinuar");

  if(tipoSelecionado && cidade && termos){
    btn.disabled = false;
  }else{
    btn.disabled = true;
  }
}

function continuar(){

  localStorage.setItem("tipoCadastro", tipoSelecionado);
  localStorage.setItem("cidade", document.getElementById("cidade").value);

  if(tipoSelecionado === "cliente"){
    window.location.href = "cliente.html";
  }else{
    window.location.href = "motorista.html";
  }
}

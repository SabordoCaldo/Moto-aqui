function enviarMotorista(){

  const nome = document.getElementById("nome").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const endereco = document.getElementById("endereco").value.trim();
  const cnh = document.getElementById("cnh").value.trim();
  const arquivo = document.getElementById("inputCNH").files[0];

  const senha = document.getElementById("senha").value;
  const confirmar = document.getElementById("confirmar").value;

  if(!nome){
    alert("Digite seu nome");
    return;
  }

  if(!telefone){
    alert("Digite seu telefone");
    return;
  }

  if(!endereco){
    alert("Digite seu endereço");
    return;
  }

  if(!cnh){
    alert("Digite o número da CNH");
    return;
  }

  if(cnh.length !== 11){
    alert("CNH deve ter 11 números");
    return;
  }

  if(!arquivo){
    alert("Envie a CNH (foto ou PDF)");
    return;
  }

  if(senha.length < 4){
    alert("A senha deve ter no mínimo 4 dígitos");
    return;
  }

  if(senha !== confirmar){
    alert("As senhas não coincidem");
    return;
  }

  localStorage.setItem("motorista_nome", nome);
  localStorage.setItem("motorista_status", "pendente");

  alert("Cadastro enviado para aprovação!");

  window.location.href = "../index.html";
}

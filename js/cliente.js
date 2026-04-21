function cadastrar(){

  const nome = document.getElementById("nome").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const endereco = document.getElementById("endereco").value.trim();
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

  if(senha.length < 4){
    alert("A senha deve ter no mínimo 4 dígitos");
    return;
  }

  if(senha !== confirmar){
    alert("As senhas não coincidem");
    return;
  }

  localStorage.setItem("cliente_nome", nome);
  localStorage.setItem("cliente_telefone", telefone);
  localStorage.setItem("cliente_endereco", endereco);

  window.location.href = "cliente-home.html";
}

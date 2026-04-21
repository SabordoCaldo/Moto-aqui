function cadastrar(){

  const nome = document.getElementById("nome").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const endereco = document.getElementById("endereco").value.trim();
  const senha = document.getElementById("senha").value;
  const confirmar = document.getElementById("confirmar").value;

  if(!nome) return alert("Digite seu nome");
  if(!telefone) return alert("Digite seu telefone");
  if(!endereco) return alert("Digite seu endereço");

  if(senha.length < 4){
    return alert("A senha deve ter no mínimo 4 dígitos");
  }

  if(senha !== confirmar){
    return alert("As senhas não coincidem");
  }

  alert("Cadastro concluído com sucesso! Aproveite nosso aplicativo de mobilidade urbana 🚀");

  window.location.href = "cliente-home.html";
}

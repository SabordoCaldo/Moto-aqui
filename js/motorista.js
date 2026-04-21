function enviarMotorista(){

  const nome = document.getElementById("nome").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const endereco = document.getElementById("endereco").value.trim();
  const cnh = document.getElementById("cnh").value.trim();
  const arquivo = document.getElementById("inputCNH").files[0];

  const senha = document.getElementById("senha").value;
  const confirmar = document.getElementById("confirmar").value;

  if(!nome) return alert("Digite seu nome");
  if(!telefone) return alert("Digite seu telefone");
  if(!endereco) return alert("Digite seu endereço");
  if(!cnh) return alert("Digite a CNH");
  if(!arquivo) return alert("Envie a CNH");

  if(senha.length < 4){
    return alert("Senha mínima 4 dígitos");
  }

  if(senha !== confirmar){
    return alert("Senhas não coincidem");
  }

  alert("Obrigado pelo seu cadastro! Vamos avaliar seus dados e te enviaremos uma resposta 🚀");

  window.location.href = "../index.html";
}

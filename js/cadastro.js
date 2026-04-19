function cadastrarCliente(){

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  if(usuarios.find(u => u.email === email)){
    alert("Email já cadastrado");
    return;
  }

  const usuario = {
    nome,
    email,
    senha,
    tipo: "cliente",
    cidade: localStorage.getItem("cidade")
  };

  usuarios.push(usuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  localStorage.setItem("logado", JSON.stringify(usuario));

  alert("Cadastro realizado!");
  window.location.href = "cliente-home.html";
}


function cadastrarMotorista(){

  const nome = document.getElementById("nome").value;
  const cnh = document.getElementById("cnh").value;
  const veiculo = document.getElementById("veiculo").value;
  const placa = document.getElementById("placa").value;

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const motorista = {
    nome,
    cnh,
    veiculo,
    placa,
    tipo: "motorista",
    status: "pendente"
  };

  usuarios.push(motorista);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  alert("Enviado para aprovação!");
  window.location.href = "../index.html";
}

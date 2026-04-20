function getArquivoCidade(cidade){

  switch(cidade){

    case "Passos":
      return "../cidades/passos.js";

    case "Alpinópolis":
      return "../cidades/alpinopolis.js";

    case "Bom Jesus da Penha":
      return "../cidades/bom-jesus.js";

    case "Itaú de Minas":
      return "../cidades/itau.js";

    case "São João Batista do Glória":
      return "../cidades/gloria.js";

    default:
      return null;
  }

}

function continuar(){

  const tipo = document.querySelector('input[name="tipo"]:checked');
  const cidade = document.getElementById("cidade").value;
  const termos = document.getElementById("termos").checked;

  if(!tipo){
    alert("Selecione cliente ou motorista");
    return;
  }

  if(!cidade){
    alert("Selecione a cidade");
    return;
  }

  if(!termos){
    alert("Aceite os termos");
    return;
  }

  const arquivo = getArquivoCidade(cidade);

  if(!arquivo){
    alert("Cidade inválida");
    return;
  }

  const script = document.createElement("script");
  script.src = arquivo;

  script.onload = function(){

    if(!cidadeConfig.ativa){
      alert("Desculpe, ainda não está em sua cidade 😔");
      return;
    }

    localStorage.setItem("cidade", cidade);
    localStorage.setItem("tipo", tipo.value);

    if(tipo.value === "cliente"){
      window.location.href = "cliente.html";
    }else{
      window.location.href = "motorista.html";
    }

  };

  script.onerror = function(){
    alert("Erro ao carregar cidade");
  };

  document.body.appendChild(script);

}

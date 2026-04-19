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

  const cidade = document.getElementById("cidade").value;

  if(!tipoSelecionado){
    alert("Selecione cliente ou motorista");
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
      alert("Ainda não estamos na sua cidade 😔");
      return;
    }

    localStorage.setItem("cidade", cidade);
    localStorage.setItem("tipo", tipoSelecionado);

    if(tipoSelecionado === "cliente"){
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

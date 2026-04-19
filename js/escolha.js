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

async function continuar(){

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

  await import(arquivo);

  if(!cidadeConfig.ativa){
    alert("Ainda não estamos na sua cidade 😔\nMas chegaremos em breve!");
    return;
  }

  localStorage.setItem("cidade", cidade);
  localStorage.setItem("tipo", tipo.value);

  if(tipo.value === "cliente"){
    window.location.href = "cliente.html";
  }else{
    window.location.href = "motorista.html";
  }

}

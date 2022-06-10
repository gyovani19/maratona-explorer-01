    
const elementoResposta = document.querySelector("#response")
const inputPergunta = document.querySelector("#caixadetexto")
const botao = document.querySelector("botao")
function response() {

  if(inputPergunta.value == "") {
    alert("Digite sua pergunta")
    return
  }

  
  const pergunta = "<div>"  + inputPergunta.value  + "</div>";
  
 
  
  var list = [
      "Talvez sim, talvez não...",
      "As imagens revelam que sim...",
      "Talvez isso não se concretize",
      "Sim!",
      "Não!",
      "Minhas fontes dizem que sim...",
      "Minhas fontes dizem que não..."
  ];
  var number = Math.floor(Math.random()*7);
  
  document.getElementById("response").innerHTML = pergunta + list[number];
  
  elementoResposta.style.opacity = 1;
    
}

document.getElementById("caixadetexto")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("botao").click();
        
    }

    setTimeout(function() {
      elementoResposta.style.opacity = 0;
    }, 3000)

});


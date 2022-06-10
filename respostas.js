    
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
   'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.'
  ];
  var number = Math.floor(Math.random()*19);
  
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


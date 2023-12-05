

alert("Boas vindas ao jogo do numero secreto");
//Math.random é um gerador de numero aleatoio
//parseInt quando utilizado so vai aparecer a parte inteira
let numeroSecreto = parseInt(Math.random() *100+1);
console.log(numeroSecreto);
let chute ;
let tentativas=1;

//(chute != numeroSecreto) = enquanto o chute (nao for igual / !=) ao numeroSecreto
//while = enquanto
while (chute != numeroSecreto){
    chute = prompt("Escolha um numero entre 1 e 100");
    if(chute == numeroSecreto ){
        break;
         
    }else{
        if( chute > numeroSecreto){
            alert(`O numero secreto é menor que: ${chute}`);
        } else{
            alert( `O numero secreto é maior que: ${chute}`);
        }
        tentativas++;
        
    }
}

let palavraTentativa = tentativas>1 ? "tentativas" : "tentativa";
    alert(`Isso ai! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

//if(tentativas>1){
  //  alert(`Isso ai! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas.`);
//}else{
  //  alert(`Isso ai! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa.`);
//}

















// Observação: código de estudo, portante vai conter baastante anoteções ;D

//Primeiro verificar se todos os elementos da página foram carregados

//Se carregados, pegar todos os squares

document.addEventListener('DOMContentLoaded', ()=>{
  let squares = document.querySelectorAll('.square')
  console.log(squares) // Observe que gera um NodeList**

  squares.forEach((square)=>{
    console.log(square); //Itera cada um dos elementos do Nodelist
    square.addEventListener('click', handleClick) // E adiciona a função handleClick nos eventos clicks
  })

})

function handleClick(element){
 let square = element.target
 let position = square.id 

 //Agora eu consigo pegar a posição de cada item que foi clicado e passo essa posição para a regra do jogo, de modo a adicionar essa informação no board.

if(playerMove(position)){
  setTimeout(()=>{alert('O jogo acabou - vencedor foi o Jogador: ' + playerTime)}, 20)
} // Regra de negócio
updatingSquareRender(position) //Renderização da jogada

}


function updatingSquareRender(position){
  let renderSquare = document.getElementById(position.toString())
  let sqSymbol = board[position]
  if (sqSymbol != ''){
    renderSquare.innerHTML = `<div class="${sqSymbol}"></div>`
  }
}

/* VERSÃO ANTERIOR  A REFATORAÇÃO */
// function updatingSquareRender(){
//   let squares = document.querySelectorAll('.square')
  
//   squares.forEach((element)=>{
//     let position = element.id
//     let sqSymbol = board[position]

//     if (sqSymbol != ''){
//       element.innerHTML = `<div class="${sqSymbol}"></div>`
//     }
    
//   })
// }


// 💡 NodeList: pode ser vivo ou estático, se trata de coleções dos elementos DOM obtidos.
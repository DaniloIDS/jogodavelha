// Board irá conter os itens que estão dentro de cada square (vazio, circ ou xis)

let board = ['','','','','','','','','',]
let playerTime = 0
let symbols = ['o', 'x']
let gamerOver = false;


function playerMove(position){

  if(gamerOver){
    return;
  }
  
  // console.log("Player antes do movimento", playerTime)

  if (board[position] == ''){
    board[position] = symbols[playerTime]

    if(playerTime == 0) {
      playerTime = 1
    }else{
      playerTime = 0
    }
  }

  // console.log("Player depois do movimento", playerTime)

}

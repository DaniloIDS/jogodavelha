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

    gamerOver = isWin();

    if(gamerOver == false){
      if(playerTime == 0) {
        playerTime = 1
      }else{
        playerTime = 0
      }
    }
  }

  return gamerOver
  // console.log("Player depois do movimento", playerTime)

}


function isWin(){
  let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [6, 4, 2],
    [0, 4, 8]
  ]

  for(let i = 0; i < winStates.length; i++){
    let seq = winStates[i]

    let pos1 = seq[0]
    let pos2 = seq[1]
    let pos3 = seq[2]

    if( board[pos1] == board[pos2] &&
        board[pos1] == board[pos3] &&
        board[pos1] != ''){
          return true;
    }
  }

  return false
}
import jsChessEngine from 'js-chess-engine'
import { chessAnalysisApi, PROVIDERS } from 'chess-analysis-api'
const game = new jsChessEngine.Game()
game.move("D2","D4")
game.move("D7","D5")
game.move("C2","C4")
game.move("C7","C6")

game.move("B1","C3")
game.move("G8","F6")

game.move("G1","F3")
game.move("D5","C4")

game.move("A2","A4")
game.move("E7","E6")

game.move("C1","G5")
game.move("F8","B4")

game.move("E2","E4")
game.move("D8","A5")

game.move("G5","D2")


game.printToConsole()

let FEN = game.exportFEN()

let res 
chessAnalysisApi.getAnalysis({

  fen: FEN,

  depth: 20,

  multipv: 4,
  // excludes: [
  //   PROVIDERS.LICHESS_BOOK,
  //   PROVIDERS.LICHESS_CLOUD_EVAL
  // ]
})

.then((result) => {

  console.log(result)
})

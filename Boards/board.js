Board = {};

Board.Row = {};

InitalBoard = {};
InitalBoard.Row = {};
InitalBoard.Row.R1 = ["<img src='Images/BlackRook.png'>","<img src='Images/BlackKnight.png'>","<img src='Images/BlackBishop.png'>","<img src='Images/BlackQueen.png'>","<img src='Images/BlackKing.png'>","<img src='Images/BlackBishop.png'>","<img src='Images/BlackKnight.png'>","<img src='Images/BlackRook.png'>"];
InitalBoard.Row.R2 = ["<img src='Images/BlackPawn.png'>","<img src='Images/BlackPawn.png'>","<img src='Images/BlackPawn.png'>","<img src='Images/BlackPawn.png'>","<img src='Images/BlackPawn.png'>","<img src='Images/BlackPawn.png'>","<img src='Images/BlackPawn.png'>","<img src='Images/BlackPawn.png'>"];
InitalBoard.Row.R3 = ["","","","","","","",""];
InitalBoard.Row.R4 = ["","","","","","","",""];
InitalBoard.Row.R5 = ["","","","","","","",""];
InitalBoard.Row.R6 = ["","","","","","","",""];
InitalBoard.Row.R7 = ["<img src='Images/WhitePawn.png'>","<img src='Images/WhitePawn.png'>","<img src='Images/WhitePawn.png'>","<img src='Images/WhitePawn.png'>","<img src='Images/WhitePawn.png'>","<img src='Images/WhitePawn.png'>","<img src='Images/WhitePawn.png'>","<img src='Images/WhitePawn.png'>"];
InitalBoard.Row.R8 = ["<img src='Images/WhiteRook.png'>","<img src='Images/WhiteKnight.png'>","<img src='Images/WhiteBishop.png'>","<img src='Images/WhiteQueen.png'>","<img src='Images/WhiteKing.png'>","<img src='Images/WhiteBishop.png'>","<img src='Images/WhiteKnight.png'>","<img src='Images/WhiteRook.png'>"];

Board.Row.R1 = ["","","","","","","",""];
Board.Row.R2 = ["","","","","","","",""];
Board.Row.R3 = ["","","","","","","",""];
Board.Row.R4 = ["","","","","","","",""];
Board.Row.R5 = ["","","","","","","",""];
Board.Row.R6 = ["","","","","","","",""];
Board.Row.R7 = ["","","","","","","",""];
Board.Row.R8 = ["","","","","","","",""];

Board.Reset = function(){
	Board.Row = InitalBoard.Row;
	console.log("Board Reset");
}
Queen = {};
Queen.BlackIMG = "<img src='Images/BlackQueen.png'>";
Queen.WhiteIMG = "<img src='Images/WhiteQueen.png'>";

setQueens = function(){
	Queen.SetWhite();
	Queen.SetBlack();
	Update();
}

Queen.SetWhite = function(){
	Queen.WhiteQueen_1 = {};
	Queen.WhiteQueen_1.POS = [4,8];

	Board.Row[Queen.WhiteQueen_1.POS[1]-1][Queen.WhiteQueen_1.POS[0]-1] = Queen.WhiteIMG;
}

Queen.SetBlack = function(){
	Queen.BlackQueen_1 = {};
	Queen.BlackQueen_1.POS = [4,1];

	Board.Row[Queen.BlackQueen_1.POS[1]-1][Queen.BlackQueen_1.POS[0]-1] = Queen.BlackIMG;
}

setQueens();
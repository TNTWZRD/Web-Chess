King = {};
King.BlackIMG = "<img src='Images/BlackKing.png'>";
King.WhiteIMG = "<img src='Images/WhiteKing.png'>";

setKings = function(){
	King.SetWhite();
	King.SetBlack();
	Update();
}

King.SetWhite = function(){
	King.WhiteKing_1 = {};
	King.WhiteKing_1.POS = [5,8];

	Board.Row[King.WhiteKing_1.POS[1]-1][King.WhiteKing_1.POS[0]-1] = King.WhiteIMG;
}

King.SetBlack = function(){
	King.BlackKing_1 = {};
	King.BlackKing_1.POS = [5,1];

	Board.Row[King.BlackKing_1.POS[1]-1][King.BlackKing_1.POS[0]-1] = King.BlackIMG;
}

setKings();
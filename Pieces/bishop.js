Bishop = {};
Bishop.BlackIMG = "<img src='Images/BlackBishop.png'>";
Bishop.WhiteIMG = "<img src='Images/WhiteBishop.png'>";

setBishops = function(){
	Bishop.SetWhite();
	Bishop.SetBlack();
	Update();
}

Bishop.SetWhite = function(){
	Bishop.WhiteBishop_1 = {};
	Bishop.WhiteBishop_1.POS = [3,8];
	Bishop.WhiteBishop_2 = {};
	Bishop.WhiteBishop_2.POS = [6,8];

	Board.Row[Bishop.WhiteBishop_1.POS[1]-1][Bishop.WhiteBishop_1.POS[0]-1] = Bishop.WhiteIMG;
	Board.Row[Bishop.WhiteBishop_2.POS[1]-1][Bishop.WhiteBishop_2.POS[0]-1] = Bishop.WhiteIMG;
}

Bishop.SetBlack = function(){
	Bishop.BlackBishop_1 = {};
	Bishop.BlackBishop_1.POS = [3,1];
	Bishop.BlackBishop_2 = {};
	Bishop.BlackBishop_2.POS = [6,1];

	Board.Row[Bishop.BlackBishop_1.POS[1]-1][Bishop.BlackBishop_1.POS[0]-1] = Bishop.BlackIMG;
	Board.Row[Bishop.BlackBishop_2.POS[1]-1][Bishop.BlackBishop_2.POS[0]-1] = Bishop.BlackIMG;
}

setBishops();
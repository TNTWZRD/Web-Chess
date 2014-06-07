Knight = {};
Knight.BlackIMG = "<img src='Images/BlackKnight.png'>";
Knight.WhiteIMG = "<img src='Images/WhiteKnight.png'>";

setKnights = function(){
	Knight.SetWhite();
	Knight.SetBlack();
	Update();
}

Knight.SetWhite = function(){
	Knight.WhiteKnight_1 = {};
	Knight.WhiteKnight_1.POS = [2,8];
	Knight.WhiteKnight_2 = {};
	Knight.WhiteKnight_2.POS = [7,8];

	Board.Row[Knight.WhiteKnight_1.POS[1]-1][Knight.WhiteKnight_1.POS[0]-1] = Knight.WhiteIMG;
	Board.Row[Knight.WhiteKnight_2.POS[1]-1][Knight.WhiteKnight_2.POS[0]-1] = Knight.WhiteIMG;
}

Knight.SetBlack = function(){
	Knight.BlackKnight_1 = {};
	Knight.BlackKnight_1.POS = [2,1];
	Knight.BlackKnight_2 = {};
	Knight.BlackKnight_2.POS = [7,1];

	Board.Row[Knight.BlackKnight_1.POS[1]-1][Knight.BlackKnight_1.POS[0]-1] = Knight.BlackIMG;
	Board.Row[Knight.BlackKnight_2.POS[1]-1][Knight.BlackKnight_2.POS[0]-1] = Knight.BlackIMG;
}

setKnights();
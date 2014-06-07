Rook = {};
Rook.BlackIMG = "<img src='Images/BlackRook.png'>";
Rook.WhiteIMG = "<img src='Images/WhiteRook.png'>";

setrooks = function(){
	Rook.SetWhite();
	Rook.SetBlack();
	Update();
}

Rook.SetWhite = function(){
	Rook.WhiteRook_1 = {};
	Rook.WhiteRook_1.POS = [1,8];
	Rook.WhiteRook_2 = {};
	Rook.WhiteRook_2.POS = [8,8];

	Board.Row[Rook.WhiteRook_1.POS[1]-1][Rook.WhiteRook_1.POS[0]-1] = Rook.WhiteIMG;
	Board.Row[Rook.WhiteRook_2.POS[1]-1][Rook.WhiteRook_2.POS[0]-1] = Rook.WhiteIMG;
}

Rook.SetBlack = function(){
	Rook.BlackRook_1 = {};
	Rook.BlackRook_1.POS = [1,1];
	Rook.BlackRook_2 = {};
	Rook.BlackRook_2.POS = [8,1];

	Board.Row[Rook.BlackRook_1.POS[1]-1][Rook.BlackRook_1.POS[0]-1] = Rook.BlackIMG;
	Board.Row[Rook.BlackRook_2.POS[1]-1][Rook.BlackRook_2.POS[0]-1] = Rook.BlackIMG;
}

setrooks();
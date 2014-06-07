Pawn = {};
Pawn.BlackIMG = "<img src='Images/BlackPawn.png'>";
Pawn.WhiteIMG = "<img src='Images/WhitePawn.png'>";

setpawns = function(){
	Pawn.Setwhite();
	Pawn.SetBlack();
	Update();
}


Pawn.Setwhite = function(){
	Pawn.WhitePawn_1 = {};
	Pawn.WhitePawn_1.POS = [1,7];
	Pawn.WhitePawn_2 = {};
	Pawn.WhitePawn_2.POS = [2,7];
	Pawn.WhitePawn_3 = {};
	Pawn.WhitePawn_3.POS = [3,7];
	Pawn.WhitePawn_4 = {};
	Pawn.WhitePawn_4.POS = [4,7];
	Pawn.WhitePawn_5 = {};
	Pawn.WhitePawn_5.POS = [5,7];
	Pawn.WhitePawn_6 = {};
	Pawn.WhitePawn_6.POS = [6,7];
	Pawn.WhitePawn_7 = {};
	Pawn.WhitePawn_7.POS = [7,7];
	Pawn.WhitePawn_8 = {};
	Pawn.WhitePawn_8.POS = [8,7];

	Board.Row[Pawn.WhitePawn_1.POS[1]-1][Pawn.WhitePawn_1.POS[0]-1] = Pawn.WhiteIMG;
	Board.Row[Pawn.WhitePawn_2.POS[1]-1][Pawn.WhitePawn_2.POS[0]-1] = Pawn.WhiteIMG;
	Board.Row[Pawn.WhitePawn_3.POS[1]-1][Pawn.WhitePawn_3.POS[0]-1] = Pawn.WhiteIMG;
	Board.Row[Pawn.WhitePawn_4.POS[1]-1][Pawn.WhitePawn_4.POS[0]-1] = Pawn.WhiteIMG;
	Board.Row[Pawn.WhitePawn_5.POS[1]-1][Pawn.WhitePawn_5.POS[0]-1] = Pawn.WhiteIMG;
	Board.Row[Pawn.WhitePawn_6.POS[1]-1][Pawn.WhitePawn_6.POS[0]-1] = Pawn.WhiteIMG;
	Board.Row[Pawn.WhitePawn_7.POS[1]-1][Pawn.WhitePawn_7.POS[0]-1] = Pawn.WhiteIMG;
	Board.Row[Pawn.WhitePawn_8.POS[1]-1][Pawn.WhitePawn_8.POS[0]-1] = Pawn.WhiteIMG;
}

Pawn.SetBlack = function(){
	Pawn.BlackPawn_1 = {};
	Pawn.BlackPawn_1.POS = [1,2];
	Pawn.BlackPawn_2 = {};
	Pawn.BlackPawn_2.POS = [2,2];
	Pawn.BlackPawn_3 = {};
	Pawn.BlackPawn_3.POS = [3,2];
	Pawn.BlackPawn_4 = {};
	Pawn.BlackPawn_4.POS = [4,2];
	Pawn.BlackPawn_5 = {};
	Pawn.BlackPawn_5.POS = [5,2];
	Pawn.BlackPawn_6 = {};
	Pawn.BlackPawn_6.POS = [6,2];
	Pawn.BlackPawn_7 = {};
	Pawn.BlackPawn_7.POS = [7,2];
	Pawn.BlackPawn_8 = {};
	Pawn.BlackPawn_8.POS = [8,2];

	Board.Row[Pawn.BlackPawn_1.POS[1]-1][Pawn.BlackPawn_1.POS[0]-1] = Pawn.BlackIMG;
	Board.Row[Pawn.BlackPawn_2.POS[1]-1][Pawn.BlackPawn_2.POS[0]-1] = Pawn.BlackIMG;
	Board.Row[Pawn.BlackPawn_3.POS[1]-1][Pawn.BlackPawn_3.POS[0]-1] = Pawn.BlackIMG;
	Board.Row[Pawn.BlackPawn_4.POS[1]-1][Pawn.BlackPawn_4.POS[0]-1] = Pawn.BlackIMG;
	Board.Row[Pawn.BlackPawn_5.POS[1]-1][Pawn.BlackPawn_5.POS[0]-1] = Pawn.BlackIMG;
	Board.Row[Pawn.BlackPawn_6.POS[1]-1][Pawn.BlackPawn_6.POS[0]-1] = Pawn.BlackIMG;
	Board.Row[Pawn.BlackPawn_7.POS[1]-1][Pawn.BlackPawn_7.POS[0]-1] = Pawn.BlackIMG;
	Board.Row[Pawn.BlackPawn_8.POS[1]-1][Pawn.BlackPawn_8.POS[0]-1] = Pawn.BlackIMG;
}

setpawns();
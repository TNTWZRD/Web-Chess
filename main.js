Main = {};

Update = function() {

	// Row 1
	document.getElementById("1,1").innerHTML = Board.Row[0][0];
	document.getElementById("2,1").innerHTML = Board.Row[0][1];
	document.getElementById("3,1").innerHTML = Board.Row[0][2];
	document.getElementById("4,1").innerHTML = Board.Row[0][3];
	document.getElementById("5,1").innerHTML = Board.Row[0][4];
	document.getElementById("6,1").innerHTML = Board.Row[0][5];
	document.getElementById("7,1").innerHTML = Board.Row[0][6];
	document.getElementById("8,1").innerHTML = Board.Row[0][7];

	// Row 2
	document.getElementById("1,2").innerHTML = Board.Row[1][0];
	document.getElementById("2,2").innerHTML = Board.Row[1][1];
	document.getElementById("3,2").innerHTML = Board.Row[1][2];
	document.getElementById("4,2").innerHTML = Board.Row[1][3];
	document.getElementById("5,2").innerHTML = Board.Row[1][4];
	document.getElementById("6,2").innerHTML = Board.Row[1][5];
	document.getElementById("7,2").innerHTML = Board.Row[1][6];
	document.getElementById("8,2").innerHTML = Board.Row[1][7];

	// Row 3
	document.getElementById("1,3").innerHTML = Board.Row[2][0];
	document.getElementById("2,3").innerHTML = Board.Row[2][1];
	document.getElementById("3,3").innerHTML = Board.Row[2][2];
	document.getElementById("4,3").innerHTML = Board.Row[2][3];
	document.getElementById("5,3").innerHTML = Board.Row[2][4];
	document.getElementById("6,3").innerHTML = Board.Row[2][5];
	document.getElementById("7,3").innerHTML = Board.Row[2][6];
	document.getElementById("8,3").innerHTML = Board.Row[2][7];

	// Row 4
	document.getElementById("1,4").innerHTML = Board.Row[3][0];
	document.getElementById("2,4").innerHTML = Board.Row[3][1];
	document.getElementById("3,4").innerHTML = Board.Row[3][2];
	document.getElementById("4,4").innerHTML = Board.Row[3][3];
	document.getElementById("5,4").innerHTML = Board.Row[3][4];
	document.getElementById("6,4").innerHTML = Board.Row[3][5];
	document.getElementById("7,4").innerHTML = Board.Row[3][6];
	document.getElementById("8,4").innerHTML = Board.Row[3][7];

	// Row 5
	document.getElementById("1,5").innerHTML = Board.Row[4][0];
	document.getElementById("2,5").innerHTML = Board.Row[4][1];
	document.getElementById("3,5").innerHTML = Board.Row[4][2];
	document.getElementById("4,5").innerHTML = Board.Row[4][3];
	document.getElementById("5,5").innerHTML = Board.Row[4][4];
	document.getElementById("6,5").innerHTML = Board.Row[4][5];
	document.getElementById("7,5").innerHTML = Board.Row[4][6];
	document.getElementById("8,5").innerHTML = Board.Row[4][7];

	// Row 6
	document.getElementById("1,6").innerHTML = Board.Row[5][0];
	document.getElementById("2,6").innerHTML = Board.Row[5][1];
	document.getElementById("3,6").innerHTML = Board.Row[5][2];
	document.getElementById("4,6").innerHTML = Board.Row[5][3];
	document.getElementById("5,6").innerHTML = Board.Row[5][4];
	document.getElementById("6,6").innerHTML = Board.Row[5][5];
	document.getElementById("7,6").innerHTML = Board.Row[5][6];
	document.getElementById("8,6").innerHTML = Board.Row[5][7];

	// Row 7
	document.getElementById("1,7").innerHTML = Board.Row[6][0];
	document.getElementById("2,7").innerHTML = Board.Row[6][1];
	document.getElementById("3,7").innerHTML = Board.Row[6][2];
	document.getElementById("4,7").innerHTML = Board.Row[6][3];
	document.getElementById("5,7").innerHTML = Board.Row[6][4];
	document.getElementById("6,7").innerHTML = Board.Row[6][5];
	document.getElementById("7,7").innerHTML = Board.Row[6][6];
	document.getElementById("8,7").innerHTML = Board.Row[6][7];

	// Row 8
	document.getElementById("1,8").innerHTML = Board.Row[7][0];
	document.getElementById("2,8").innerHTML = Board.Row[7][1];
	document.getElementById("3,8").innerHTML = Board.Row[7][2];
	document.getElementById("4,8").innerHTML = Board.Row[7][3];
	document.getElementById("5,8").innerHTML = Board.Row[7][4];
	document.getElementById("6,8").innerHTML = Board.Row[7][5];
	document.getElementById("7,8").innerHTML = Board.Row[7][6];
	document.getElementById("8,8").innerHTML = Board.Row[7][7];

		document.getElementById("2,1").style.backgroundColor = "Grey";
		document.getElementById("4,1").style.backgroundColor = "Grey";
		document.getElementById("6,1").style.backgroundColor = "Grey";
		document.getElementById("8,1").style.backgroundColor = "Grey";
		
		document.getElementById("1,2").style.backgroundColor = "Grey";
		document.getElementById("3,2").style.backgroundColor = "Grey";
		document.getElementById("5,2").style.backgroundColor = "Grey";
		document.getElementById("7,2").style.backgroundColor = "Grey";

		document.getElementById("2,3").style.backgroundColor = "Grey";
		document.getElementById("4,3").style.backgroundColor = "Grey";
		document.getElementById("6,3").style.backgroundColor = "Grey";
		document.getElementById("8,3").style.backgroundColor = "Grey";

		document.getElementById("1,4").style.backgroundColor = "Grey";
		document.getElementById("3,4").style.backgroundColor = "Grey";
		document.getElementById("5,4").style.backgroundColor = "Grey";
		document.getElementById("7,4").style.backgroundColor = "Grey";

		document.getElementById("2,5").style.backgroundColor = "Grey";
		document.getElementById("4,5").style.backgroundColor = "Grey";
		document.getElementById("6,5").style.backgroundColor = "Grey";
		document.getElementById("8,5").style.backgroundColor = "Grey";
		
		document.getElementById("1,6").style.backgroundColor = "Grey";
		document.getElementById("3,6").style.backgroundColor = "Grey";
		document.getElementById("5,6").style.backgroundColor = "Grey";
		document.getElementById("7,6").style.backgroundColor = "Grey";

		document.getElementById("2,7").style.backgroundColor = "Grey";
		document.getElementById("4,7").style.backgroundColor = "Grey";
		document.getElementById("6,7").style.backgroundColor = "Grey";
		document.getElementById("8,7").style.backgroundColor = "Grey";

		document.getElementById("1,8").style.backgroundColor = "Grey";
		document.getElementById("3,8").style.backgroundColor = "Grey";
		document.getElementById("5,8").style.backgroundColor = "Grey";
		document.getElementById("7,8").style.backgroundColor = "Grey";
		

		document.getElementById("1,1").style.backgroundColor = "Silver";
		document.getElementById("3,1").style.backgroundColor = "Silver";
		document.getElementById("5,1").style.backgroundColor = "Silver";
		document.getElementById("7,1").style.backgroundColor = "Silver";
		
		document.getElementById("2,2").style.backgroundColor = "Silver";
		document.getElementById("4,2").style.backgroundColor = "Silver";
		document.getElementById("6,2").style.backgroundColor = "Silver";
		document.getElementById("8,2").style.backgroundColor = "Silver";

		document.getElementById("1,3").style.backgroundColor = "Silver";
		document.getElementById("3,3").style.backgroundColor = "Silver";
		document.getElementById("5,3").style.backgroundColor = "Silver";
		document.getElementById("7,3").style.backgroundColor = "Silver";

		document.getElementById("2,4").style.backgroundColor = "Silver";
		document.getElementById("4,4").style.backgroundColor = "Silver";
		document.getElementById("6,4").style.backgroundColor = "Silver";
		document.getElementById("8,4").style.backgroundColor = "Silver";

		document.getElementById("1,5").style.backgroundColor = "Silver";
		document.getElementById("3,5").style.backgroundColor = "Silver";
		document.getElementById("5,5").style.backgroundColor = "Silver";
		document.getElementById("7,5").style.backgroundColor = "Silver";
		
		document.getElementById("2,6").style.backgroundColor = "Silver";
		document.getElementById("4,6").style.backgroundColor = "Silver";
		document.getElementById("6,6").style.backgroundColor = "Silver";
		document.getElementById("8,6").style.backgroundColor = "Silver";

		document.getElementById("1,7").style.backgroundColor = "Silver";
		document.getElementById("3,7").style.backgroundColor = "Silver";
		document.getElementById("5,7").style.backgroundColor = "Silver";
		document.getElementById("7,7").style.backgroundColor = "Silver";

		document.getElementById("2,8").style.backgroundColor = "Silver";
		document.getElementById("4,8").style.backgroundColor = "Silver";
		document.getElementById("6,8").style.backgroundColor = "Silver";
		document.getElementById("8,8").style.backgroundColor = "Silver";
}

Update();
<!DOCTYPE html>

<html>

<head>
	<link rel="icon" type="image/ico" href="Images/favicon.ico">
<title>
Web Chess
</title>
</head>

<body style="background-color: black;">

<table style="text-align: center; color: red; margin-left: auto; margin-right: auto;">
	<tr>
		<td></td>
		<td style="color: silver; background-color: black;">A</td>
		<td style="color: silver; background-color: black;">B</td>
		<td style="color: silver; background-color: black;">C</td>
		<td style="color: silver; background-color: black;">D</td>
		<td style="color: silver; background-color: black;">E</td>
		<td style="color: silver; background-color: black;">F</td>
		<td style="color: silver; background-color: black;">G</td>
		<td style="color: silver; background-color: black;">H</td>
		<td></td>
	</tr>
	<tr width = "64px" height = "64px">
		<td style="color: silver; background-color: black;">1</td>
		<td id="1,1"  width = "64px">1,1</td>
		<td id="2,1"  width = "64px">2,1</td>
		<td id="3,1"  width = "64px">3,1</td>
		<td id="4,1"  width = "64px">4,1</td>
		<td id="5,1"  width = "64px">5,1</td>
		<td id="6,1"  width = "64px">6,1</td>
		<td id="7,1"  width = "64px">7,1</td>
		<td id="8,1"  width = "64px">8,1</td>
		<td style="color: silver; background-color: black;">1</td>
	</tr>
	<tr width = "64px" height = "64px">
		<td style="color: silver; background-color: black;">2</td>
		<td id="1,2"  width = "64px">1,2</td>
		<td id="2,2"  width = "64px">2,2</td>
		<td id="3,2"  width = "64px">3,2</td>
		<td id="4,2"  width = "64px">4,2</td>
		<td id="5,2"  width = "64px">5,2</td>
		<td id="6,2"  width = "64px">6,2</td>
		<td id="7,2"  width = "64px">7,2</td>
		<td id="8,2"  width = "64px">8,2</td>
		<td style="color: silver; background-color: black;">2</td>
	</tr>
	<tr width = "64px" height = "64px">
		<td style="color: silver; background-color: black;">3</td>
		<td id="1,3"  width = "64px">1,3</td>
		<td id="2,3"  width = "64px">2,3</td>
		<td id="3,3"  width = "64px">3,3</td>
		<td id="4,3"  width = "64px">4,3</td>
		<td id="5,3"  width = "64px">5,3</td>
		<td id="6,3"  width = "64px">6,3</td>
		<td id="7,3"  width = "64px">7,3</td>
		<td id="8,3"  width = "64px">8,3</td>
		<td style="color: silver; background-color: black;">3</td>
	</tr>
	<tr width = "64px" height = "64px">
		<td style="color: silver; background-color: black;">4</td>
		<td id="1,4"  width = "64px">1,4</td>
		<td id="2,4"  width = "64px">2,4</td>
		<td id="3,4"  width = "64px">3,4</td>
		<td id="4,4"  width = "64px">4,4</td>
		<td id="5,4"  width = "64px">5,4</td>
		<td id="6,4"  width = "64px">6,4</td>
		<td id="7,4"  width = "64px">7,4</td>
		<td id="8,4"  width = "64px">8,4</td>
		<td style="color: silver; background-color: black;">4</td>
	</tr>
	<tr width = "64px" height = "64px">
		<td style="color: silver; background-color: black;">5</td>
		<td id="1,5"  width = "64px">1,5</td>
		<td id="2,5"  width = "64px">2,5</td>
		<td id="3,5"  width = "64px">3,5</td>
		<td id="4,5"  width = "64px">4,5</td>
		<td id="5,5"  width = "64px">5,5</td>
		<td id="6,5"  width = "64px">6,5</td>
		<td id="7,5"  width = "64px">7,5</td>
		<td id="8,5"  width = "64px">8,5</td>
		<td style="color: silver; background-color: black;">5</td>
	</tr>
	<tr width = "64px" height = "64px">
		<td style="color: silver; background-color: black;">6</td>
		<td id="1,6"  width = "64px">1,6</td>
		<td id="2,6"  width = "64px">2,6</td>
		<td id="3,6"  width = "64px">3,6</td>
		<td id="4,6"  width = "64px">4,6</td>
		<td id="5,6"  width = "64px">5,6</td>
		<td id="6,6"  width = "64px">6,6</td>
		<td id="7,6"  width = "64px">7,6</td>
		<td id="8,6"  width = "64px">8,6</td>
		<td style="color: silver; background-color: black;">6</td>
	</tr>
	<tr width = "64px" height = "64px">
		<td style="color: silver; background-color: black;">7</td>
		<td id="1,7"  width = "64px">1,7</td>
		<td id="2,7"  width = "64px">2,7</td>
		<td id="3,7"  width = "64px">3,7</td>
		<td id="4,7"  width = "64px">4,7</td>
		<td id="5,7"  width = "64px">5,7</td>
		<td id="6,7"  width = "64px">6,7</td>
		<td id="7,7"  width = "64px">7,7</td>
		<td id="8,7"  width = "64px">8,7</td>
		<td style="color: silver; background-color: black;">7</td>
	</tr>
	<tr width = "64px" height = "64px">
		<td style="color: silver; background-color: black;">8</td>
		<td id="1,8"  width = "64px">1,8</td>
		<td id="2,8"  width = "64px">2,8</td>
		<td id="3,8"  width = "64px">3,8</td>
		<td id="4,8"  width = "64px">4,8</td>
		<td id="5,8"  width = "64px">5,8</td>
		<td id="6,8"  width = "64px">6,8</td>
		<td id="7,8"  width = "64px">7,8</td>
		<td id="8,8"  width = "64px">8,8</td>
		<td style="color: silver; background-color: black;">8</td>
	</tr>
	<tr>
		<td></td>
		<td style="color: silver; background-color: black;">A</td>
		<td style="color: silver; background-color: black;">B</td>
		<td style="color: silver; background-color: black;">C</td>
		<td style="color: silver; background-color: black;">D</td>
		<td style="color: silver; background-color: black;">E</td>
		<td style="color: silver; background-color: black;">F</td>
		<td style="color: silver; background-color: black;">G</td>
		<td style="color: silver; background-color: black;">H</td>
		<td></td>
	</tr>
</table>

<!-- Load Scripts -->
	<script type="text/javascript" src="Boards/board.js"></script>
	<script type="text/javascript" src="main.js"></script>
	<script type="text/javascript" src="Boards/pieces.js"></script>
	<script type="text/javascript" src="Pieces/pawn.js"></script>
	<script type="text/javascript" src="Pieces/rook.js"></script>
	<script type="text/javascript" src="Pieces/bishop.js"></script>
	<script type="text/javascript" src="Pieces/knight.js"></script>
	<script type="text/javascript" src="Pieces/king.js"></script>
	<script type="text/javascript" src="Pieces/queen.js"></script>
	<script type="text/javascript" src="Testfors/testfordiagonal.js"></script>
<!-- End Load Scripts -->
</body>
</html>
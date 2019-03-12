/*
		asign random number to echa criystla 1 - 12.
		aasign random number to the game (target) 9-120
		display target
		on click of gems, sum values to userScore
		compare target vs userScore
		if target reached end game it's a win
		if userScore over target end game its a loose
		reset game new target an gems values
		vars:
		gameOver
		target
		userTotal
		wins
		losses
		gem array
		gemInter
		*/




$(document).ready(function () {

	var wins = 0;
	var losses = 0;
	var target = 0;
	var userTotal = 0;
	var gameOver = false;
	var gem = [0, 0, 0, 0];
	var gemInter = 0;




	//game starts
	resetGame();

	//all events when each crystal is clicked
	$("#gem1").click(function () {
		if (!gameOver) {// only if game is not over
			userTotal = userTotal + gem[0];
			$("#totalScore").text(userTotal);
			winOrLosse();
		}
	});

	$("#gem2").click(function () {
		if (!gameOver) {
			userTotal = userTotal + gem[1];
			$("#totalScore").text(userTotal);
			winOrLosse();
		}
	});

	$("#gem3").click(function () {
		if (!gameOver) {
			userTotal = userTotal + gem[2];
			$("#totalScore").text(userTotal);
			winOrLosse();
		}
	});

	$("#gem4").click(function () {
		if (!gameOver) {
			userTotal = userTotal + gem[3];
			$("#totalScore").text(userTotal);
			winOrLosse();
		}
	});


	function resetGame() {
		target = 0;
		userTotal = 0;
		gemInter = 0;
		gameOver = false;
			for (var i = 0; i < gem.length; i++) {
			gemInter = (Math.floor(Math.random() * 12) + 1);
			//avoid repeated numbers in array
			if (gem[0] === gemInter || gem[1]== gemInter || gem[3]== gemInter) {
				i--;
			}
			else  {
				gem[i] = gemInter;
			}
		}

		target = (Math.floor((Math.random() * 112) + 9));
		$("#totalScore").text(userTotal);
		$("#randomNumber").text(target);
		$("#wins-txt").text(wins);
		$("#losses-txt").text(losses);
		console.log("--------game start---------");
		console.log(target);
		console.log(gem);

	}


	function winOrLosse() {
		if (userTotal == target) {
			console.log(gameOver);
			wins++;
			$()
			gameOver = true;
			console.log("wins.." + wins);
			console.log(gameOver);
			setTimeout(resetGame, 1500);

		}

		else if (userTotal > target) {
			console.log(gameOver);
			losses++;
			gameOver = true;
			console.log("looses.." + losses);
			console.log(gameOver);
			setTimeout(resetGame, 1500);
		}
	}


});
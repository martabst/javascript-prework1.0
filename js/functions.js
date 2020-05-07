function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function computerMove(){
	let computerMove = 'kamien';
	printMessage('Zagralem' + computerMove + 'Jesli Twoj ruch to papier,to wygrywasz!');
}

function playerMove(){
	let playerMove = 'papier';
	playerMove('Zagralem' + playerMove + 'Jesli Twoj ruch to kamien, to wygrywasz!');
}

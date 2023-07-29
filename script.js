function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
// Ping reactions
var reactions = ['Legal :)','Minha nossa o_O','Uau :O','Nhuêê ;_;','Hmm :|',' Boa ;D','Own cuti cut ^-^','Não! >.<','A mimir u.u']
function removePing(){
	var element = document.getElementById("titulo");
	element.classList.remove("animate-ping");
	element.innerHTML = "Subtraia... me ;P"
}
function pingTitle(){
	var element = document.getElementById("titulo");
	element.innerHTML = reactions[Math.floor(Math.random() * reactions.length)];
	element.classList.add("animate-ping");
}

//Gerar número inicial Entre 40 e 49, não divisível por 4
function gerarNumero(){
	a = parseInt(Math.random()*100)
	while(a<40 || a>49){
		a = parseInt(Math.random()*100)
		if(a%4==0){
			a = parseInt(Math.random()*100)
		}
	}
	document.getElementById('numero').innerHTML = a
}

function desabilitarbotoes(booleano){
	var b = document.getElementsByClassName('button')
	for (let i = 0; i < b.length; i++) {
		b[i].disabled = booleano;
	}
}

//Funções recorrentes
function ganhou(){
	pingTitle()
	document.getElementById("titulo").innerHTML='GANHOU!'
}
function perdeu(){
	document.getElementById("titulo").innerHTML='PERDEU HAHA ;P'
}

// Algorítmo do bot
async function enigma(){
	var resto = a%4
	if(resto==0){
		var escolhas=[1,2,3]
		a-=escolhas[Math.floor(Math.random() * escolhas.length)]
	}
	else{
		a-=resto
	}
	document.getElementById('numero').innerHTML = a

	if(a==0){
		perdeu()
	}
	else{
		await sleep(100)
		desabilitarbotoes(false)
	}
}

//Subtração pelo usuário
async function subtraia(x){
	desabilitarbotoes(true)
	a = a-x
	document.getElementById('numero').innerHTML = a
	pingTitle()
	await sleep(900)
	removePing()
	if(a==0){
		ganhou()
	}
	else{
		enigma()
	}
}

var a
gerarNumero()
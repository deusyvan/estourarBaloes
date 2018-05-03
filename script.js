function addBola() {
	var bola = document.createElement("div");
	bola.setAttribute("class", "bola");
	//<div class="bola"></>
	
	var p1 = Math.floor(Math.random() * 500);
	var p2 = Math.floor(Math.random() * 400);
	
	bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;");
	//<div style="left:522px; top:4587px"></div>
	
	bola.setAttribute("onclick", "estourar(this)");
	
	document.body.appendChild(bola);
}

function estourar(elemento) {
	document.body.removeChild(elemento);
}

function iniciar() {
	setInterval(addBola, 1000);
}
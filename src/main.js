/* Manejo del DOM */
const btnType = document.getElementById("type");

btnType.addEventListener("click", ()=> {
	document.getElementById("select_type").style.display = "block";
	document.getElementById("searchBar").style.display = "block";
	$("#select_type").change( ()=> {//que pase algo cuando elegimos una opcion del menú desplegable
		showPercentage(document.getElementById("select_type").value);//Agrego información al article id="info"
		document.getElementById("info").style.display = "block";
	  dropdownMenuOption(document.getElementById("select_type").value);//toma el valor elegido en el menú desplegable. Ej.: "Fire"
	});
});

let dropdownMenuOption = (stringType) => {//RECONOCE EL TIPO ELEGIDO POR EL USUARIO Y ESCRIBE LOS NOMBRES DE POKEMONES DE ESE TIPO
	let arrayPoke = arrayDataType(stringType);//arreglo de pokes del tipo stringType
	document.getElementById("pokes").innerHTML="";//limpiar div en caso de que tenga pokes
	for (let j=0; j<arrayPoke.length; j++) { //recorro el arreglo de pokes
		let node = document.createElement("DIV");//creo el contenedor <div></div>
		//let textNode = document.createTextNode("Hola, soy "+arrayPoke[j].name + ". Los pokemon tipo "+ pokeWeaknesses(arrayPoke[j].name) + " me hacen mucho daño. Aparezco a las "+ arrayPoke[j].spawn_time);//escribo el nombre del poke en la posición j
		
		var img=document.createElement("img");
	    img.src=arrayPoke[j].img;
	    img.id="picture"
	    node.appendChild(img);
		node.appendChild(document.createElement("br"));

		let textNode = document.createTextNode("id: "+arrayPoke[j].id);
		node.appendChild(textNode);		
		node.appendChild(document.createElement("br"));

		textNode = document.createTextNode("name: "+arrayPoke[j].name);
		node.appendChild(textNode);		
		node.appendChild(document.createElement("br"));

		textNode = document.createTextNode("num: " + arrayPoke[j].num + "");
		node.appendChild(textNode);		
		node.appendChild(document.createElement("br"));

		textNode = document.createTextNode("type: "+arrayPoke[j].type);
		node.appendChild(textNode);		
		node.appendChild(document.createElement("br"));

		textNode = document.createTextNode("height: "+arrayPoke[j].height + "");
		node.appendChild(textNode);		
		node.appendChild(document.createElement("br"));

		textNode = document.createTextNode("weight: "+arrayPoke[j].weight + "");
		node.appendChild(textNode);		
		node.appendChild(document.createElement("br"));
		
		textNode = document.createTextNode("altura: "+ arrayPoke[j].height);
		node.appendChild(textNode);	
		node.appendChild(document.createElement("br"));
	
		document.getElementById("pokes").appendChild(node);//agrego el nodo al contenedor con id="pokes"
		node.setAttribute("id", arrayPoke[j].name);//al nodo creado le asigno el id=arrayPoke[j]
	};
};

let showPercentage = (stringType) => {//MOSTRAR PORCENTAJE DE TIPOS POKEMON
	document.getElementById("info").innerHTML="";//limpiar article en caso de que tenga info
	let node = document.createElement("DIV");//creo el contenedor <div></div>
	let textNode = document.createTextNode("El porcentaje de los pokémon tipo "+stringType+ " es "+pokePercentage(stringType).toFixed(2) +"%. ("+ amountOfPokesByType(stringType)+ " de "+pokeData.length +").");
	node.appendChild(textNode);//agrego el porcentaje al contenedor <div></div>
	document.getElementById("info").appendChild(node);//agrego el nodo al article con id="info"
}

window.POKEMON = POKEMON;

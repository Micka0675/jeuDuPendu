var mot = document.getElementById("mot");
var submit1 = document.getElementById("submit1");
var submit2 = document.getElementById("submit2");
var motCache="";
var motAtrouver = '';
var essai = 0;
var msg = document.getElementById("msgAlert");
var tenta = document.getElementById("essai");
var submit3 = document.getElementById("submit3");
var lettres = document.getElementById("lettres");
var entrees = [];
console.log(entrees);

msg.innerHTML = "<strong>Bienvenue dans le jeu du pendu!</strong>";
submit1.addEventListener("click" , jeu);



function jeu()
{
	
	var motAtrouver = prompt("Veuillez entrer un mot");
	console.log(motAtrouver);
	var longueurMot = motAtrouver.length;
	// var motCache = '*';

	document.getElementById("bouton2").style.visibility = "visible";
	
	msg.innerHTML = "En attente du Joueur 2";
	for (i=0; i < longueurMot; i++)
	{
		motCache = motCache + '-';
		mot.innerHTML = motCache;
	}

	


	
	submit2.addEventListener("click" , essais);
		
	function essais()
	{	
		var winOrLose = document.getElementById("winOrLose");
		var repUtil = prompt("veuillez entrer une lettre");
			// var txtEntrees = entrees2.join(",");
		var essaiRest = 9 - essai;
		entrees.push(repUtil);
		console.log(entrees);
		entrees.join(" ");
		lettres.innerHTML = "<p>Lettres entrees :<br> "+entrees+"</p>";
		// console.log(entrees);

		essai++;
		

		
		
		if(essai <= 10 )
		{
			var longueurMotCache = motCache.length;
			tenta.innerHTML = "il vous reste "+essaiRest+" essais";


			// var lettreEntre = [""];
			// var listeLettre = lettreEntre.join(",");
			// listeLettre.push(repUtil);
			// msg.innerHTML = "Lettres entrées: "+ lettreEntre;
			// longueurMotCache = longueurMotCache -1;
			// msg.innerHTML = "Joueur 2, il vous reste "+essaiRest+" essais!";
			for (i = 0 ; i < longueurMot ; i++)
			{
				if(repUtil == motAtrouver[i])
				{
					var part1Mat = motCache.substring(0, i);
					console.log(part1Mat);
					var part2Mat = motCache.substring(i+1, longueurMotCache);
					console.log(part2Mat);
					
					motCache = part1Mat + repUtil + part2Mat;
					mot.innerHTML = motCache;
					// msg.innerHTML = "Lettres entrées: "+ listeLettre;
					// msg.innerHTML = "la lettre  "+repUtil+"  figure dans le mot! Bien joué!";
				}
				if (motAtrouver == motCache)
				{
					winOrLose.innerHTML = "Vous avez gagné! felicitations!";
					msg.innerHTML = "<p><img src=\"images/photofunky.gif\" id=\"victPic\"/></p>" ;
					document.getElementById("bouton2").style.visibility = "hidden";
					mot2.innerHTML = `<p id=\"msgGood\">Bien joué! Le mot à trouver était bien -${motAtrouver}- ! </p>`;
					document.getElementById("mot").style.fontSize = "50px";
					document.getElementById("reessayer").style.visibility = "visible";

					submit3.addEventListener("click" , reload);
					function reload()
					{
						location.reload();
					}
				}
			}
		}
		else
		{
			winOrLose.innerHTML = "Vous avez Perdu! Dommage!";
			msg.innerHTML = "<p><img src=\"images/pika.gif\" id=\"victPic\"/></p>" ;
			tenta.innerHTML = "Il ne vous reste plus d'essais!";
			document.getElementById("bouton2").style.visibility = "hidden";
			mot2.innerHTML = `<p id=\"msgBad\">Le mot était -${motAtrouver}- ...</p>`;
			document.getElementById("mot").style.fontSize = "50px";
			document.getElementById("reessayer").style.visibility = "visible";
			
			submit3.addEventListener("click" , reload);
			function reload()
			{
				location.reload();
			}
		}
	}
}






// var repUtil;
// var essai = 0;
// var motCache;
// var mot;
// var lettresTrouv = 0;



// function saisie()
 
// { 
	// var mot = document.getElementById("mot").value ;
	// var motCache = '*';
	// if (essai <= 10)
	// {
		// for (curseur = 1; curseur < mot.length ; curseur++ )
		// {
			// motCache = motCache + '*';
		// }
		// document.getElementById("blocMotCache").innerHTML = "<p> le mot saisi est " + motCache + "<\p>";
		
	// }
// }

// document.getElementById("submit").addEventListener("click", function()
// {
	// saisie();
	
// });


	

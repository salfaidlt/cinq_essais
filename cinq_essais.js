var essais = 0;
var saisie;
var nombre_random = 0;
var score = 100;
var deja_commence = 0;
var difference = 0;
var r;

nombre_random = Math.random();
nombre_random *= 100;
nombre_random = Math.floor(nombre_random);

function recommencer()
{
    if(r)
        clearTimeout(r); 
    document.getElementById("commencer").innerHTML = "Cliquer ici pour recommencer";
    document.getElementById("commencer").style.color = 'rgb(255, 62, 229)';
    i = 0;
    document.getElementById("score").innerHTML = 100;
    document.getElementById("essais").innerHTML = 0;
    document.getElementById("ecran").innerHTML = '?';
}

var i = 0;
function tempo()
{
    deja_commence = 1;
    document.getElementById("commencer").innerHTML = "C'est parti !!";
    document.getElementById("commencer").style.color = 'rgb(0, 204, 255)';
    t = setTimeout(tempo, 1000);
    document.getElementById("timer").innerHTML = i;
    i++;
}
//<>

function clic()
{   
    if(deja_commence == 1)
    {
        essais++;
        document.getElementById("essais").innerHTML = essais;
        
        saisie = document.forms[0].client.value;

        if(isNaN(saisie))
            alert("Veuillez entrer des nombres!");

        if((saisie != nombre_random) && (essais > 5))
        {
            document.getElementById("score").innerHTML -= 10;
            document.getElementById("ecran").style.color = 'red';
        }

        if(saisie != nombre_random)
        {
            difference = nombre_random - saisie;
            if(difference > 0)
            {
                document.getElementById("commencer").innerHTML = "ENCORE PLUS !";
                document.getElementById("commencer").style.color = 'black';
                document.getElementById("commencer").style.fontFamily = 'Verdana, sans-serif';
            }

            else
            {
                document.getElementById("commencer").innerHTML = "ENCORE MOINS !";
                document.getElementById("commencer").style.color = 'black';
                document.getElementById("commencer").style.fontFamily = 'Verdana, sans-serif';
            }
        }

        if(saisie == nombre_random)
        {
            document.getElementById("ecran").style.color = 'green';
            document.getElementById("ecran").innerHTML = nombre_random;
            clearTimeout(t);
            document.getElementById("commencer").innerHTML = "Gagné !!";
            
            setTimeout(recommencer, 3000);
        }

        if(score <=0)
        {
            document.getElementById("commencer").innerHTML = "Perdu !!";
            alert("Vous avez perdu :(");
            r = setTimeout(recommencer, 2000);

        }
    }
    else
        alert("Veuiller d'abord cliquer sur COMMENCER MAINTENANT !!");
}
function calcul_moyenne() 
{
    var note1= prompt("donner la première note: ");
    var coeff1=prompt("donner le premier coefficient");
    var note2= prompt("donner la deuxieme note: ");
    var coeff2=prompt("donner le deuxieme coefficient");
    var note3= prompt("donner la troisieme note: ");
    var coeff3=prompt("donner le troisieme coefficient");

    var somme = Number((note1)*coeff1)+Number((note2)*coeff2)+Number((note3)*coeff3);
    var coeff = Number(coeff1) +Number(coeff2) +Number(coeff3);

    document.write ("Voici la somme: " + somme + "<br>");
    
    var moyenne= (somme/coeff);

    document.write("voici la moyenne:" + moyenne +"<br>");
    
    if (moyenne<10)
    document.write("Vous etes redoublant");
    else
    document.write("Vous etes admis");
}


function test_age()
{
    var age= prompt("Donnez votre age");
    if (age <18)
    {
    document.write("Vous etes mineur");
    document.bgColor="red";
    }
    else
    {
    document.write("Vous etes majeur");
    document.bgColor(green);
    }
}

function simple_affichage()
{
    var nom = prompt("Donnez votre nom");
    var prenom =prompt("Donnez votre prenom");

    document.write("<div style='background-color:violet; margin:auto; width:300px; border:2px solid blue;'>");
    document.write("Bonjour  " +prenom + " " + nom) ;
    document.write("</div>");
}

function test_couleur()
{
    var c = prompt("Donnez une couleur");
    if ( c == "rouge" || c=="ROUGE" || c=="R")
    document.body.style.background = "red";
    else if (c == "bleu"|| c=="BLEU" || c=="B")
    document.body.style.background = "blue";
    else if (c =="vert" || c=="VERT"|| c=="V") 
    document.body.style.background = "green";
    else
    document.write("Couleur non comprise");
}
